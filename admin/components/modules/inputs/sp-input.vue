<template>
  <input
    type="text"
    class="sp-input-component"
    @input="handleInput"
    :value="value"
  />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "sp-input",
  props: ["value"],
  methods: {
    handleInput(e: any) {
      this.$emit("input", e.target.value);
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/_variables.scss";
input.sp-input-component {
  background-color: $coconut-milk;
  border-radius: $xs-border-radius;
  border: none;
  box-shadow: $zero-regular-shadow;
  font-size: $xs-font-size;
  display: block;
  isolation: isolate;
  outline: none;
  padding: $xs-white-space $std-white-space;
  position: relative;
  transition: box-shadow $duration-30;
  &:hover,
  &:active,
  &:focus {
    border: none;
    box-shadow: $xs-regular-shadow-outline;
    outline: none;
  }
  &::placeholder {
    color: $coral-black-50;
  }
}
</style>
