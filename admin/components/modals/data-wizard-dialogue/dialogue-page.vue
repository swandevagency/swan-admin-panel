<template>
  <div
    class="dialogue-page-component"
    v-show="elementIndex === pageIndex"
    ref="dialoguePage"
  >
    <h6 class="dialogue-page-title" v-if="pageTitle">{{ pageTitle }}</h6>
    <div class="dialogue-page-contents">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    pageTitle: {
      type: String,
      required: false,
    },
  },
  data: () => ({
    pageIndex: 0 as number,
    elementIndex: 0 as number,
  }),
  created() {
    this.$parent.$on("navigate-page", this.setPageIndex);
  },
  mounted() {
    this.getElementIndex();
  },
  methods: {
    setPageIndex(index: number) {
      this.pageIndex = index;
    },
    getElementIndex() {
      const dialogueContentsElement = this.$parent.$el.querySelector(
        ".dialogue-contents-wrapper"
      );
      if (dialogueContentsElement && dialogueContentsElement.children)
        Array.from(dialogueContentsElement.children).forEach(
          (el: any, index: number) => {
            if (el === this.$refs.dialoguePage) this.elementIndex = index;
          }
        );
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/variables";
.dialogue-page-component {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-right: unset !important;
  opacity: 0;
  transform: translateY($xs-white-space);
  animation: dialogue-page-move-in $duration-30 forwards;
  @include relative-child-margin($std-white-space, -bottom);
  &[style*="display: none;"] {
    animation: unset;
  }
  h6.dialogue-page-title {
    color: $light-coral-black;
    font-weight: 300;
    font-size: 18px;
  }
  .dialogue-page-contents {
    display: flex;
    @include relative-child-margin($std-white-space, -right);
    > * {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: stretch;
      @include relative-child-margin($std-white-space, -bottom);
    }
  }
}
@keyframes dialogue-page-move-in {
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
