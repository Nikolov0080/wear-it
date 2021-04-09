const cookieFunctions = {
    createCookie: (token) => {
        document.cookie = "auth=" + token;

    },
    deleteCookie: (key) => {

    }
};

export default cookieFunctions;