//fetching the post

async function fetchPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")   
    const posts = await response.json();
    displayPosts(posts);
}

//user dropdown
async function fetchUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")   
    const user = await response.json();
    populateUserDropdown(users);
}

//filteration
function filterPostByUser(userId){
    const filteredPost = posts.filter(post => post.userId == userId);
    displayPosts(filteredPost);
}

//pagination
// function paginationpost(post){
//     const =
// }

//sorting functionality


//post interaction

//search functionality