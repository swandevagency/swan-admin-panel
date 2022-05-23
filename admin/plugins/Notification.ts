import PassiveNotificationItem from "../components/misc/passive-notification-item.vue";
import Vue from "vue";

export enum NotificationIcons {
  none = "none",
  info = "info",
  warning = "warning",
  error = "error",
}

interface INotificationConstructorOptions {
  notificationDuration?: number;
  notificationTitle?: string;
  notificationDescription?: string;
  notificationIcon?: NotificationIcons;
  notificationTarget?: string;
}

export class Notification {
  notificationDuration: number = 1000;
  notificationTitle: string = "";
  notificationDescription: string = "";
  notificationIcon: NotificationIcons = NotificationIcons.none;
  notificationTarget: string = ".notification-area";
  constructor({
    notificationDuration,
    notificationTitle,
    notificationDescription,
    notificationIcon,
    notificationTarget,
  }: INotificationConstructorOptions = {}) {
    this.setDuration(notificationDuration);
    this.setTitle(notificationTitle);
    this.setDescription(notificationDescription);
    this.setIcon(notificationIcon);
    this.setTarget(notificationTarget);
    return this;
  }
  setDuration(duration: number | undefined) {
    if (duration) this.notificationDuration = duration;
    return this;
  }
  setTitle(title: string | undefined) {
    if (title) this.notificationTitle = title;
    return this;
  }
  setDescription(description: string | undefined) {
    if (description) this.notificationDescription = description;
    return this;
  }
  setIcon(icon: NotificationIcons | undefined) {
    if (icon) this.notificationIcon = icon;
    return this;
  }
  setTarget(target: string | undefined) {
    if (target && document.querySelector(target)) {
      this.notificationTarget = target;
    } else {
      const notificationArea = document.createElement("div");
      if (target) notificationArea.classList.add(target);
      notificationArea.classList.add("notification-area");
      if (!document.querySelector(".notification-area"))
        document.body.appendChild(notificationArea);
    }
    return this;
  }
  showNotification(
    _duration: number | null = null,
    _target: string | null = null
  ) {
    if (_duration) this.setDuration(_duration);
    if (_target) this.setTarget(_target);
    const duration = this.notificationDuration;
    const notificationTitle = this.notificationTitle;
    const notificationMessage = this.notificationDescription;
    const notificationType = this.notificationIcon;
    const target = this.notificationTarget;
    const targetElement = document.querySelector(target);
    new Vue({
      render(createElement) {
        return createElement(PassiveNotificationItem, {
          props: {
            notificationTitle,
            notificationMessage,
            notificationType,
            duration,
          },
        });
      },
    }).$mount(targetElement?.appendChild(document.createElement("div")));
  }
}
