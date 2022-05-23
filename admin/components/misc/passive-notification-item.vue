<template>
  <!-- Notification system should be implemented the STD way -->
  <div
    :class="[
      'passive-notification-item-component',
      notificationTypeLowercase,
      showNotification ? 'show' : 'hide',
    ]"
    v-if="enableComponent"
  >
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
import Vue, { PropOptions } from "vue";
import { NotificationIcons } from "@/admin/plugins/Notification";
export default Vue.extend({
  name: "notification-item-component",
  components: {
    ErrorIcon: () => import("@/admin/components/icons/icon-error.vue"),
    WarningIcon: () => import("@/admin/components/icons/icon-warning.vue"),
    InfoIcon: () => import("@/admin/components/icons/icon-info.vue"),
  },
  props: {
    notificationMessage: {
      type: String,
      required: false,
    },
    notificationTitle: {
      type: String,
      required: false,
    },
    notificationType: {
      type: String,
      required: false,
    } as PropOptions<NotificationIcons>,
    duration: {
      type: Number,
      required: false,
    },
  },
  data: () => ({
    showNotification: true as boolean,
    enableComponent: true as boolean,
  }),
  computed: {
    notificationTypeLowercase(): string {
      if (this.notificationType) return this.notificationType.toLowerCase();
      return "";
    },
  },
  methods: {
    hideNotification(): void {
      this.showNotification = false;
    },
    disableComponent(): void {
      this.enableComponent = false;
    },
  },
  mounted(): void {
    setTimeout((): void => {
      this.hideNotification();
      setTimeout(this.disableComponent, 300);
    }, this.duration);
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/_variables.scss";

.passive-notification-item-component {
  max-width: 500px;
  border-radius: $xs-border-radius;
  border: 1px solid $coral-black-15;
  background-color: $white;
  padding: $md-padding;
  box-shadow: $xs-smooth-shadow;
  @include relative-child-margin($sm-white-space, -bottom);
  &.show {
    animation: show-passive-notification $duration-30 forwards;
  }
  &.hide {
    animation: hide-passive-notification $duration-30 forwards;
  }
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
@keyframes show-passive-notification {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes hide-passive-notification {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
}
</style>
