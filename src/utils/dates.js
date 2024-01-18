
// Date must be in milliseconds
const getDate = (date, format) => {
    switch (format) {
        case "YYYY-MM-DD":
            return dayjs(date).format("YYYY-MM-DD");
        case "ddd, DD MMM":
            return dayjs(date).format("ddd, DD MMM");
        case "ddd, D MMM":
            return dayjs(date).format("ddd, D MMM");
        default:
            return dayjs(date).format("YYYY-MM-DD");
    }
};


export{
    getDate,
}