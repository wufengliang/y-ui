import { defineComponent } from 'vue';
import './button.scss';

export default defineComponent({
  name: 'y-button',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    return () => (
      <button disabled={props.disabled} class={['y-btn', `y-btn-${props.type}`]}>{ctx.slots.default!()}</button>
    );
  },
});
