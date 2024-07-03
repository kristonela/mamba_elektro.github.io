function importAll(r) {
    let images = {};
    r.keys().forEach((key) => {
        images[key] = r(key).default;
    });
    return images;
}

const elektroImages = importAll(require.context('../../assets/img/elektro', false, /\.(jpg)$/));
const plosinaImages = importAll(require.context('../../assets/img/plosina', false, /\.(jpg)$/));

const dataportfolio = [
    ...Object.keys(elektroImages).map((key, index) => ({
        img: elektroImages[key],
        category: "Elektroinštalačné práce",
    })),
    ...Object.keys(plosinaImages).map((key, index) => ({
        img: plosinaImages[key],
        category: "Montážna plošina",
    })),
];

export default dataportfolio;