<script setup lang="ts">
import { reactive } from "vue";
import Bg from "./homes/bg.vue";
import Admission from "./homes/admission.vue";
import Two from "./homes/two.vue";

const texts = reactive({
  cnFlag: false,
});

const state = reactive({
  active: 1,
});

const toTwo = (e: any) => {
  console.log(e);
  state.active = 2;
};

const toThree=(e:any)=>{
  console.log(e);
  state.active = 3;
}

setInterval(() => {
  texts.cnFlag = !texts.cnFlag;
}, 5000);
</script>

<template>
  <div class="content-box">
    <div v-if="state.active == 1" class="item">
      <Admission @next="toTwo" />
    </div>
    <transition name="fade">
      <Two v-if="state.active == 2" @next="toThree"/>
    </transition>
    <div class="item">
      <Bg />
      <div class="text-box">
        <transition name="fade">
          <div class="texts" v-if="!texts.cnFlag">
            <h1 class="nowrap" style="margin-bottom: 24px">
              look at the stars
            </h1>
            <h1 class="nowrap">look how they shine for u</h1>
          </div>
          <div class="texts" v-else>
            <h1 class="cn_text">今晚，整片星空将为你一人闪烁</h1>
          </div>
        </transition>
      </div>
      <div></div>
    </div>
    <div class="item">
      <div class="text-box">
        <transition name="fade">
          <div class="texts" v-if="!texts.cnFlag">
            <h1 class="nowrap" style="margin-bottom: 24px">
              and everything you do
            </h1>
            <h1 class="nowrap">yeah they were all yellow</h1>
          </div>
          <div class="texts" v-else>
            <h1 class="cn_text">你的一举一动，都是那么的耀眼</h1>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item,
.content-box {
  width: 100%;
  height: 100%;
  // position: relative;
}
.item {
  position: relative;
}
.content-box {
  overflow: hidden;
}
.text-box {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  perspective: 1300px;
  transform-style: preserve-3d;
}
.texts {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  color: #fff;
  text-align: left;
  transform-style: preserve-3d;
  .nowrap {
    white-space: nowrap;
  }
  h1 {
    font-size: 24px;
    font-weight: 400;
    text-shadow: 0 0 10px #fff;
    font-family: "楷体";
  }
  .cn_text {
    font-size: 32px;
    text-align: center;
  }
}
// 弹窗过渡显示效果
// 进场时候过渡的开始状态和离场的结束状态
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
// 指定过渡的属性和时间，同样是进场和离场的过渡时间
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s linear 0s;
}

// 进场时候过渡的结束状态和离场的开始状态
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
