<template>
  <div
    class="category-button-component"
    :enable-control-buttons="enableControlButtons"
  >
    <div class="control-buttons-wrapper" v-if="enableControlButtons">
      <div class="control-buttons">
        <button class="delete-button">
          <span class="material-icon i-xs round" @click.self="$emit('delete')"
            >delete</span
          >
        </button>
        <button class="edit-button">
          <span class="material-icon i-xs round" @click.self="$emit('edit')"
            >edit</span
          >
        </button>
      </div>
    </div>
    <NuxtLink :to="to" class="category-link">
      <div class="button-title-content">
        <div class="button-icon-wrapper"><slot /></div>
        <div class="button-title-wrapper">
          <h5 class="button-title">{{ categoryName }}</h5>
        </div>
      </div>
      <div class="button-body-content">
        <p class="body-content">{{ categoryText }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "category-button",
  props: {
    categoryText: { type: String },
    categoryName: { type: String },
    to: { type: String, default: () => "#" },
    enableControlButtons: { type: Boolean, default: () => false },
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/_variables.scss";
.category-button-component {
  border-radius: $xs-border-radius;
  cursor: pointer;
  border: 1px solid $coral-black-15;
  position: relative;
  transition: border-radius $duration-15;
  display: flex;
  isolation: isolate;
  &::after {
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
  a.category-link {
    display: block;
    border-radius: $xs-border-radius;
    position: relative;
    background-color: $white;
    z-index: 1;
    padding: $md-padding;
    @include relative-child-margin($std-white-space, -bottom);
  }
  &:hover {
    &[enable-control-buttons] {
      border-radius: 0px 0px $xs-border-radius $xs-border-radius;
    }
    &::after {
      opacity: $hover-opacity-dark;
    }
    .control-buttons-wrapper {
      pointer-events: all;
      transform: translateY(0px);
      box-shadow: 0px -3px 3px $black-15;
      display: initial;
      outline: 1px solid $coral-black-15;
    }
  }
  .control-buttons-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    margin-bottom: 0;
    transform: translateY(100%);
    bottom: 100%;
    padding: $sm-padding;
    box-shadow: 0 0 0 $black-00;
    outline: 0px solid $coral-black-15;
    transition: transform $duration-15;
    background-color: $coconut-milk;
    border-radius: $xs-border-radius $xs-border-radius 0 0;
    z-index: -1;
    transition: transform $duration-15, box-shadow $duration-15,
      outline $duration-15;
    transform: translateY(100%);
    pointer-events: none;
    span {
      color: $light-coral-black;
    }
  }
  button {
    background-color: transparent;
    &:hover {
      &.delete-button {
        span {
          color: $error-red;
        }
      }
      &.edit-button {
        span {
          color: $golden-orange;
        }
      }
    }
  }
  .control-buttons {
    display: flex;
    @include relative-child-margin($sm-white-space, -right);
  }
  .button-title-content {
    @include relative-child-margin($xs-white-space, -right);
    align-items: center;
    display: flex;
  }
  .button-icon-wrapper {
    height: 48px;
    width: 48px;
  }
  h5.button-title {
    color: $coral-black;
    font-size: $sm-font-size;
    font-weight: 400;
  }
  p.body-content {
    color: $light-coral-black;
    font-size: $xs-font-size;
    line-height: 1.8em;
    font-weight: 300;
  }
}
</style>
