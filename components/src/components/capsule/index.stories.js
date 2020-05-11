import Capsule from './index.svelte';

export default {
    title: 'Capsule',
    component: Capsule
}

export const Default = () => ({
    Component: Capsule,
    props: {
        text: 'react'
    }
})