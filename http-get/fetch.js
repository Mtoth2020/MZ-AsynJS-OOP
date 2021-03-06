const getUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log("users", data);
    } catch (e) {
        console.log("getting users was not successful", e);
    }
}

getUsers();



