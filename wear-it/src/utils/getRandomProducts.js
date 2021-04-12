export default function getRandomProducts(list, count) {

    const result = [];

    const random = () => Math.floor(Math.random() * list.length);

    for (let i = 0; i <= count; i++) {
        const item = list[random()]
        if (result.includes(item)) {
            result.push(list[random()])
        } else {
            result.push(item);
        }
    }

    return result;

}