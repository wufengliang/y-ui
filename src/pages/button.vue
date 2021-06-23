<template>
  <div class="button-box">
    <h1 class="title">y-button 按钮</h1>
    <h4 class="sub-title">按钮用于开始一个及时操作</h4>
    <h4>代码演示</h4>
    <div>
      <y-button type="primary">Primary</y-button>
      <y-button>Default</y-button>
      <y-button type="dashed">Dashed</y-button>
      <y-button type="danger">Danger</y-button>
      <y-button type="link">Link</y-button>
      <y-button type="primary" disabled>Disabled</y-button>
      <pre>
        {{`
<y-button type="primary">Primary</y-button>
<y-button>Default</y-button>
<y-button type="dashed">Dashed</y-button>
<y-button type="danger">Danger</y-button>
<y-button type="link">Link</y-button>
<y-button type="primary" disabled>Disabled</y-button>
          `}}
      </pre>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button-box {
  padding-left: 20px;
  .title {
    margin: 20px 0;
  }
  h4 {
    margin: 20px 0;
  }
  button {
    margin: 5px;
  }
}
</style>
