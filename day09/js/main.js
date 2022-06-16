console.log(document.forms);

// selecting forms
const forms = document.forms; // forms is a collection of all the forms in the document
console.log(forms);
forms[0][0].value = "Vinson";
forms.user.email.value = "v@gmail.com";
forms.user.email.addEventListener("input", function (e) {
  console.log(forms.user.email.value);
});
// selecting forms

forms.car.make.value = "Chevrolet";

forms.user.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(forms.user.username.value);
  console.log(forms.user.email.value);

  post("https://jsonplaceholder.typicode.com/users/1", {
    name: forms.user.username.value,
    username: forms.user.username.value,
    email: forms.user.email.value,
  }).then((data) => {
    console.log(data);
  });
});

forms.pokemon.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(forms.pokemon.name.value);
  console.log(forms.pokemon.sprite.value);
  fetch("http://pokeapi.co/api/v2/pokemon/" + forms.pokemon.name.value)
    .then(function (res) {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let img = document.querySelector("img");
      if (!img) {
        img = document.createElement("img");
      }

      img.src = data.sprites[forms.pokemon.sprite.value];
      img.width = 400;
      document.body.append(img);
    });
});

function post(url, data) {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
