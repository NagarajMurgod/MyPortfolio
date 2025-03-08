
// export const getImageUrl = (path) => {
//     return new URL("public/assets/"+path, import.meta.url).href;
// };
export const getImageUrl = (path) => {
    return new URL("https://github.com/NagarajMurgod/MyPortfolio/blob/main/Portfolio/public/assets/"+path+"?raw=true");
};