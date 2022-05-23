<template>
  <div class="loading-elements-component">
    <div class="graphic-elements-flex-container">
      <span class="graphic-element"></span>
      <span class="graphic-element"></span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/variables";
.loading-elements-component {
  position: relative;
  display: flex;
  justify-content: center;
  z-index: -1;
  .graphic-elements-flex-container {
    position: absolute;
    top: 0;
    transform-origin: center calc(50% - 15px);
    animation: rotate-constantly 10s infinite;
    display: flex;
  }
  span.graphic-element {
    position: relative;
    display: block;
    width: 140px;
    height: 140px;
    &:first-child {
      display: flex;
      flex-direction: column;
      transform: translateY(-30px);
      margin-right: $xs-white-space;
      &::before {
        content: "";
        border-radius: $xs-border-radius 0 $xs-border-radius $xs-border-radius;
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: $shiny-gold-50;
        transform-origin: top right;
        animation: loading-scale-animation-opposite 2s $duration-30 infinite;
        width: 50px;
        height: 50px;
        margin-top: $xs-white-space;
      }
      &::after {
        content: "";
        border-radius: $xs-border-radius $xs-border-radius 0 $xs-border-radius;
        position: absolute;
        top: 0;
        right: 0;
        background-color: $shiny-gold-80;
        transform-origin: right bottom;
        animation: loading-scale-animation 2s $duration-35 infinite;
        width: 80px;
        height: 80px;
      }
    }
    &:last-child {
      display: flex;
      flex-direction: column;
      &::before {
        content: "";
        border-radius: $xs-border-radius $xs-border-radius $xs-border-radius 0;
        position: absolute;
        top: 0;
        left: 0;
        background-color: $shiny-gold-50;
        transform-origin: left bottom;
        animation: loading-scale-animation 2s $duration-40 infinite;
        width: 50px;
        height: 50px;
      }
      &::after {
        content: "";
        border-radius: 0 $xs-border-radius $xs-border-radius $xs-border-radius;
        position: absolute;
        margin-top: $xs-white-space;
        left: 0;
        bottom: 0;
        background-color: $shiny-gold-80;
        transform-origin: left top;
        animation: loading-scale-animation-opposite 2s $duration-45 infinite;
        width: 80px;
        height: 80px;
      }
    }
  }
}

@keyframes loading-scale-animation {
  0% {
    transform: scale(1) translateY(0%) translateX(0%);
    opacity: 1;
  }
  30% {
    opacity: 0;
    transform: scale(0) translateY(0%) translateX(0%);
  }
  31% {
    opacity: 1;
    transform: scale(0) translateY(0%) translateX(0%);
  }
  60% {
    transform: scale(1) translateY(-50%) translateX(-50%);
  }
  80% {
    transform: scale(1) translateY(0) translateX(0%);
  }
  100% {
    transform: scale(1) translateY(0) translateX(0%);
  }
}
@keyframes loading-scale-animation-opposite {
  0% {
    transform: scale(1) translateY(0%) translateX(0%);
    opacity: 1;
  }
  30% {
    opacity: 0;
    transform: scale(0) translateY(0%) translateX(0%);
  }
  31% {
    opacity: 1;
    transform: scale(0) translateY(0%) translateX(0%);
  }
  60% {
    transform: scale(1) translateY(50%) translateX(50%);
  }
  80% {
    transform: scale(1) translateY(0) translateX(0%);
  }
  100% {
    transform: scale(1) translateY(0) translateX(0%);
  }
}

@keyframes rotate-constantly {
  0% {
    transform: rotateZ(0deg);
  }
  12.5% {
    transform: rotateZ(90deg);
  }
  25% {
    transform: rotateZ(90deg);
  }
  37.5% {
    transform: rotateZ(180deg);
  }
  50% {
    transform: rotateZ(180deg);
  }
  62.5% {
    transform: rotateZ(270deg);
  }
  75% {
    transform: rotateZ(270deg);
  }
  87.5% {
    transform: rotateZ(360deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
