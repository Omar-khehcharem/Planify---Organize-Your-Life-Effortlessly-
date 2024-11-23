const inp = document.getElementsByTagName("input")[0]; // Sélectionne le premier champ input
const ajouter = document.getElementById("add");
const container = document.getElementById("container");

// Ajouter un gestionnaire d'événement pour le bouton "Ajouter"
ajouter.addEventListener("click", function () {
    // Vérifier si l'entrée est vide
    if (inp.value.trim() === "") {
        alert("Veuillez entrer un texte avant d'ajouter.");
        return;
    }

    // Afficher le conteneur si un nouvel élément est ajouté
    container.style.display = "flex";

    // Création d'un conteneur pour l'élément
    let element = document.createElement("div");
    element.className = "element";

    // Création de l'élément pour afficher le texte
    let item = document.createElement("h1");
    item.className = "item";
    let textNode = document.createTextNode(inp.value.trim());
    item.appendChild(textNode);

    // Création d'un bouton pour supprimer
    let itemdel = document.createElement("span");
    itemdel.className = "itemdel";
    itemdel.innerText = "X";
    itemdel.addEventListener("click", function () {
        container.removeChild(element);

        // Cacher le conteneur si aucun élément n'est présent
        if (container.children.length === 0) {
            container.style.display = "none";
        }
    });

    // Ajouter les éléments au conteneur principal
    element.appendChild(item);
    element.appendChild(itemdel);
    container.appendChild(element);

    // Réinitialiser le champ input
    inp.value = "";
});
