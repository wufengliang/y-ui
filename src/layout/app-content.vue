<template>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'app-content',
};
</script>

<style scoped>
main {
  flex: 1;
  overflow-y: auto;
}
</style>
