function loadArticles(topic) {
  const articlesContainer = document.getElementById("articles");
  articlesContainer.innerHTML = "";

  db.collection("articles")
    .where("category", "==", topic)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();

        const articleDiv = document.createElement("div");
        articleDiv.innerHTML = `
          <img src="${data.imageUrl}" width="200">
          <h3>${data.title}</h3>
          <button onclick="openArticle('${doc.id}')">Read More</button>
        `;
        articlesContainer.appendChild(articleDiv);
      });
    });
}

function openArticle(id) {
  window.location.href = `enVision/enVisionMagazine-article.html?id=${id}`;
}