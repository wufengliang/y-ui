<template>
  <div style="height:100vh;">
    <AppHeader />
    <div class="flex-box">
      <AppSlider />
      <AppContent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/layout/app-header.vue';
import AppSlider from '@/layout/app-slider.vue';
import AppContent from '@/layout/app-content.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    AppSlider,
    AppContent,
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.flex-box {
  display: flex;
  height: calc(100% - 64px);
}
</style>
