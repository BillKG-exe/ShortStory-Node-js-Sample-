class User {
    constructor() {
        var username = undefined;
        var email = undefined;
        this.profilPicPath = '/';
        var following = undefined;
        var followers = undefined;
        var bio = undefined;
        this.instagram = "";
        this.facebook = "";
        this.snap = "";
        this.twitter = "";
        this.name = "";
    }

    //Setters
    setUsername(u) {
        this.username = u;
    }

    setEmail(e) {
        this.email = e;
    }

    setName(n) {
        this.name = n;
    }

    setProfilPicPath(p) {
        this.profilPicPath = this.profilPicPath + p;
    }

    set(u, e, p, b) {
        this.username = u;
        this.email = e;
        this.profilPicPath = this.profilPicPath + p;
        this.bio = b;
    }
    
    setSCMedia(ig, fb, sp, tw) {
        this.instagram = ig;
        this.facebook = fb; 
        this.snap = sp;
        this.twitter = tw;
    }

    setFollow(followers, following) {
        this.followers = followers;
        this.following = following;
    }

    //Accessors
    
    getUsername() { return this.username; }
    getName() { return this.name; }
    getEmail() { return this.email; }
    getProfilPicPath() { return this.profilPicPath; }
    getBio() { return this.bio; }
    getFollowers() { return this.followers; }
    getFollowing() { return this.following; }


    getIg() {
        return this.instagram;
    }

    getFb() {
        return this.facebook;
    }

    getSp() {
        return this.snap;
    }

    getTw() {
        return this.twitter;
    }
    
}

module.exports = User;