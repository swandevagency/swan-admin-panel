<template>
  <div class="sp-image-input-component">
    <h6 class="input-title">{{ inputTitle }}</h6>
    <label for="image-input" class="input-file-label">
      <div class="input-preview-frame">
        <div class="input-preview-icon">
          <IconImagePlaceholder class="image-placeholder-icon" />
        </div>
        <!-- <img src="" alt="" class="input-preview-image" /> -->
      </div>
      <input
        type="file"
        class="image-input"
        :accept="accept"
        :id="inputId"
        ref="imageInput"
        multiple
      />
    </label>
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
    inputTitle: {
      type: String,
      default: () => "Image input",
    },
    inputId: {
      type: String,
      default: () => "image-input",
    },
    accept: {
      type: String,
      default: () => "image/jpeg, image/png",
    },
  },
  mounted() {
    const imageInput = this.$refs.imageInput as any;
    if (imageInput)
      imageInput.onchange = (event: any) => {
        console.log(event.target.files);
      };
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
  label.input-file-label {
    cursor: pointer;
    padding: $gig-padding;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: $coral-black-15;
  }
  .image-placeholder-icon {
    color: $light-coral-black-50;
    font-size: 100px;
  }
  input.image-input {
    display: none;
  }
}
</style>
