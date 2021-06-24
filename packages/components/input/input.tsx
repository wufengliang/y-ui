import {
  defineComponent, computed, isVNode, ref,
} from 'vue';
import './input.scss';

export default defineComponent({
  name: 'y-input',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placehoder: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'small',
    },
    prefix: {
      type: String,
      default: '',
    },
    suffix: {
      type: [String, Number],
      default: '',
    },
  },
  setup(props, { slots }) {
    const isFocus = ref(false);
    const classes = computed(() => ['y-input-wrapper', `y-input-size-${['default', 'large', 'small'].includes(props.size) ? props.size : 'default'}`,
      { 'y-input-warpper-focused': isFocus.value },
    ]);
    const renderPrefix = () => {
      if (['string', 'number'].includes(typeof props.prefix) && props.prefix.toString().length) {
        return (
          <span class="y-input-prefix">{props.prefix}</span>
        );
      }
      if (slots.prefix) {
        return slots.prefix();
      }
      return null;
    };

    const rendersuffix = () => {
      if (['string', 'number'].includes(typeof props.suffix) && props.suffix.toString().length) {
        return (
          <span class="y-input-suffix">{props.suffix}</span>
        );
      }
      if (slots.suffix) {
        return slots.suffix();
      }
      return null;
    };

    return () => (
      <span class={classes.value}
        onClick={() => { isFocus.value = !isFocus.value; }}
        onBlur={() => { isFocus.value = false; }}
      >
        {renderPrefix()}
        {typeof props.prefix === 'object' && isVNode(props.prefix) && slots.prefix!()}
        <input
          class='y-input'
          type={props.type}
          placeholder={props.placehoder}
        />
        {rendersuffix()}
      </span>
    );
  },
});
