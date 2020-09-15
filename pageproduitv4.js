

var infosElt = document.getElementById("infos");

var formElt = document.querySelector("form");
formElt.addEventListener("submit", function (e) {
    e.preventDefault();
    var nameProduct = formElt.elements.name.value;
    ajaxGet("http://localhost:3000/api/teddies" + nameProduct, function (reponse) {
        // Transformation de la réponse en un objet JSON
        var name = JSON.parse(reponse);
        // Création des informations sur le profil
        var prodnameElt = document.createElement("div");
        prodnameElt.textContent = name.name;
        prodnameElt.style.fontSize = "20px";
        var imageElt = document.createElement("img");
        imageElt.src = name.imageUrl;
        imageElt.style.height = "150px";
        imageElt.style.width = "150px";
        var descriptionElt = document.createElement("div");
        descriptionElt.textContent = name.description;
        var colorElt = document.createElement("div");
        colorElt.textContent = name.color;
        var priceElt = document.createElement("div");
        priceElt.textContent = name.price;
        priceElt.style.fontSize = "10px";
        priceElt.style.fontWeight = "bold"

       
        // Affichage des informations
        infosElt.innerHTML = ""; // Suppression des infos précédentes
        infosElt.appendChild(prodnameElt);
        infosElt.appendChild(imageElt);
        infosElt.appendChild(descriptionElt);
        infosElt.appendChild(colorElt);
        infosElt.appendChild(priceElt);
    });
});




