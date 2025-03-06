
export const getImageUrl = (path) => {
    return new URL("MyPortfolio/assets/"+path, import.meta.url).href;
};