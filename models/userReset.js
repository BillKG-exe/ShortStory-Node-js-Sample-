class UserReset {
    constructor() {
        var email = undefined;
        var token = undefined;
        var expires = undefined;
    }

    //Setters
    setEmail(e) {
        this.email = e;
    }

    setToken(t) {
        this.token = t;
    }

    setExpires(e) {
        this.expires = e;
    }

    set(e, t, ex) {
        this.email = e;
        this.token = t;
        this.expires = ex;
    }

    //Accessors
    getEmail() { return this.email; }
    getToken() { return this.token; }
    getExpires() { return this.expires; }

}

module.exports =  UserReset;