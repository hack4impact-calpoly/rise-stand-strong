const posts = [
  { title: "Post one", body: "This is post 1" },
  { title: "Post two", body: "This is post 2" },
];

const getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

createPost({ title: "post three", body: "this is post three" }, getPosts);
