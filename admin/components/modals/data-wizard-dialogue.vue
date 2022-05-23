<template>
  <div
    :class="['data-wizard-dialogue-component', fullscreen ? 'fullscreen' : '']"
  >
    <div class="dialogue-window-frame-wrapper">
      <div class="dialogue-title-wrapper">
        <h5 class="dialogue-title">{{ dialogueTitle }}</h5>
        <button class="fullscreen-dialogue" @click="fullscreen = !fullscreen">
          <IconCloseFullscreen v-if="!fullscreen" class="i-xs" />
          <IconOpenFullscreen v-if="fullscreen" class="i-xs" />
        </button>
        <button class="close-dialogue" @click="closeDialogue">
          <IconClose class="i-xs" />
        </button>
      </div>
      <div class="dialogue-contents-wrapper" ref="dialogueContents">
        <!-- TODO think about it! -->
        <slot />
      </div>
      <div class="dialogue-control-buttons-wrapper" v-if="enableControlButtons">
        <SpCombobox
          id="dialogue-lang-switcher"
          name="dialogue-lang-switcher"
          class="dialogue-lang-switcher"
          @change="switchLang"
          v-if="enableLangSwitch"
        >
          <option value="en">English</option>
          <option value="fa">Persian</option>
        </SpCombobox>
        <SpButton @click="previous">{{
          pageAmount && pageIndex === 0 ? "Cancel" : "Previous"
        }}</SpButton>
        <SpButton isPrimary="true" @click="next">{{
          pageAmount && pageIndex === pageAmount - 1 ? "Confirm" : "Next"
        }}</SpButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    pageAmount: 0 as number,
    pageIndex: 0 as number,
    fullscreen: false as boolean,
  }),
  props: {
    dialogueTitle: {
      type: String,
      required: false,
    },
    enableLangSwitch: {
      type: Boolean,
      required: false,
    },
    enableControlButtons: {
      type: Boolean,
      default: () => true,
      required: false,
    },
  },
  watch: {
    pageIndex() {
      this.$emit("navigate-page", this.pageIndex);
    },
  },
  components: {
    IconClose: () => import("@/admin/components/icons/icon-close.vue"),
    IconCloseFullscreen: () =>
      import("@/admin/components/icons/icon-open-fullscreen.vue"),
    IconOpenFullscreen: () =>
      import("@/admin/components/icons/icon-close-fullscreen.vue"),
    SpCombobox: () =>
      import("@/admin/components/modules/inputs/sp-combobox.vue"),
    DialoguePage: () => import("./data-wizard-dialogue/dialogue-page.vue"),
    SpButton: () => import("@/admin/components/modules/buttons/sp-button.vue"),
  },
  methods: {
    pageCount(): number {
      const dialogueContentsElement = this.$refs.dialogueContents as any;

      if (
        dialogueContentsElement &&
        dialogueContentsElement.children &&
        dialogueContentsElement.children[0]
      ) {
        this.pageAmount = dialogueContentsElement.children.length;
        return dialogueContentsElement.children.length;
      }
      return 0;
    },
    previous(): void {
      if (this.pageAmount && this.pageIndex) this.pageIndex--;
      else this.closeDialogue();
    },
    next(): void {
      if (this.pageAmount && this.pageIndex !== this.pageAmount - 1)
        this.pageIndex++;
      else this.confirmDialogue();
    },
    closeDialogue(): void {
      this.$emit("close");
    },
    confirmDialogue(): void {
      this.$emit("confirm");
    },
    switchLang(e: any): void {
      this.$emit("switch-lang", e.target.value);
    },
  },
  mounted(): void {
    this.pageCount();
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/variables";
.data-wizard-dialogue-component {
  opacity: 0;
  animation: fade-in-dialogue $duration-30 forwards;
  position: fixed;
  z-index: 10000;
  background-color: $white-50;
  backdrop-filter: blur(10px);
  inset: 0;
  display: grid;
  place-items: center;
  &.fullscreen {
    .dialogue-window-frame-wrapper {
      min-height: 100%;
      min-width: 100%;
    }
  }
  .dialogue-window-frame-wrapper {
    transform: scale(0.95);
    opacity: 0;
    animation: scale-in-dialogue $duration-30 forwards;
    min-width: 600px;
    min-height: 0px;
    box-shadow: $xs-smooth-shadow;
    transition: all $duration-30;
    background-color: $white;
    padding: $lg-white-space;
    border-radius: $xs-border-radius;
    border: 1px solid $coral-black-15;
    transition: min-height $duration-15, min-width $duration-15;
  }
  .dialogue-title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: $std-white-space;
    border-bottom: 1px solid $coral-black-15;
    margin-bottom: $lg-white-space;
  }
  h5.dialogue-title {
    color: $light-coral-black;
    font-weight: 400;
    font-size: 24px;
  }
  button.close-dialogue,
  button.fullscreen-dialogue {
    background-color: transparent;
  }
  button.fullscreen-dialogue {
    margin-left: auto;
  }
  button.close-dialogue {
    margin-left: $std-white-space;
  }
  .dialogue-contents-wrapper {
    display: flex;
    > * {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: stretch;
      @include relative-child-margin($std-white-space, -bottom);
    }
    @include relative-child-margin($std-white-space, -right);
  }
  h6.dialogue-page-title {
    color: $light-coral-black;
    font-weight: 300;
    font-size: 18px;
  }
  .dialogue-control-buttons-wrapper {
    margin-top: $xlg-white-space;
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    @include relative-child-margin($std-white-space, -right);
    .dialogue-lang-switcher {
      flex-grow: 1;
    }
  }
}
@keyframes scale-in-dialogue {
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes fade-in-dialogue {
  100% {
    opacity: 1;
  }
}
</style>
