import HeaderWrapper from './header.wrapper.svelte';

export default {
    title: 'Title',
    component: HeaderWrapper
}

export const Default = () => ({
    Component: HeaderWrapper,
    props: { text: '--saurav sahu' }
})