<template>
  <div class="checkbox-box">
    <y-checkbox v-model:checked="checked" :indeterminate="checked">Checkbox</y-checkbox>
    <y-checkbox disabled>禁用</y-checkbox>
    <y-checkbox-group :options="options" v-model:value="value"></y-checkbox-group>
    <h5 class="margin-top-20">
      当前选择的:
      <span v-for="item in value" :key="item">{{ item }} &nbsp;&nbsp;</span>
    </h5>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const options = ref([
      { label: '标签1', value: 'tab1' },
      { label: '标签2', value: 'tab2' },
    ]);
    const value = ref<string[]>([]);
    const checked = ref(false);
    return {
      checked,
      options,
      value,
    };
  },
};
</script>

<style lang="scss" scoped>
.margin-top-20 {
  margin-top: 20px;
}
.checkbox-box {
}
</style>
