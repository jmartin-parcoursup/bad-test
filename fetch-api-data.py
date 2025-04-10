import requests
import json

# 1. Appel à l'API (exemple avec une API fictive de La Poste)
api_url = "https://api.laposte.fr/codes-postaux/v1/communes/75001"  # Remplacez par l'API réelle
headers = {
    "Accept": "application/json",
    "Authorization": "Bearer VOTRE_CLE_API"  # Si nécessaire
}

try:
    response = requests.get(api_url, headers=headers)
    response.raise_for_status()  # Vérifie les erreurs HTTP
    data = response.json()

    # 2. Sauvegarde dans un fichier JSON
    with open("data/api-data.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    print("✅ Données sauvegardées dans data/api-data.json")

except Exception as e:
    print(f"❌ Erreur: {e}")
