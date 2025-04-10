// 1. Appel direct à l'API (si CORS autorisé)
async function fetchData() {
    const API_URL = "https://api.laposte.fr/codes-postaux/v1/communes/75001"; // Exemple
    try {
        const response = await fetch(API_URL, {
            headers: {
                "Accept": "application/json",
                // "Authorization": "Bearer VOTRE_CLE_API" // Si nécessaire
            }
        });
        
        if (!response.ok) throw new Error(`Erreur HTTP: ${response.status}`);
        
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error("Échec de la requête API:", error);
        document.getElementById("data-container").innerHTML = `
            <div class="error">
                API indisponible. Mode démo activé.
                <button onclick="loadDemoData()">Charger des données de test</button>
            </div>
        `;
    }
}

// 2. Affichage des données
function displayData(data) {
    const container = document.getElementById("data-container");
    container.innerHTML = JSON.stringify(data, null, 2); // Affiche les données brutes (à adapter)
}

// 3. Fallback : données de démo si l'API échoue
function loadDemoData() {
    const demoData = [{
        "codePostal": "75001",
        "nomCommune": "Paris",
        "codeDepartement": "75"
    }];
    displayData(demoData);
}

// Lancement au chargement de la page
fetchData();
