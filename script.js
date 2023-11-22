fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
.then((response) => response.json())
.then((json) => addCard(json));

function addCard(json) {
    json.forEach((item) => {
         const template = document
        .getElementById("card-template")
        .content.cloneNode(true);
      template.querySelector(".card-title").innerText = item.title;
      template.querySelector(".card-text").innerText = item.body;
      document.querySelector("#card-list").appendChild(template);
    }
    );
}