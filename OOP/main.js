import { Blog } from "./blog.js";
import { User } from "./user.js";
import { Post } from "./post.js";


/*
Tesztelés:
1.	Hozz létre egy példányt a Blog-ból és adj neki címet és egy felhasználót
(User) példányosításkor!
2.	Teszteld a Blog összes metódusát! Minden esetben az eredményt a console-ra írasd ki!
    a.	adj hozzá két új elemet!
    b.	töröld az 1-es id-val rendelkező elemet!
    c.	kérd le a 54-es id val rendelkező post elemet
*/

let newUser = new User("Sylvester", "Stallone", "rambo@gmail.com");
let newBlog = new Blog("Rocky Balboa", newUser);
const post1 = new Post("Első boxmeccsem", "Boom", 12345);
const post2 = new Post("Második boxmeccsem", "Paff:-)", 12346);

setTimeout(function () {
    console.log(newBlog.posts);
    newBlog.addPost(post1);
    newBlog.addPost(post2);
    newBlog.deletePost(1);
    const post_54 = newBlog.getPostById(54);
    console.log(newBlog);
    console.log(post_54);
}, 3000);

