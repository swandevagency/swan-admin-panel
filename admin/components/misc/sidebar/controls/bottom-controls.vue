<template>
  <div class="bottom-controls-component">
    <NuxtLink class="home" to="/dashboard/pages"><IconHome /></NuxtLink>
    <NuxtLink class="chatroom" to="/dashboard/chatroom"
      ><IconChatBubble
    /></NuxtLink>
    <NuxtLink class="notifications" to="/dashboard/notifications"
      ><IconNotifications notificationsCount="3"
    /></NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {
    IconHome: () => import("@/admin/components/icons/icon-home.vue"),
    IconChatBubble: () =>
      import("@/admin/components/icons/icon-chat-bubble.vue"),
    IconNotifications: () =>
      import("@/admin/components/icons/icon-notifications.vue"),
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/variables";
.bottom-controls-component {
  @include relative-child-margin($std-white-space, -top);
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
