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
  padding: 20px;
  overflow-y: auto;
}
</style>
