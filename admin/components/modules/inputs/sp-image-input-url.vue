<template>
  <div class="sp-image-input-component">
    <div class="input-preview-frame">
      <div class="input-preview-icon" v-if="!src">
        <IconImagePlaceholder class="image-placeholder-icon" />
      </div>
      <img :src="src" class="input-preview-image" v-if="src" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {
    IconImagePlaceholder: () =>
      import("@/admin/components/icons/icon-image-placeholder.vue"),
  },
  props: {
    src: { type: String, required: false },
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/variables";
.sp-image-input-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include relative-child-margin($std-white-space, -bottom);
  h6.input-title {
    color: $light-coral-black;
    font-weight: 300;
    font-size: 18px;
  }
  .input-preview-frame {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    max-height: 400px;
    background-color: $coral-black-15;
  }
  .input-preview-icon {
    padding: $gig-padding;
  }
  img.input-preview-image {
    width: 100%;
    height: 100%;
  }
  .image-placeholder-icon {
    color: $light-coral-black-50;
    font-size: 100px;
  }
}
</style>
