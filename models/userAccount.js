const accounts = [];

module.exports = class Account {
    constructor(user,pass) {
        this.username = user;
        this.password = pass;
    }

    save() {
        accounts.push(this);
    }

    static fetchAll() {
        return accounts;
    }
}