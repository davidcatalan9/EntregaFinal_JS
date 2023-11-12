class User {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
        this.isLogged = false;
        this.session = [];
    }

    toString = () => {
        console.log(this.userName);
        return this.userName;
    }

    isPassword = (password = '') => {
        return this.password === password;
    }
}