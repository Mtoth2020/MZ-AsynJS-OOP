export { User };

class User {
    #firstName;
    #lastName;
    #email;

    constructor(firstName, lastName, email) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
    }

    get fullname() {
        return this.#firstName + this.#lastName;
    }

    get email() {
        return this.#email;
    }
}

