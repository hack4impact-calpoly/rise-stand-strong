const posts = [
  { title: 'Post One' },
  { title: 'Post Two' },
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject(new Error('Error: Something went wrong.'));
      }
    }, 2000);
  });
}

async function init() {
  await createPost({ title: 'Post Three' });

  getPosts();
}

init();
