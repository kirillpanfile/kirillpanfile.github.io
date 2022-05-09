<template>
  <div class="" ref="canvas"></div>
</template>

<script>
import * as THREE from "three";
export default {
  name: "TheCanvas",
  data: function () {
    return {};
  },
  methods: {
    init() {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, 200 / 200, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setClearColor(0x000000, 0);
      const light = new THREE.DirectionalLight("hsl(0, 100%, 100%)");
      const geometry = new THREE.OctahedronGeometry(1, 0);
      const material = new THREE.MeshStandardMaterial({
        side: THREE.FrontSide,
        color: "#5d5fef",
        wireframe: false,
      });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(camera);
      scene.add(light);
      scene.add(cube);
      renderer.setSize(200, 200);
      light.position.set(0, 0, 10);
      camera.position.z = 5;
      this.$refs.canvas.appendChild(renderer.domElement);
      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        cube.rotation.y += 0.01;
      }
      animate();
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style>
canvas {
  width: 100vw;
  height: 100vh;
}
</style>
