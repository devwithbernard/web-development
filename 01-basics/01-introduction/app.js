const btn = document.getElementById("click-me");

async function getPosts(url) {
  const response = await fetch(url);
  let posts;
  if (response.status == 200) {
    posts = await response.json();
  } else {
    return "Fetch Failed";
  }
  return posts;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min));
}

btn.addEventListener("click", function () {
  setTimeout(async function () {
    const posts = await getPosts("https://jsonplaceholder.typicode.com/posts");
    if (posts) {
      let texts = posts.map((post) => {
        return { title: post.title, text: post.body };
      });
      const { title, text } = texts[getRandomNumber(0, texts.length)];
      document.getElementById("title").innerHTML = title;
      document.getElementById("demo").innerHTML = text;
    }
  }, 50);
});
