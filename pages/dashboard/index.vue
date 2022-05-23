<template>
  <div class="homepage-wrapper">
    <SwanAgcLogo />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {
    SwanAgcLogo: () => import("@/admin/components/misc/swan-agc-logo.vue"),
  },
});
</script>

<style lang="scss">
.homepage-wrapper {
  flex-grow: 1;
  display: grid;
  place-items: center;
}
</style>
