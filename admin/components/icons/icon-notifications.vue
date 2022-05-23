<template>
  <div class="notifications-icon-wrapper">
    <span
      v-if="notificationsCount && notificationsCount > 0"
      class="notifications-count"
      >{{ notificationsCount }}</span
    >
    <span class="material-icon round">notifications</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IconNotifications",
  props: ["notificationsCount"],
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/_variables.scss";

.notifications-icon-wrapper {
  position: relative;
  span.notifications-count {
    align-items: center;
    background-color: white;
    border-radius: 50%;
    color: $golden-orange;
    display: block;
    display: flex;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    justify-content: center;
    outline: 2px solid $coconut-milk;
    position: absolute;
    right: -8px;
    top: -8px;
    width: 24px;
  }
}
</style>
