const createImage = (src, alt) => new Promise((resolve, reject) => {

    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
    image.alt = alt;
})

export const getImage = async (src, alt, target) => {

    try {

        const image = await createImage(src, alt);

        target.prepend(image);

    } catch(e) {
        
        console.error(e);
    }
}