document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const container = document.getElementById("project-container");

  const projet = projets.find(p => p.id === id);

  if (!projet) {
    container.innerHTML = `<h2 style="color:red;">Projet introuvable</h2>`;
    return;
  }

  container.innerHTML = `
    <nav class="breadcrumb">
      <a href="index.html">Accueil</a> &gt; <span>${projet.id}</span>
    </nav>
    <img src="${projet.image}" alt="${projet.titre}" />
    <h1>${projet.titre}</h1>
<div class="tags">${projet.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    ${projet.description.map(p => `<p>${p}</p>`).join("")}
    <a href="index.html#portfolio" class="back-button">
  <i class="fa fa-arrow-left"></i> Retour au Portfolio
</a>
`;
});
