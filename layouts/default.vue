<template>
  <div class="dashboard-wrapper">
    <Sidebar />
    <div class="dashboard-contents">
      <PageNavigator class="page-navigator" />
      <div class="page-title-wrapper">
        <h1 class="page-title">{{ pageTitle }}</h1>
        <!-- TODO fix this shitty solution -->
        <SpButton
          isPrimary="true"
          v-if="showAddOurWorkCondition"
          @click="showAddOurWork = true"
          >Add our work</SpButton
        >
        <SpButton
          isPrimary="true"
          v-if="pageTitle === 'categories'"
          @click="showAddCategory = true"
          >Add category</SpButton
        >
        <SpButton
          isPrimary="true"
          v-if="showAddBlogCondition"
          @click="showAddBlog = true"
          >Add blog</SpButton
        >
      </div>
      <nuxt />
    </div>
    <AddOurWork v-if="showAddOurWork" @close="closeAddOurWorkDialogue" />
    <AddCategory v-if="showAddCategory" @close="showAddCategory = false" />
    <AddBlog v-if="showAddBlog" @close="showAddBlog = false" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    showAddOurWork: false as boolean,
    showAddCategory: false as boolean,
    showAddBlog: false as boolean,
  }),
  components: {
    PageNavigator: () => import("@/admin/components/misc/page-navigator.vue"),
    Sidebar: () => import("@/admin/components/misc/sidebar/index.vue"),
    SpButton: () => import("@/admin/components/modules/buttons/sp-button.vue"),
    AddOurWork: () => import("@/components/modals/add-our-work.vue"),
    AddCategory: () => import("@/components/modals/add-category.vue"),
    AddBlog: () => import("@/components/modals/add-blog.vue"),
  },
  computed: {
    pageTitle(): string {
      const pathFragments = this.$route.fullPath.split("/");
      return pathFragments[pathFragments.length - 1]
        .split("?")[0]
        .replace("-", " ");
    },
    showAddBlogCondition(): any {
      return this.$route.params.categoryName
        ? this.$route.params.categoryName.replace("-", " ").toLowerCase() ===
            this.pageTitle
        : null;
    },
    showAddOurWorkCondition(): any {
      return this.$route.params && this.$route.params.pageName
        ? this.$route.params.pageName.replace("-", " ").toLowerCase() ===
            this.pageTitle
        : null;
    },
  },
  methods: {
    closeAddOurWorkDialogue() {
      this.showAddOurWork = false;
      location.reload();
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/_variables.scss";
.dashboard-wrapper {
  min-height: 100vh;
  background-color: $white;
  display: flex;
  .dashboard-contents {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: $gig-padding $xlg-padding;
  }
  .page-title-wrapper {
    display: flex;
    justify-content: space-between;
    padding-bottom: $gig-white-space;
  }
  h1.page-title {
    text-transform: capitalize;
    font-weight: 500;
    color: $coral-black;
    font-size: $lg-font-size;
  }
  .page-navigator {
    margin-bottom: $xlg-white-space;
  }
}
</style>
