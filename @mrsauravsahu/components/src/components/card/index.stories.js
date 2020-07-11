import CardWrapper from './index.wrapper.svelte'

export default {
    title: 'Card',
    component: CardWrapper
}

export const Default = () => ({
    Component: CardWrapper,
    props: {
        title: 'git-remote-to-url',
        content: 'convert git remote to a url to open in the browser'
    }
})