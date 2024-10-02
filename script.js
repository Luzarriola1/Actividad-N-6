const container = document.getElementById("posts");
const boton = document.getElementById("boton");

// URL de la API de posts
let url = "https://jsonplaceholder.typicode.com/posts";

boton.addEventListener("click", () => {
  // Fetch para obtener los datos de la API
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      pintarPosts(data); // Llamada a la función para pintar los posts
    });
});

function pintarPosts(data) {
  container.innerHTML = ''; // Limpiar el contenido anterior si existe

  // Usamos for...of para iterar sobre los posts
  for (let post of data) {
    const postHTML = `
      <div class="post">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      </div>
    `;
    container.innerHTML += postHTML; // Añadir cada post al contenedor
  }
}