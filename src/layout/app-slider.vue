<template>
  <aside>
    <ul class="menu-box">
      <li
        v-for="(item, index) in handleRoutes"
        :key="index"
        :class="{ active: item.path === route.path }"
        @click="jumpTo(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { routes } from '@/router';

export default {
  name: 'app-slider',
  setup() {
    const handleRoutes = computed(() => routes.filter((item) => item.path !== '/'));
    const route = useRoute();
    const router = useRouter();
    const jumpTo = (item: { path: string }) => {
      if (route.path !== item.path) {
        router.push(item.path);
      }
    };
    return {
      handleRoutes,
      route,
      jumpTo,
    };
  },
};
</script>

<style lang="scss" scoped>
aside {
  box-sizing: border-box;
  width: 250px;
  border-right: 1px solid #eee;
  overflow-y: auto;
  .menu-box {
    li {
      padding: 15px 10px 15px 40px;
      list-style: none;
      font-size: 12px;
      opacity: 0.67;
      border-right: 2px solid transparent;
      cursor: pointer;
      &.active {
        background-color: #e6f7ff;
        border-color: #1890ff;
        color: #1890ff;
      }
    }
  }
}
</style>
