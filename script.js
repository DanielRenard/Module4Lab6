function addJCard() {
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

json.forEach((item) => {
    addJCard(item.title, item.body);
  });