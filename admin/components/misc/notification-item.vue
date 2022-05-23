<template>
  <div :class="['notification-item-component', notificationTypeLowercase]">
    <div class="notification-title-wrapper">
      <div class="notification-icon-wrapper">
        <ErrorIcon v-if="notificationTypeLowercase === 'error'" />
        <WarningIcon v-if="notificationTypeLowercase === 'warning'" />
        <InfoIcon v-if="notificationTypeLowercase === 'info'" />
      </div>
      <div class="notification-title">
        <h5 class="notification-title">{{ notificationTitle }}</h5>
      </div>
    </div>
    <div class="notification-body-wrapper">
      <p class="notification-body-paragraph">{{ notificationMessage }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "notification-item-component",
  props: ["notificationMessage", "notificationTitle", "notificationType"],
  computed: {
    notificationTypeLowercase(): string {
      if (this && this.notificationType)
        return this.notificationType.toLowerCase();
      return "";
    },
  },
  components: {
    ErrorIcon: () => import("@/admin/components/icons/icon-error.vue"),
    WarningIcon: () => import("@/admin/components/icons/icon-warning.vue"),
    InfoIcon: () => import("@/admin/components/icons/icon-info.vue"),
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/_variables.scss";

.notification-item-component {
  border-radius: $xs-border-radius;
  border: 1px solid $coral-black-15;
  background-color: $white;
  padding: $md-padding;
  @include relative-child-margin($sm-white-space, -bottom);
  &.error {
    background-color: $error-tint;
  }
  &.warning {
    background-color: $warning-tint;
  }
  .notification-title-wrapper {
    display: flex;
    align-items: center;
    @include relative-child-margin($sm-white-space, -right);
  }
  .notification-icon-wrapper {
    display: flex;
  }
  h5.notification-title {
    font-size: $sm-font-size;
    font-weight: 400;
    color: $light-coral-black;
  }
  .notification-body-wrapper {
    padding-left: 54px;
  }
  p.notification-body-paragraph {
    color: $light-coral-black;
    font-size: $xs-font-size;
    font-weight: 400;
  }
}
</style>
