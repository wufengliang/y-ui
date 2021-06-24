<template>
  <div class="input-box">
    <y-input placehoder="111222">
      <template #prefix>
        <span>prefix</span>
      </template>
      <template #suffix>
        <span>suffix</span>
      </template>
    </y-input>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    return {};
  },
};
</script>

<style></style>
