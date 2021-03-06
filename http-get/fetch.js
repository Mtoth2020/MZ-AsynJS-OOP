const getPosts = function() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) throw Error(response.statusText);
            else return response.json();
        })
}


export { getPosts };