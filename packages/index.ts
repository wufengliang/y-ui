import { App, Component } from 'vue';
import Button from './components/button';

const COMPONENTS = [
  Button,
];

const install = (app: App): void => {
  COMPONENTS.forEach((COMPONENT: Component) => {
    app.component(COMPONENT.name!, COMPONENT);
  });
};

export default {
  install,
  Button,
};

export {
  Button,
};
