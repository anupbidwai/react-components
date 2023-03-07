const staticImageLoader = ({ src, width, quality }) => {
    // when env variable is set
    //return `${process.env.NEXT_PUBLIC_APP_BASE_URL}/${src}?w=${width}&q=${quality || 75}`

    // temp purpouse
    return `${src}?w=${width}&q=${quality || 75}`
};

const dynamicImageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
};

export {
    staticImageLoader,
    dynamicImageLoader
}