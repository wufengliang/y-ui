import { defineComponent, ref, computed } from 'vue';
import './input-number.scss';

export default defineComponent({
  name: 'y-input-number',
  props: {
    size: {
      type: String,
      default: 'default',
    },
  },
  setup(props) {
    const isFocused = ref(false);
    const classes = computed(() => ['y-input', `y-input-size-${['default', 'small', 'large'].includes(props.size) ? props.size : 'default'}`]);
    const bodyClasses = computed(() => ['y-input-number-body', { 'y-input-number-body-focused': isFocused.value }]);
    return () => (
      <div
        tabindex={1}
        class={bodyClasses.value}
        onFocusin={() => { isFocused.value = true; }}
        onFocusout={() => { isFocused.value = false; }}
      >
        <div class="y-input-number-content-wrapper"></div>
        <div class="y-input-number-handler-wrapper">
          <input type="text" class={classes.value} />
        </div>
      </div>
    );
  },
});
