import IgImage from '.';

export default {
    title: 'IgImage',
    Component: IgImage,
}

export const Default = () => ({
    Component: IgImage,
    props: {
        src: '/me.jpg',
        alt: 'saurav sahu',
        message: 'made you click 😂',
    },
})