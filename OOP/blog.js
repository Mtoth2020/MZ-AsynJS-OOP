export { Blog };

class Blog {
    #title;
    #author;
    #posts = [];

    constructor(title, author) {
        this.#title = title;
        this.#author = author;
        this.#fetchPosts();
    }

    get posts() {
        return this.#posts;
    }

    #fetchPosts() {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
                else return response.json();
            })
            .then(data => {
                this.#posts = data;
            });
    }

    addPost(post) {
        this.#posts.push(post);
    }

    deletePost(postId) {
        let foundIndex = null;
        for (let i = 0; i < this.#posts.length; i++) {
            if(postId === this.#posts[i].id) {
                foundIndex = i;
            }
        }
        if(foundIndex > -1) {
            this.#posts.splice(foundIndex, 1);
            return true;
        } else {
            return false;
        }
    }

    getPostById(postId) {
        let foundPost = null;
        for (let i = 0; i < this.#posts.length; i++) {
            if(postId === this.#posts[i].id) {
                foundPost = this.#posts[i];
            }
        }
        return foundPost;
    }

}

