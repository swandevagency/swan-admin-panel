<template>
  <!-- TODO change the table component into something more official and reusable -->
  <div class="sp-table-component">
    <table class="table-content">
      <thead>
        <tr>
          <th>Project name</th>
          <th>Client name</th>
          <th>Client image</th>
        </tr>
      </thead>
      <tbody v-if="dataSource && dataSource.ourWorks">
        <tr
          v-for="(ourWork, index) in dataSource && dataSource.ourWorks
            ? dataSource.ourWorks
            : []"
          :key="index"
          @click.native="$emit('delete', index)"
        >
          <td>{{ ourWork.projectName }}</td>
          <td>{{ ourWork.clientName }}</td>
          <td>
            <div class="client-image-wrapper">
              <img
                :src="ourWork.clientImage.small"
                :alt="ourWork.clientName"
                class="client-image"
              />
            </div>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td>No data</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "sp-table",
  props: {
    dataSource: {
      type: Array,
      required: false,
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/_variables.scss";

.sp-table-component {
  .client-image-wrapper {
    width: 42px;
    height: 42px;
    border-radius: 200px;
    overflow: hidden;
  }

  img.client-image {
    object-fit: cover;
  }
}
</style>
