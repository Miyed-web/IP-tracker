
const input = document.querySelector(".form input")
const btn = document.querySelector(".form button")
const ipInfos = document.querySelectorAll("ul li h2")



var map = L.map('map').setView([0,0], 13);
const locationIcon = L.icon({
    iconUrl: 'images/icon-location.svg',
    iconSize: [35, 45],
    iconAnchor: [15, 15]
});


const marker = L.marker([0,0],{icon: locationIcon}).addTo(map);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: false
}).addTo(map);



btn.addEventListener("click",async ()=>{
  let value = input.value;
  let url =`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_RKO0f2y3kToH2CGOKcqodDvxopPwV&ipAddress=${value}`;
  
  let res = await fetch(url);
  let data = await res.json()
  console.log(data)
  ipInfos[0].textContent=data.ip
 ipInfos[1].textContent=`${data.location.region} , ${data.location.city}`
 ipInfos[2].textContent=`UTC ${data.location.timezone}`
 ipInfos[3].textContent=data.isp
 

map.setView([data.location.lat, data.location.lng], 13);
// marker.setLatLng([data.latitude, data.longitude]);

marker.setLatLng([data.location.lat, data.location.lng]);
})
