<template>
  <label class="sp-combobox-component" tabindex="0" :for="id">
    <span class="expand-icon-wrapper">
      <IconExpand class="i-xs" disabled />
    </span>
    <select
      :name="name"
      :id="id"
      class="sp-combobox-input"
      @change="handleSelect"
    >
      <slot />
    </select>
  </label>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {
    IconExpand: () => import("@/admin/components/icons/icon-expand.vue"),
  },
  props: {
    name: { type: String, required: false },
    id: { type: String, required: false },
  },
  methods: {
    handleSelect(e: any) {
      this.$emit("change", e);
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/variables";
.sp-combobox-component {
  position: relative;
  box-shadow: $zero-regular-shadow;
  transition: box-shadow $duration-30;
  &::after {
    content: "";
    position: absolute;
    right: 1px;
    top: 1px;
    bottom: 1px;
    border-radius: 5px;
    background-color: white;
    width: 34px;
    pointer-events: none;
  }
  &::before {
    background-color: $black;
    border-radius: $xs-border-radius;
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity $duration-30;
    z-index: 1;
  }
  &:hover,
  &:focus {
    outline: none;
    box-shadow: $xs-regular-shadow;
    &::before {
      opacity: $hover-opacity-dark;
    }
  }
  .expand-icon-wrapper {
    display: flex;
    z-index: 1;
    align-items: center;
    pointer-events: none;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 24px;
    right: $sm-white-space;
  }
  select.sp-combobox-input {
    font-size: $xs-font-size;
    color: $light-coral-black;
    width: 100%;
    border: 1px solid $coral-black-15;
    height: 100%;
    padding: $xs-white-space $sm-white-space;
    padding-right: $lg-white-space;
    border-radius: $xs-border-radius;
  }
}
</style>
