<template>
  <div
    class="message-box-component"
    v-if="!preventDefault ? showMessageBox : true"
  >
    <div class="message-box-frame-wrapper">
      <div class="message-box-title-wrapper">
        <div class="message-box-title-text-wrapper">
          <h5 class="message-box-title">{{ messageBoxTitle }}</h5>
          <span
            v-if="
              messageBoxIconLowercase === 'warning' ||
              messageBoxIconLowercase === 'error' ||
              messageBoxIconLowercase === 'info'
            "
            :class="['material-icon i-xs round', messageBoxIconLowercase]"
            disabled
            >{{ messageBoxIconLowercase }}</span
          >
        </div>
        <button class="close-message-box" @click="closeMessageBox">
          <CloseIcon class="i-xs" />
        </button>
      </div>
      <div class="message-box-contents-wrapper">
        <p class="message-content">{{ messageBoxContent }}</p>
      </div>
      <div
        class="message-box-control-buttons-wrapper"
        v-if="messageBoxButtonsLowercase === 'ok'"
      >
        <SpButton isPrimary="true" @click="ok">OK</SpButton>
      </div>
      <div
        class="message-box-control-buttons-wrapper"
        v-else-if="messageBoxButtonsLowercase === 'yes/no'"
      >
        <SpButton :isPrimary="messageBoxDefaultButton === 'yes'" @click="yes"
          >Yes</SpButton
        >
        <SpButton :isPrimary="messageBoxDefaultButton === 'no'" @click="no"
          >No</SpButton
        >
      </div>
      <div
        class="message-box-control-buttons-wrapper"
        v-else-if="messageBoxButtonsLowercase === 'yes/no/cancel'"
      >
        <SpButton :isPrimary="messageBoxDefaultButton === 'yes'" @click="yes"
          >Yes</SpButton
        >
        <SpButton :isPrimary="messageBoxDefaultButton === 'no'" @click="no"
          >No</SpButton
        >
        <SpButton
          :isPrimary="messageBoxDefaultButton === 'cancel'"
          @click="cancel"
          >Cancel</SpButton
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import {
  MessageBoxButtons,
  MessageBoxIcons,
  MessageBoxDefaultButton,
} from "@/admin/plugins/MessageBox";
export default Vue.extend({
  data() {
    return {
      showMessageBox: true as boolean,
    };
  },
  props: {
    messageBoxTitle: { type: String, required: false },
    messageBoxContent: { type: String, required: false },
    messageBoxButtons: {
      type: String,
      required: false,
    } as PropOptions<MessageBoxButtons>,
    messageBoxIcon: {
      type: String,
      required: false,
    } as PropOptions<MessageBoxIcons>,
    messageBoxDefaultButton: {
      type: String,
      required: false,
    } as PropOptions<MessageBoxDefaultButton>,
    preventDefault: { type: Boolean, required: false },
  },
  computed: {
    messageBoxButtonsLowercase(): string {
      if (this.messageBoxButtons) return this.messageBoxButtons.toLowerCase();
      return "";
    },
    messageBoxIconLowercase(): string {
      if (this.messageBoxIcon) return this.messageBoxIcon.toLowerCase();
      return "";
    },
  },
  components: {
    CloseIcon: () => import("@/admin/components/icons/icon-close.vue"),
    SpButton: () => import("@/admin/components/modules/buttons/sp-button.vue"),
  },
  methods: {
    closeMessageBox() {
      this.$emit("close");
      if (!this.preventDefault) this.showMessageBox = false;
    },
    ok(): void {
      this.$emit("ok");
      this.closeMessageBox();
    },
    yes(): void {
      this.$emit("yes");
      this.closeMessageBox();
    },
    no(): void {
      this.$emit("no");
      this.closeMessageBox();
    },
    cancel(): void {
      this.$emit("cancel");
      this.closeMessageBox();
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/variables.scss";
.message-box-component {
  opacity: 0;
  animation: fade-in-message-box $duration-30 forwards;
  position: fixed;
  z-index: 10000;
  background-color: $white-50;
  backdrop-filter: blur(10px);
  inset: 0;
  display: grid;
  place-items: center;
  .message-box-frame-wrapper {
    transform: scale(0.95);
    opacity: 0;
    animation: scale-in-message-box $duration-30 forwards;
    min-width: 600px;
    box-shadow: $xs-smooth-shadow;
    transition: all $duration-30;
    background-color: $white;
    padding: $lg-white-space;
    border-radius: $xs-border-radius;
    border: 1px solid $coral-black-15;
  }
  .message-box-title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: $std-white-space;
    border-bottom: 1px solid $coral-black-15;
    margin-bottom: $lg-white-space;
  }
  .message-box-title-text-wrapper {
    position: relative;
    span.material-icon {
      position: absolute;
      top: 0;
      right: 0;
      transform: translateY(-55%) translateX(100%);
    }
  }
  h5.message-box-title {
    color: $light-coral-black;
    font-weight: 400;
    font-size: 24px;
  }
  button.close-message-box {
    background-color: transparent;
  }
  .message-box-contents-wrapper {
    display: flex;
    flex-direction: column;
    @include relative-child-margin($std-white-space, -bottom);
  }
  h6.message-title {
    color: $light-coral-black;
    font-weight: 300;
    font-size: 18px;
  }
  p.message-content {
    color: $light-coral-black;
    font-weight: 300;
    font-size: 18px;
  }
  .message-box-control-buttons-wrapper {
    margin-top: $xlg-white-space;
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    @include relative-child-margin($std-white-space, -right);
  }
}
@keyframes scale-in-message-box {
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes fade-in-message-box {
  100% {
    opacity: 1;
  }
}
</style>
