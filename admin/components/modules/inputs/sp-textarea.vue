<template>
  <textarea
    name="sp-textarea"
    cols="30"
    rows="10"
    class="sp-textarea-component"
    :value="value"
    @input="handleInput"
  >
  </textarea>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "sp-textarea",
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
textarea.sp-textarea-component {
  background-color: $coconut-milk;
  border-radius: $xs-border-radius;
  border: none;
  resize: none;
  box-shadow: $zero-regular-shadow;
  font-size: $xs-font-size;
  font-weight: 300;
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
