class Post {
    constructor() {
        var postId = undefined;
        var userId = undefined;
        var userPicture = undefined;
        var postDate = undefined;
        var postContent = undefined;
        var likes = undefined;
        var comments = undefined;
    }

    setPost(pId, uId, uPic, pd, pc, l, c) {
        this.postId = pId;
        this.userId = uId;
        this.userPicture = uPic;
        this.postDate = pd;
        this.postContent = pc;
        this.likes = l;
        this.comments = c;  //array of comment objects
    }

    getPostId() { return this.getPostId }
    getUserId() { return this.userId }
    getUserPicture() { return this.userPicture }
    getPostDate() { return this.postDate }
    getPostContent() { return this.postContent }
    getLikes() { return this.likes }
    getComments() { return this.comments }
}