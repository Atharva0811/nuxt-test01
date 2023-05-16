<template>
  <div>

  </div>
  <!-- <div style="height: 100vh;" id="map"></div> -->
  <div id="map" style="height:80vh"></div>
  <!-- footer Code  -->
  <div class="flex justify-around bg-cyan-800 text-white rounded-t-lg py-2">
    <div>
      <i class="fa fa-home ml-3"></i><br>
      <p>
        <NuxtLink to="/secondpage">Home</NuxtLink>
      </p>
    </div>
    <div>
      <i class="fa fa-map ml-2"></i>
      <p>
        <NuxtLink to="/Map">Map</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
if (process.client) {

  var map = L.map('map').setView([18.5093, 73.8551], 15);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // Point For Shaniwar Wada
  var Shaniwarwada = L.marker([18.5195, 73.8553]).bindTooltip("Shaniwarwada", { permanent: true, className: "my-label", offset: [0, 0] }).addTo(map);
  Shaniwarwada.on('click', function () { window.location.href = "/HistoricD" })

  // Point For Lal Mahal
  var LalMahal = L.marker([18.5188, 73.8565]).bindTooltip("Lal Mahal", { permanent: true, className: "my-label", offset: [0, 0] }).addTo(map);
  LalMahal.on('click', function () { window.location.href = "/HistoricD" })

  // Point For Tambdi Joshwari
  var TambdiJogeshwar = L.marker([18.5188, 73.8565]).bindTooltip("Tambdi Jogeshwarl", { permanent: true, className: "my-label", offset: [0, 0] }).addTo(map);
  TambdiJogeshwar.on('click', function () { window.location.href = "/HistoricD" })

  // Point For Shreemant Dagdusheth Halwai Ganpati Mandir
  var ShreemantDagdushethHalwaiGanpatiMandir = L.marker([18.5165, 73.856]).bindTooltip("Shreemant Dagdusheth Halwai Ganpati Mandir", { permanent: true, className: "my-label", offset: [0, 0] }).addTo(map);
  ShreemantDagdushethHalwaiGanpatiMandir.on('click', function () { window.location.href = "/HistoricD" })

  // //Point For KasbaGanpati 18°31′08″N 73°51′25″E
  // var KasbaGanpati = L.marker([18.3108, 73.8565]).bindTooltip("KasbaGanpati", { permanent: true, className: "my-label", offset: [0, 0] }).addTo(map);
  // KasbaGanpati.on('click', function () { window.location.href = "/HistoricD" })

  // Ponit for MahatmaPhuleMandai
  var MahatmaPhuleMandai = L.marker([18.5129, 73.8563]).bindTooltip("Mahatma Phule Mandai", { permanent: true, className: "my-label", offset: [0, 0] }).addTo(map);
  MahatmaPhuleMandai.on('click', function () { window.location.href = "/HistoricD" })

}
</script>
