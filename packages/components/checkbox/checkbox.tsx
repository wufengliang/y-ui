import { defineComponent, computed, watch } from 'vue';
import './checkbox.scss';

export default defineComponent({
  name: 'y-checkbox',
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:checked', 'change'],
  setup(props, ctx) {
    const checkboxClass = computed(() => [
      'y-checkbox',
      {
        'y-checkbox-checked': props.checked,
        'y-checkbox-indeterminate': props.indeterminate,
        'y-checkbox-disabled': props.disabled,
      },
    ]);

    watch(() => props.checked, () => {
      ctx.emit('change', props.checked);
    });

    return () => (
      <label class="y-checkbox-wrapper" onClick={(e: Event) => {
        e.preventDefault();
        if (!props.disabled) {
          ctx.emit('update:checked', !props.checked);
        }
      }}>
        <span class={checkboxClass.value}>
          <input type="checkbox" class="y-checkbox-input" />
          <span class="y-checkbox-inner"></span>
        </span>
        <span>{ctx.slots.default && ctx.slots.default()}</span>
      </label>
    );
  },
});
