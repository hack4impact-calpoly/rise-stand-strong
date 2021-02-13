const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'},
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('list').innerHTML = output;
    }, 1000)
}

function createPost(post, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('There has been an error.');
            }
        }, 2000);
    });
}

async function init() {
    await createPost({ title: 'Post Three', body: 'This is post three' });
    getPosts();
    fetchUsers();
}

async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
    let output = '';
    data.forEach((user) => {
        output += `<li>${user.name}</li>`;
    })
   // console.log(newdata);
    document.getElementById('users').innerHTML = output;
}

init();