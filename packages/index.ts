import { App, Component } from 'vue';
import { YButton } from './components/button';
import { YCheckbox, YCheckboxGroup } from './components/checkbox/index';
import { YInput } from './components/input';

const COMPONENTS = [
  YButton,
  YCheckbox,
  YCheckboxGroup,
  YInput,
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
};

export {
  YButton,
  YCheckbox,
};
