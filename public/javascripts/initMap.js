// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 0, lng: 0 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // // The marker, positioned at Uluru
  // const marker = new google.maps.Marker({ position: uluru, map: map });

  let count = 0;
  addMarker(uluru);
  addMarker({lat: 20, lng: 35});

  function addMarker(coords) {
    count ++;
    const marker = new google.maps.Marker({ position: coords, map: map });
    const infoWindow = new google.maps.InfoWindow({
      content: `<h1>${count}</h1>`
    });
  
    marker.addListener('click', ()=>{
      infoWindow.open(map,marker);
    })
  }

  //Listen for click on map
  google.maps.event.addListener(map, 'click', 
  function(event){
    addMarker(event.latLng);
  })
}
