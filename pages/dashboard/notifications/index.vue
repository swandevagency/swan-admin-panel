<template>
  <div class="notification-page-wrapper">
    <div class="notifications-container">
      <NotificationItem
        notificationTitle="Info"
        notificationMessage="Cupidatat mollit do sunt non culpa nisi et sunt labore in non proident aliqua."
        notificationType="Info"
      />
      <NotificationItem
        notificationTitle="Warning"
        notificationMessage="Labore quis nulla magna consectetur id do voluptate laborum est qui ad."
        notificationType="Warning"
      />
      <NotificationItem
        notificationTitle="Info"
        notificationMessage="Velit commodo irure nulla esse et sint est id fugiat qui eiusmod Lorem aliqua."
        notificationType="Info"
      />
      <NotificationItem
        notificationTitle="Error"
        notificationMessage="Cupidatat deserunt ipsum elit aliquip ad culpa irure esse."
        notificationType="Error"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {
    NotificationItem: () =>
      import("@/admin/components/misc/notification-item.vue"),
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/_variables.scss";
.notifications-container {
  @include relative-child-margin($std-white-space, -bottom);
}
</style>
