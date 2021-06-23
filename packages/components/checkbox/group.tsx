import {
  defineComponent, ref, watch, onMounted,
} from 'vue';
import checkbox from './checkbox';

interface checkboxProps {
  label: string;
  value: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: () => void;
}

export default defineComponent({
  name: 'y-checkbox-group',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    checkbox,
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const groups = ref<Array<checkboxProps>>([]);
    /**
     * @desc 处理数据源
     */
    const handleData = () => {
      groups.value = props.options.map((option) => {
        if (['number', 'string'].includes(typeof option)) {
          return {
            label: option,
            value: option,
            checked: props.value.includes(option),
            indeterminate: false,
            disabled: props.disabled || false,
          } as checkboxProps;
        }
        return {
          ...(option as checkboxProps),
          disabled: props.disabled || (option as checkboxProps).disabled,
          checked: props.value.includes((option as checkboxProps).value),
          indeterminate: false,
        };
      });
    };

    onMounted(() => {
      handleData();
    });

    watch(() => props.value, () => {
      handleData();
    });

    watch(() => props.options, () => {
      handleData();
      console.log(groups.value.filter((item) => item.checked).map((item) => item.value));
    });

    return () => (
      <div class="y-checkbox-group">
        {groups.value.map((item: checkboxProps) => (
          <checkbox
            disabled={item.disabled}
            v-model={[item.checked, 'checked']}
            onChange={() => {
              emit('update:value', groups.value
                .filter((_item) => _item.checked)
                .map((_item) => _item.value));
            }}
          >
            {item.label}
          </checkbox>
        ))}
      </div>
    );
  },
});
