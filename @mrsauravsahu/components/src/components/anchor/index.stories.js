import AnchorWrapper from './index.wrapper.svelte';

export default {
    title: 'Anchor',
    component: AnchorWrapper
}

export const Default = () => ({
    Component: AnchorWrapper,
    props: {
        data: 'web-components',
        href: 'https://webcomponents.org/'
    }
})