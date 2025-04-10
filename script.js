// 1. Sélection du conteneur HTML où les données seront affichées
const dataContainer = document.getElementById("data-container");

// 2. Fonction pour formater les données (exemple adaptable)
function formatData(item) {
    return `
        <div class="card">
            <h2>${item.nomCommune || item.ville || "Nom inconnu"}</h2>
            <p>Code postal: <strong>${item.codePostal || item.code_postal || "N/A"}</strong></p>
            ${item.codeDepartement ? `<p>Département: ${item.codeDepartement}</p>` : ""}
        </div>
    `;
}

// 3. Chargement du fichier JSON
fetch('data/api-data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur de chargement du fichier JSON");
        }
        return response.json();
    })
    .then(data => {
        // 4. Vérification de la structure des données
        if (Array.isArray(data)) {
            // Cas 1 : Les données sont un tableau (ex: [{"ville": "...", "code_postal": "..."}])
            data.forEach(item => {
                dataContainer.innerHTML += formatData(item);
            });
        } else if (data.commune) {
            // Cas 2 : Les données sont un objet (ex: {"commune": "Paris", "codePostal": "75001"})
            dataContainer.innerHTML = formatData(data);
        } else {
            throw new Error("Format de données non reconnu");
        }
    })
    .catch(error => {
        // 5. Gestion des erreurs
        console.error("Erreur:", error);
        dataContainer.innerHTML = `
            <div class="error">
                <p>⚠️ Impossible d'afficher les données. Vérifiez :</p>
                <ul>
                    <li>Que le fichier <code>data/api-data.json</code> existe</li>
                    <li>Que les données sont au format JSON valide</li>
                </ul>
                <p>Détails : <em>${error.message}</em></p>
            </div>
        `;
    });

// 6. Optionnel : Filtrage dynamique
document.getElementById("search-input")?.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        const cityName = card.querySelector("h2").textContent.toLowerCase();
        card.style.display = cityName.includes(searchTerm) ? "block" : "none";
    });
});
