<template>
  <div class="paginator-component">
    <ul class="buttons-list">
      <li
        class="button-item"
        v-for="index in parseInt(pageCount.toString())"
        :key="index"
      >
        <label
          :for="name + index"
          class="paginate-button-label"
          @click="changePage(index)"
        >
          <input
            type="radio"
            :id="name + index"
            :name="name"
            class="paginate-button-radio"
            :checked="page == index"
          />
          <div class="button-contents-wrapper">
            <p class="button-number">{{ index }}</p>
          </div>
        </label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    name: "" as string,
    page: "" as string | null,
  }),
  props: {
    pageCount: {
      type: String,
      default: "0",
    },
  },
  methods: {
    changePage(index: any) {
      this.$emit("change-page");
      this.$router.push({
        path: this.$route.path,
        query: { ...this.$route.query, page: index },
      });
    },
  },
  created() {
    this.name =
      "paginate-button-" +
      (
        Math.floor(Math.random() * (0 - 1000000000)) +
        1000000000 * 2
      ).toString();
    const { page } = this.$route.query;
    this.page = page as string | null;
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/variables";
.paginator-component {
  ul.buttons-list {
    display: flex;
    list-style: none;
    @include relative-child-margin($std-white-space, -right);
  }
  label.paginate-button-label {
    &:hover {
      .button-contents-wrapper {
        &::after {
          opacity: $hover-opacity-dark;
        }
      }
    }
    input.paginate-button-radio {
      width: 0;
      height: 0;
      opacity: 0;
      position: absolute;
      &:checked ~ .button-contents-wrapper {
        outline: 1px solid $golden-orange;
        color: $golden-orange;
      }
    }
  }
  .button-contents-wrapper {
    width: 48px;
    height: 48px;
    outline: 1px solid $light-coral-black-15;
    border-radius: $xs-border-radius;
    background-color: $white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: $coral-black;
    cursor: pointer;
    font-size: $xs-font-size;
    font-weight: 300;
    transition: opacity $duration-30, outline $duration-30, color $duration-30;
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      border-radius: $xs-border-radius;
      background-color: $black;
      transition: opacity $duration-30;
      opacity: 0;
      z-index: 0;
    }
  }
}
</style>
