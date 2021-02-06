const posts = [
    {title: "Post 1", body: "this is post 1"},
    {title: "Post 2", body: "this is post 2"}
]

//will take 1 second to complete
function showPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach(post => {
            output += post.body; 
            output += " ";
        });
        console.log(output);
    }, 1000);
        
}

//will take 2 seconds to complete
function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const err = false;

            if (err){
                reject("REJECTED")
            }
            else{
                resolve()
            }

        }, 2000);
    });
}


//only async functions can use await
//will essentially halt at the await and won't go until finished
async function init(){
    await createPost({title: "Post 4", body: "this is post 4"});
    showPosts();
}

init();

//resolved with promises
//can chain .then() to do other stuff
createPost({title: "Post 3", body: "this is post 3"})
            .then(showPosts)
            .catch(err => console.log(err));


//Promises.all
const p1 = Promise.resolve("HELLO");
const p2 = 10;
const p3 = new Promise((resolve, reject) => {
    //this is resolving the promise in 2 seconds
    //and using "bye" as a return
    setTimeout(resolve, 2000, "bye");
})

//wont be happy if a promise is rejected
//add a catch 
Promise.all([p1,p2,p3])
    .then(values => {
        console.log(values);
    })
    .catch(err => console.log(err));
