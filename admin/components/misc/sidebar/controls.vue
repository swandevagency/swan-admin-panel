<template>
  <div class="sidebar-controls-component">
    <TopControls @collapseChange="$emit('collapseChange')" />
    <BottomControls />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {
    TopControls: () => import("./controls/top-controls.vue"),
    BottomControls: () => import("./controls/bottom-controls.vue"),
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/variables";
.sidebar-controls-component {
  position: relative;
  z-index: 10;
  align-items: center;
  background-color: $white;
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: space-between;
  padding: $lg-padding 0;
  width: 100px;
}
</style>
