<template>
  <header>
    <div class="header-left"><span>Y-UI</span>组件库</div>
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
    font-style: initial;
  }
}
</style>
