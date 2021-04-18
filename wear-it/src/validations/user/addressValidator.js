export default function addressValidator(addressLine, city, postalCode) {
    if (addressLine === '') {
        return "addressLine is empty";
    } else if (city === '') {
        return "city is empty";
    } else if (postalCode === '') {
        return "postalCode is empty";
    } else if (addressLine.length < 12 || 50 <= addressLine.length) {
        return 'address line must be 12 to 50 symbols long';
    } else if (city.length < 2 || 46 <= city.length) {
        return 'Username must be 2 to 46 symbols long';
    } else if (postalCode.length < 4 || 8 <= postalCode.length) {
        return 'Username must be 4 to 8 symbols long';
    }
}