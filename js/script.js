// Fonction de suivi de colis
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const trackingNumber = document.getElementById('trackingNumber').value;
    const resultDiv = document.getElementById('trackingResult');

    // Vérifier si un numéro de suivi a été saisi
    if (!trackingNumber) {
        resultDiv.innerHTML = '<p class="text-danger">Veuillez entrer un numéro de suivi.</p>';
        return;
    }

    // Simulation d'une recherche de colis
    setTimeout(function () {
        resultDiv.innerHTML = `
            <h3>Résultats pour le numéro ${trackingNumber}</h3>
            <p>Votre colis est en transit et devrait arriver d'ici 3 jours.</p>
        `;
    }, 1000); // Simule un délai de réponse de 1 seconde
});
