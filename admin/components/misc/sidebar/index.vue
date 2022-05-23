<template>
  <div class="sidebar-component">
    <!-- Controls -->
    <SidebarControls @collapseChange="collapsed = !collapsed" />
    <!-- Content selector -->
    <div
      :class="[
        'sidebar-content-selector-wrapper',
        collapsed ? 'collapsed' : '',
      ]"
    >
      <div class="sidebar-content-selector-title-wrapper">
        <div class="sidebar-content-selector-title">
          <IconHome class="home-icon" disabled />
          <h3 class="content-selector-title">Home</h3>
        </div>
      </div>
      <div class="sidebar-content-selectors-list-wrapper">
        <h4 class="sidebar-content-selectors-list-title">Manage</h4>
        <div class="selectors-list">
          <SidebarContentSelectorLink
            to="/dashboard/pages"
            selectorText="Pages"
          >
            <IconPages class="i-xs" disabled />
          </SidebarContentSelectorLink>
          <SidebarContentSelectorLink
            to="/dashboard/clients"
            selectorText="Clients"
          >
            <span class="material-icon round i-xs">contact_mail</span>
          </SidebarContentSelectorLink>
          <SidebarContentSelectorLink
            to="/dashboard/categories"
            selectorText="Blogs"
          >
            <span class="material-icon i-xs round" disabled>newspaper</span>
          </SidebarContentSelectorLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "sidebar",
  components: {
    SidebarControls: () => import("./controls.vue"),
    IconPages: () => import("@/admin/components/icons/icon-pages.vue"),
    IconHome: () => import("@/admin/components/icons/icon-home.vue"),
    IconNightMode: () => import("@/admin/components/icons/icon-night-mode.vue"),
    IconBusinessCenter: () =>
      import("@/admin/components/icons/icon-business-center.vue"),
    SidebarContentSelectorLink: () =>
      import(
        "@/admin/components/modules/buttons/sidebar-content-selector-link.vue"
      ),
  },
  data() {
    return {
      collapsed: false,
    };
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/_variables.scss";
.sidebar-component {
  display: flex;
  position: sticky;
  top: 0;
  z-index: 10000;
  height: 100vh;
  button {
    align-items: center;
    background-color: $white;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 36px;
    justify-content: center;
    width: 36px;
  }
  .sidebar-content-selector-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    max-width: 600px;
    min-width: 300px;
    transition: transform $duration-15, width $duration-15, opacity $duration-15,
      min-width $duration-15, max-width $duration-15;
    &.collapsed {
      min-width: 0px;
      max-width: 0px;
      width: 0px;
      pointer-events: none;
      transform: translateX(-100%);
    }
  }
  .sidebar-content-selectors-list-wrapper {
    background-color: whitesmoke;
    flex-grow: 1;
    padding: $lg-padding $md-padding 0;
  }
  .sidebar-content-selector-title-wrapper {
    background-color: $traditional-gold-color;
    display: flex;
    height: 100px;
    padding: ($md-padding + 2px) $md-padding;
  }
  .sidebar-content-selector-title {
    @include relative-child-margin(12px, -right);
    align-items: center;
    display: flex;
    margin-top: auto;
    .home-icon {
      color: white;
    }
  }
  h3.content-selector-title {
    color: $white;
    font-size: $sm-font-size;
    font-weight: 400;
  }
  h4.sidebar-content-selectors-list-title {
    color: $coral-black;
    font-size: $sm-font-size;
    font-weight: 400;
  }
  .selectors-list {
    @include relative-child-margin($std-white-space, -bottom);
    display: flex;
    flex-direction: column;
    margin-top: $std-white-space;
  }
}
</style>
