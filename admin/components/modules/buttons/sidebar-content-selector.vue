<template>
  <label class="sidebar-content-selector-component">
    <input
      type="radio"
      :name="name"
      class="sidebar-content-radio"
      :checked="checked ? 'checked' : ''"
    />
    <div class="selector-content">
      <div class="selector-icon-wrapper"><slot /></div>
      <div class="selector-text-wrapper">
        <p class="selector-text">{{ selectorText }}</p>
      </div>
    </div>
  </label>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "sidebar-content-selector",
  props: ["selectorText", "checked", "name"],
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/_variables.scss";
label.sidebar-content-selector-component {
  cursor: pointer;
  &::after {
    background-color: $white;
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
    z-index: -1;
  }
  &:hover {
    &::after {
      opacity: 0.5;
    }
    outline: 1px solid $light-coral-black-15;
  }
  input.sidebar-content-radio {
    cursor: pointer;
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;
    &:checked ~ .selector-content {
      box-shadow: $xs-regular-shadow;
      color: $golden-orange;
      outline: 1px solid $golden-orange;
      &::after {
        opacity: 1;
      }
      .selector-icon-wrapper {
        background-color: $pearl-color;
      }
    }
  }
  .selector-content {
    @include relative-child-margin($xs-white-space, -right);
    align-items: center;
    background-color: $light-coral-black-15;
    border-radius: $xs-border-radius;
    color: $light-coral-black;
    display: flex;
    isolation: isolate;
    outline: 1px solid $light-coral-black-15;
    padding: $sm-padding;
    position: relative;
    transition: outline $duration-30, color $duration-30;
    .selector-icon-wrapper {
      background-color: transparent;
      border-radius: $xs-border-radius;
      display: flex;
      padding: $xs-padding;
      transition: background-color $duration-30;
    }
  }
}
</style>
