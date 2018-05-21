import * as THREE from 'three';
export let container, stats, camera, scene, renderer;
export let mouseX = 0, mouseY = 0;
export let windowHalfX = window.innerWidth / 2, windowHalfY = window.innerHeight / 2;

export let textureCube = new THREE.CubeTextureLoader()
    .setPath('https://nafsar.github.io/demo/fun/')
    .load(['114.png', '112.png', '116.png', '115.png', '111.png', '113.png']);

export function init() {
  container = document.createElement('div');
  document.body.appendChild(container); 
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 100000);
  scene = new THREE.Scene();
  scene.background = textureCube;
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  document.addEventListener('mousemove', onDocumentMouseMove, false);
  window.addEventListener('resize', onWindowResize, false);

}

export function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

export function onDocumentMouseMove(event) {
  mouseY = (event.clientY - window.innerHeight);
}

export function animate() {
  requestAnimationFrame(animate);
  let timer = -0.0002 * Date.now();
  camera.position.x = 1000 * Math.cos(timer);
  camera.position.y += (- mouseY - camera.position.y) * .05;
  camera.position.z = 1000 * Math.sin(timer);
  camera.lookAt(scene.position);
  renderer.render(scene, camera);

}

