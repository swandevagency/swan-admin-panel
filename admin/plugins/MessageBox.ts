import MessageBoxComponent from "../components/modals/message-box.vue";
import Vue from "vue";

// #region Enumerations
export enum MessageBoxButtons {
  none = "",
  ok = "ok",
  yes_no = "yes/no",
  yes_no_cancel = "yes/no/cancel",
}

export enum MessageBoxDefaultButton {
  ok = "ok",
  yes = "yes",
  no = "no",
  cancel = "cancel",
}

export enum MessageBoxIcons {
  none = "",
  info = "info",
  warning = "warning",
  error = "error",
}

interface IMessageBoxEvents {
  onOk?: void;
  onYes?: void;
  onNo?: void;
  onCancel?: void;
}

interface IMessageBoxConstructorOptions extends IMessageBoxEvents {
  messageBoxTitle?: string;
  messageBoxContent?: string;
  messageBoxButtons?: MessageBoxButtons;
  messageBoxIcon?: MessageBoxIcons;
  messageBoxDefaultButton?: MessageBoxDefaultButton;
  preventDefault?: boolean;
  messageBoxTarget?: string;
}
// #endregion

export class MessageBox {
  messageBoxTitle: string = "";
  messageBoxContent: string = "";
  messageBoxButtons: MessageBoxButtons = MessageBoxButtons.none;
  messageBoxIcon: MessageBoxIcons = MessageBoxIcons.none;
  messageBoxDefaultButton: MessageBoxDefaultButton = MessageBoxDefaultButton.ok;
  preventDefault: boolean = true;
  messageBoxTarget: string = ".message-box-area";
  events!: IMessageBoxEvents;
  constructor({
    messageBoxTitle,
    messageBoxContent,
    messageBoxButtons,
    messageBoxIcon,
    messageBoxDefaultButton,
    preventDefault,
    messageBoxTarget,
    onOk,
    onYes,
    onNo,
    onCancel,
  }: IMessageBoxConstructorOptions = {}) {
    this.setMessageBoxTitle(messageBoxTitle);
    this.setMessageBoxContent(messageBoxContent);
    this.setMessageBoxButtons(messageBoxButtons);
    this.setMessageBoxIcon(messageBoxIcon);
    this.setMessageBoxDefaultButton(messageBoxDefaultButton);
    this.setPreventDefault(preventDefault);
    this.setMessageBoxTarget(messageBoxTarget);
    this.onOk(onOk);
    this.onYes(onYes);
    this.onNo(onNo);
    this.onCancel(onCancel);
    return this;
  }
  // #region Setters
  setMessageBoxTitle(title: string | undefined) {
    if (title) this.messageBoxTitle = title;
    return this;
  }
  setMessageBoxContent(content: string | undefined) {
    if (content) this.messageBoxContent = content;
    return this;
  }
  setMessageBoxButtons(buttons: MessageBoxButtons | undefined) {
    if (buttons) this.messageBoxButtons = buttons;
    return this;
  }
  setMessageBoxIcon(icon: MessageBoxIcons | undefined) {
    if (icon) this.messageBoxIcon = icon;
    return this;
  }
  setMessageBoxDefaultButton(
    defaultButton: MessageBoxDefaultButton | undefined
  ) {
    if (defaultButton) this.messageBoxDefaultButton = defaultButton;
    return this;
  }
  setPreventDefault(preventDefault: boolean | undefined) {
    if (preventDefault) this.preventDefault = preventDefault;
    return this;
  }
  setMessageBoxTarget(target: string | undefined) {
    if (target && document.querySelector(target)) {
      this.messageBoxTarget = target;
    } else {
      const messageBoxArea = document.createElement("div");
      if (target) messageBoxArea.classList.add(target);
      messageBoxArea.classList.add("message-box-area");
      if (!document.querySelector("message-box-area"))
        document.body.appendChild(messageBoxArea);
    }
    return this;
  }
  onOk(event: void | undefined) {
    if (typeof event === "function") this.events.onOk = event;
    return this;
  }
  onYes(event: void | undefined) {
    if (typeof event === "function") this.events.onYes = event;
    return this;
  }
  onNo(event: void | undefined) {
    if (typeof event === "function") this.events.onNo = event;
    return this;
  }
  onCancel(event: void | undefined) {
    if (typeof event === "function") this.events.onCancel = event;
    return this;
  }
  // #endregion
  showMessageBox(_target: string | null = null) {
    if (_target) this.setMessageBoxTarget(_target);
    const {
      messageBoxTitle,
      messageBoxContent,
      messageBoxButtons,
      messageBoxIcon,
      messageBoxDefaultButton,
      preventDefault,
      events,
    } = this;
    const { onOk, onYes, onNo, onCancel } = events;

    const target = this.messageBoxTarget;
    const targetElement = document.querySelector(target);

    new Vue({
      render(createElement) {
        return createElement(MessageBoxComponent, {
          props: {
            messageBoxTitle,
            messageBoxContent,
            messageBoxButtons,
            messageBoxIcon,
            messageBoxDefaultButton,
            preventDefault,
          },
          on: {
            ok: () => onOk,
            yes: () => onYes,
            no: () => onNo,
            cancel: () => onCancel,
          },
        });
      },
    }).$mount(targetElement?.appendChild(document.createElement("div")));
  }
}
