<template>
  <a href="#" class="sp-link-component"><slot /></a>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({ name: "sp-link" });
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/_variables.scss";
.sp-link-component {
  color: $golden-orange;
  font-size: $xs-font-size;
  font-weight: 300;
  position: relative;
  transition: color $duration-30;
  &::after {
    background-color: $golden-orange;
    bottom: -8px;
    content: "";
    height: 1px;
    left: 50%;
    pointer-events: none;
    position: absolute;
    right: 50%;
    transition: right $duration-30, left $duration-30;
  }
  &:hover,
  &:focus {
    color: $golden-orange-80;
    &::after {
      right: 0;
      left: 0;
    }
  }
}
</style>
