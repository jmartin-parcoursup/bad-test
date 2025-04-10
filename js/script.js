// 1. Chargement du fichier JSON statique
fetch('data/api-data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur de chargement des données");
        }
        return response.json();
    })
    .then(data => {
        const container = document.getElementById("data-container");
        
        // 2. Affichage des données (exemple adaptatif)
        if (data.commune) {  # Si l'API retourne une structure {commune: ..., codePostal: ...}
            container.innerHTML = `
                <div class="card">
                    <h2>${data.commune}</h2>
                    <p>Code postal: <strong>${data.codePostal}</strong></p>
                </div>
            `;
        } else {  # Si l'API retourne un tableau
            data.forEach(item => {
                container.innerHTML += `
                    <div class="card">
                        <h2>${item.nomCommune}</h2>
                        <p>Code postal: <strong>${item.codePostal}</strong></p>
                    </div>
                `;
            });
        }
    })
    .catch(error => {
        console.error("Erreur:", error);
        document.getElementById("data-container").innerHTML = `
            <p class="error">⚠️ Impossible de charger les données. Vérifiez le fichier JSON.</p>
        `;
    });
