<template>
  <div class="button-box">
    <h1 class="title">Button 按钮</h1>
    <h4 class="sub-title">按钮用于开始一个及时操作</h4>
    <h4>代码演示</h4>
    <div>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
      <Button type="primary" disabled>Disabled</Button>
      <pre>
        {{`
<Button type="primary">Primary</Button>
<Button>Default</Button>
<Button type="dashed">Dashed</Button>
<Button type="danger">Danger</Button>
<Button type="link">Link</Button>
<Button type="primary" disabled>Disabled</Button>
          `}}
      </pre>
    </div>
  </div>
</template>

<script>
import { Button } from '@packages';

export default {
  components: {
    Button,
  },
};
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
