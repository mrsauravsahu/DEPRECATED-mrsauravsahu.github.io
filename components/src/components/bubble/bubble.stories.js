import Bubble from './bubble.svelte';

export default {
    title: 'Bubble',
    component: Bubble
}

export const Default = () => ({
    Component: Bubble,
    props: {
        text: 'react'
    }
})