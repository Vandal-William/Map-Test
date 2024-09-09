import Mustache from 'mustache';
import positions from './JS/positions.js';

let map;
let infoWindow;
let service;

// Fonction pour charger le template Mustache depuis le fichier dans le dossier templates
async function loadTemplate() {
  const response = await fetch('./templates/addressInfo.mustache'); // Corriger le chemin vers le template
  return response.text();  // Charger le contenu du fichier Mustache en texte
}

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { PlacesService } = await google.maps.importLibrary("places");

  // Centrer la carte sur Paris
  const centerPosition = { lat: 48.8566, lng: 2.3522 };
  map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: centerPosition,
    mapId: "DEMO_MAP_ID",
  });

  // Initialiser les services Places et InfoWindow
  service = new PlacesService(map);
  infoWindow = new google.maps.InfoWindow();

  // Charger le template Mustache
  const template = await loadTemplate(); // Charger le template et stocker dans la variable 'template'

  // Ajouter un marqueur pour chaque position
  positions.forEach((position, index) => {
    const marker = new google.maps.Marker({
      map: map,
      position: position,
    });

    marker.addListener("click", () => {
      map.setCenter(position);
      map.setZoom(20);
    });

    marker.addListener("mouseover", () => {
      getPlaceDetails(position, marker, template);  // Passer le template à la fonction
    });

    marker.addListener("mouseout", () => {
      infoWindow.close();
    });
  });
}

// Fonction pour obtenir les détails du lieu avec l'API Places
async function getPlaceDetails(position, marker, template) {
  const request = { location: position, radius: '50' };

  service.nearbySearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results[0]) {
      const placeId = results[0].place_id;

      service.getDetails({ placeId: placeId }, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          // Vérifie les données récupérées depuis l'API
          console.log("Données du lieu : ", place);
      
          const placeData = {
            name: place.name,
            type: place.types ? place.types[0] : "Type inconnu",
            address: place.formatted_address,
            city: place.address_components.find(c => c.types.includes('locality'))?.long_name || 'Ville inconnue',
            postalCode: place.address_components.find(c => c.types.includes('postal_code'))?.long_name || 'Code postal inconnu',
            photo: place.photos ? place.photos[0].getUrl({ maxWidth: 200, maxHeight: 200 }) : null
          };
      
          // Vérifie les données injectées dans le template Mustache
          console.log("Données injectées dans le template : ", placeData);
      
          // Rendre le template avec Mustache
          const rendered = Mustache.render(template, placeData);
      
          // Afficher dans InfoWindow
          infoWindow.setContent(rendered);
          infoWindow.open(map, marker);
        } else {
          console.error("Erreur lors de l'obtention des détails du lieu.");
        }
      });
    } else {
      console.error("Aucun résultat trouvé pour ce lieu.");
    }
  });
}

initMap();
