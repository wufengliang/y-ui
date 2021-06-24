import { App, Component } from 'vue';
import { YButton } from './components/button';
import { YCheckbox, YCheckboxGroup } from './components/checkbox/index';
import { YInput } from './components/input';
import { YInputNumber } from './components/input-number';

const COMPONENTS = [
  YButton,
  YCheckbox,
  YCheckboxGroup,
  YInput,
  YInputNumber,
];

const install = (app: App): void => {
  COMPONENTS.forEach((COMPONENT: Component) => {
    app.component(COMPONENT.name!, COMPONENT);
  });
};

export default {
  install,
  YButton,
  YCheckbox,
  YCheckboxGroup,
  YInput,
  YInputNumber,
};
