<script setup lang="ts">
import { onMounted } from "vue";
import { Star } from "@/utils/bg-start";

let stars:  any[] = [];
const maxStars = 1100; // 星星数量

function initCanvas() {
  const canvas: any = document.getElementById("starBg");
  const ctx = canvas.getContext("2d");
  const w = (canvas.width = window.innerWidth);
  const h = (canvas.height = window.innerHeight);

  const canvas2 = document.createElement("canvas");
  const ctx2:any = canvas2.getContext("2d");
  canvas2.width = 100;
  canvas2.height = 100;
  const half = canvas2.width / 2;
  const gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
  // gradient2.addColorStop(0.025, "#CCC");
  gradient2.addColorStop(0.05, "#CCC");
  gradient2.addColorStop(0.1, "hsl(217, 61%, 33%)");
  gradient2.addColorStop(0.25, "hsl(217, 64%, 6%)");
  gradient2.addColorStop(1, "transparent");

  ctx2.fillStyle = gradient2;
  ctx2.beginPath();
  ctx2.arc(half, half, half, 0, Math.PI * 2);
  ctx2.fill();

  for (var i = 1; i < maxStars; i++) {
    const star = new Star({ w, h }, ctx, canvas2);
    stars[i] = star;
  }
  function animation() {
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 0.8; //尾巴
    ctx.fillStyle = "hsla(217, 64%, 6%, 2)";
    ctx.fillRect(0, 0, w, h);

    ctx.globalCompositeOperation = "lighter";
    for (let i = 1; i < stars.length; i++) {
      stars[i].draw();
    }

    window.requestAnimationFrame(animation);
  }
  animation();
}
onMounted(() => {
  initCanvas();
});
</script>

<template>
  <canvas id="starBg"></canvas>
</template>

<style scoped lang="scss">
#starBg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
