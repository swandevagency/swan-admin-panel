<template>
  <div class="tags-list-component">
    <p class="tags-list-name">{{ name.replace("-", " ") }}</p>
    <ul class="tags-list">
      <li class="tag-item" v-for="(dataItem, index) in dataItems" :key="index">
        <label class="tag-item-label">
          <input
            type="radio"
            :name="name"
            :value="dataItem.value"
            @change="$emit('change', dataItem.value)"
            :checked="index === selectedItem"
          />
          <div class="tag-item-contents">
            <span class="material-icon i-xs round" disabled>check</span>
            <p class="tag-item-name">{{ dataItem.label }}</p>
          </div>
        </label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    name: { type: String, required: false },
    selectedItem: { type: Number, required: false },
    dataItems: {
      type: Object,
      required: false,
      default: () => ({
        label: "",
        value: "",
      }),
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/variables";

.tags-list-component {
  display: flex;
  align-items: center;
  @include relative-child-margin($std-white-space, -right);
  p.tags-list-name {
    color: $light-coral-black-50;
    font-size: $xs-font-size;
    text-transform: capitalize;
    &::after {
      content: ":";
    }
  }
  ul.tags-list {
    display: flex;
    align-items: stretch;
    @include relative-child-margin($std-white-space, -right);
  }
  li.tag-item {
    display: inline-block;
  }
  label.tag-item-label {
    cursor: pointer;
    isolation: isolate;
    display: flex;
    align-items: center;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      background-color: $light-coral-black-05;
      border-radius: 100px;
      opacity: 0;
      transition: opacity $duration-30;
    }
    &:hover {
      &::after {
        opacity: 1;
      }
    }
    input {
      width: 0;
      height: 0;
      opacity: 0;
      position: absolute;
      &:checked ~ .tag-item-contents {
        box-shadow: $xs-regular-shadow;
        color: $golden-orange;
        outline: 1px solid $golden-orange;
        span {
          margin-right: $xs-white-space;
          width: 24px;
        }
      }
    }
    .tag-item-contents {
      // @include relative-child-margin($xs-white-space, -right);
      align-items: center;
      background-color: white;
      border-radius: 100px;
      outline: 1px solid $light-coral-black-15;
      color: $light-coral-black;
      display: flex;
      padding: $sm-padding / 2 $sm-padding;
      box-shadow: 0 0 0 $black-00;
      position: relative;
      transition: color $duration-30, outline $duration-30,
        box-shadow $duration-30;
      p {
        line-height: 24px;
        font-size: $xs-font-size;
      }
      span {
        overflow: hidden;
        margin-right: unset;
        width: 0px;
        color: $golden-orange;
        transition: width $duration-30;
      }
    }
  }
}
</style>
