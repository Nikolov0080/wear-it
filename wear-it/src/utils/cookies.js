const cookies = (token) => {
    document.cookie = "auth=" + token;
}
export default cookies;