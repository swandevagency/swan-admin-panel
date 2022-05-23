<template>
  <div class="swan-agc-logo-component">
    <LoadingElement />
    <SwanAgcLogo :message="message" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {
    SwanAgcLogo: () => import("@/admin/components/misc/swan-agency-logo.vue"),
    LoadingElement: () =>
      import("@/admin/components/misc/loading-elements.vue"),
  },
  props: {
    message: {
      type: String,
      required: false,
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/variables";
.swan-agc-logo-component {
  display: grid;
  transform: translateY(-50%);
  place-items: center;
  isolation: isolate;
}
</style>
