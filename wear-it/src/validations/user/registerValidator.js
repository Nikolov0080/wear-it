export default function registerValidator(username, email, password, rePassword) {
    // todo CHECK IF THE USER EXISTS IN THE DATABASE
    // Email too
    if (username === '') { return "Username is empty"; }
    
    if (username.length < 6 || 20 <= username.length) {
        return 'Username must be 6 to 20 symbols long';
    }
    
    if (!username.match(/^[a-zA-Z0-9_.-]*$/)) {
        return "Username can include only letters,digits , '_ - and . '";
    }
    
    if (email.length > 40) {
        return "Email is over 40 symbols...";
    }
    
    if (email === '') { return "Email is empty"; }
    
    if (password !== rePassword) {
        return "Passwords must match"
    }
    
    if (password === '') { return "Password is empty"; }
    
    if (rePassword === '') { return "Repeat Password is empty"; }
    
    if (password.length < 6 || 20 <= password.length) {
        return 'Password must be 6 to 20 symbols long';
    }
    
    return false;
}