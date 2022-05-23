<template>
  <div class="error-page-wrapper">
    <WarningIcon disabled v-if="error.statusCode === 404" />
    <p class="error-message error-not-found" v-if="error.statusCode === 404">
      Error 404 - Page not found
    </p>
    <ErrorIcon disabled v-if="error.statusCode !== 404" />
    <p class="error-message" v-if="error.statusCode !== 404">
      Error occurred - {{ error.statusCode }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["error"],
  layout: "empty",
  components: {
    WarningIcon: () => import("@/admin/components/icons/icon-warning.vue"),
    ErrorIcon: () => import("@/admin/components/icons/icon-error.vue"),
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/variables";
.error-page-wrapper {
  display: flex;
  align-items: center;
  padding: 100px;
  @include relative-child-margin(24px, -right);
  p {
    font-size: 34px;
    color: $error-red;
    &.error-not-found {
      color: $warning-yellow;
    }
  }
}
</style>
