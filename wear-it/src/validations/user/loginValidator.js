export default function loginValidator(username, password) {
    // todo CHECK IF THE USER EXISTS IN THE DATABASE
    if (username === '') {
        return "Username is empty";
    } else if (password === '') {
        return "Password is empty";
    } else if (username.length < 6 || 20 <= username.length) {
        return 'Username must be 6 to 20 symbols long';
    } else if (!username.match(/^[a-zA-Z0-9_.-]*$/)) {
        return "Username can include only letters,digits , '_ - and . '";
    } else if (password.length < 6 || 20 <= password.length) {
        console.log(password.length);
        return 'Password must be 6 to 20 symbols long';
    } else{

        return false;
    }
}