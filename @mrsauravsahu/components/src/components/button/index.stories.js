import { action } from '@storybook/addon-actions';

import ButtonWrapper from './index.wrapper.svelte';

export default {
  title: 'Button',
  component: ButtonWrapper,
};

export const Text = () => ({
  Component: ButtonWrapper,
  props: { data: 'Hello Button' },
  on: { click: action('clicked') },
});

export const Emoji = () => ({
  Component: ButtonWrapper,
  props: {
    data: '😀 😎 👍 💯',
  },
  on: { click: action('clicked') },
});
