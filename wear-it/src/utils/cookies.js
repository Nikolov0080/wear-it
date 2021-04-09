const cookieFunctions = {
    createCookie: (token) => {
        document.cookie = "auth=" + token;

    },
    deleteCookie: (key) => {
        // todo
    }
};

export default cookieFunctions;