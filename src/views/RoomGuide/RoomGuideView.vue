<script setup>
// Vue Material Kit 2 components
import RotatingCard from "@/examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "@/examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "@/examples/cards/rotatingCards/RotatingCardBack.vue";

// example component
import Breadcrumbs from "@/examples/Breadcrumbs.vue";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { onMounted, ref } from "vue";

const mapContainer = ref(null);

const data = [
    {
        image: "https://bit.ly/3G5JXJZ",
        icon: "touch_app",
        title: "Feel the <br /> Material Kit",
        description: "All the Bootstrap components that you need in a development have been re-design with the new look.",
        action: [
            {
                route: "/",
                label: "Start with Headers",
            },
        ],
    },
    {
        image: "https://bit.ly/32ZoTGx",
        title: "Discover More",
        description: "You will save a lot of time going from prototyping to full-functional code because all elements are implemented.",
        action: [
            {
                route: "/",
                label: "Start with Headers",
            },
        ],
    },
];

const markers = [
    { lat: 22.9971, lng: 120.2169, name: "成功大學", description: "這是成功大學" },
    { lat: 22.6273, lng: 120.3014, name: "高雄市立圖書館總館", description: "這是高雄市立圖書館總館" },
    { lat: 22.6746, lng: 120.4899, name: "旗津渡輪", description: "這是旗津渡輪" },
];

onMounted(() => {
    const map = L.map(mapContainer.value, {
        center: [22.8, 120.5],
        zoom: 10,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const markersLayer = L.layerGroup().addTo(map);

    markers.forEach((marker) => {
        const { lat, lng, name, description } = marker;
        const newMarker = L.marker([lat, lng]).addTo(markersLayer);
        newMarker.bindPopup(`<b>${name}</b><br>${description}`).on("click", () => {
            const card = document.getElementById(`card-${name}`);
            if (card) {
                card.classList.add("rotate-card-up");
                setTimeout(() => {
                    card.classList.remove("rotate-card-up");
                }, 2000);
            }
        });
    });
});

</script>
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 gy-8 space-wrapper">
                <Breadcrumbs :routes="[
                    { label: 'Home', route: '/some-route' },
                    { label: 'Library', route: '/some-route' },
                    { label: 'Data' },
                ]" />
                <div class="space-wrapper__list">
                    <RotatingCard v-for="(item, index) in data" :key="index">
                        <RotatingCardFront :image="item.image" :icon="item.icon" :title="item.title"
                            :description="item.description" />
                        <RotatingCardBack :image="item.image" :title="item.title" :description="item.description"
                            :action="item.action" />
                    </RotatingCard>
                </div>
            </div>
            <div class="col-6 gy-8 space-wrapper">
                <div class="mapContainer" ref="mapContainer"></div>
            </div>
        </div>
    </div>
</template>
<style>
/* div {
    border: 1px solid red;
    display: block;
} */

.fix-pos {
    position: fixed;
}

.mapContainer {
    width: 100%;
    height: 100%;
}

.space-wrapper__list {
    padding: 0 20px;
    margin: 0;
    width: 100%;
    overflow-y: scroll;
}

/* .grid {
    width: 100%;
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(2, 1fr);
} */
</style>
<script>
</script>
  