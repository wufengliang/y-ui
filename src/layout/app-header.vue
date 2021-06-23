<template>
  <header>
    <div class="header-left">Y-UI组件库</div>
  </header>
</template>

<script>
export default {
  name: 'app-header',
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  box-sizing: border-box;
  height: 64px;
  box-shadow: 1px 2px 3px #eee;
  .header-left {
    width: 250px;
    line-height: 64px;
    text-align: center;
    font-size: 25px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-style: italic;
    color: #409eff;
  }
}
</style>
