import HeaderWrapper from './index.wrapper.svelte';

export default {
    title: 'Title',
    component: HeaderWrapper
}

export const Default = () => ({
    Component: HeaderWrapper,
    props: { text: '--saurav sahu' }
})