<template>
  <div class="page-navigator-component">
    <span class="link-item" v-for="(pathItem, index) in paths" :key="index">
      <NuxtLink class="link" :to="pathItem.path">{{
        pathItem.pathName
      }}</NuxtLink>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "page-navigator",
  computed: {
    paths(): Array<Object> {
      let paths: { path: string; pathName: string }[] = [];
      let pathFragments: string[] = this.$route.fullPath.split("/");
      pathFragments.shift();
      for (let i = 0; i < pathFragments.length; i++) {
        const path: string = `/${pathFragments.slice(0, i + 1).join("/")}`;
        if (path === "/" || path === "//") continue;
        const pathName: string = pathFragments[i];
        if (i < pathFragments.length)
          paths.push({ path, pathName: pathName.split("?")[0] });
        else paths.push({ path, pathName });
      }
      return paths;
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/_variables.scss";
.page-navigator-component {
  @include relative-child-margin(42px, -right);
  display: flex;
  span.link-item {
    align-items: center;
    animation: slide-right-animation $duration-60 forwards;
    display: flex;
    position: relative;
    &:last-child::after {
      display: none;
    }
    &::after {
      border-right: 2px solid $light-coral-black;
      border-top: 2px solid $light-coral-black;
      bottom: auto;
      content: "";
      display: block;
      height: 6px;
      position: absolute;
      right: -$std-white-space;
      top: auto;
      transform: rotateZ(45deg);
      width: 6px;
    }
  }
  a.link {
    color: $light-coral-black;
    text-transform: capitalize;
    font-size: $sm-font-size;
    transition: color $duration-30;
    &:hover {
      color: $traditional-gold-color;
    }
    &.nuxt-link-exact-active {
      color: $golden-orange;
    }
  }
}
@keyframes slide-right-animation {
  0% {
    opacity: 0;
    transform: translateX(-12px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
