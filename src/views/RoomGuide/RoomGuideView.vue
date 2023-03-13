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

onMounted(() => {
    const map = L.map(mapContainer.value, {
        center: [23.611, 120.768],
        zoom: 8,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
});
</script>
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 gy-8 space-wrapper">
                <div class="overflow-y-visible">
                    <Breadcrumbs :routes="[
                        { label: 'Home', route: '/some-route' },
                        { label: 'Library', route: '/some-route' },
                        { label: 'Data' },
                    ]" />
                    <div class="space-wrapper__list">
                        <div class="row g-3">
                            <div class="col g-3">
                                <RotatingCard>
                                    <RotatingCardFront image="https://bit.ly/3G5JXJZ" icon="touch_app"
                                        title="Feel the <br /> Material Kit"
                                        description="All the Bootstrap components that you need in a development have been re-design with the new look." />

                                    <RotatingCardBack image="https://bit.ly/32ZoTGx" title="Discover More"
                                        description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                                        :action="[
                                            {
                                                route: '/',
                                                label: 'Start with Headers',
                                            },
                                        ]" />
                                </RotatingCard>
                            </div>
                            <div class="col g-3">
                                <RotatingCard>
                                    <RotatingCardFront image="https://bit.ly/3G5JXJZ" icon="touch_app"
                                        title="Feel the <br /> Material Kit"
                                        description="All the Bootstrap components that you need in a development have been re-design with the new look." />

                                    <RotatingCardBack image="https://bit.ly/32ZoTGx" title="Discover More"
                                        description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                                        :action="[
                                            {
                                                route: '/',
                                                label: 'Start with Headers',
                                            },
                                        ]" />
                                </RotatingCard>
                            </div>
                        </div>
                        <div class="row g-3">
                            <div class="col g-3">
                                <RotatingCard>
                                    <RotatingCardFront image="https://bit.ly/3G5JXJZ" icon="touch_app"
                                        title="Feel the <br /> Material Kit"
                                        description="All the Bootstrap components that you need in a development have been re-design with the new look." />

                                    <RotatingCardBack image="https://bit.ly/32ZoTGx" title="Discover More"
                                        description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                                        :action="[
                                            {
                                                route: '/',
                                                label: 'Start with Headers',
                                            },
                                        ]" />
                                </RotatingCard>
                            </div>
                            <div class="col g-3">
                                <RotatingCard>
                                    <RotatingCardFront image="https://bit.ly/3G5JXJZ" icon="touch_app"
                                        title="Feel the <br /> Material Kit"
                                        description="All the Bootstrap components that you need in a development have been re-design with the new look." />

                                    <RotatingCardBack image="https://bit.ly/32ZoTGx" title="Discover More"
                                        description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                                        :action="[
                                            {
                                                route: '/',
                                                label: 'Start with Headers',
                                            },
                                        ]" />
                                </RotatingCard>
                            </div>
                        </div>
                        <div class="row g-3">
                            <div class="col g-3">
                                <RotatingCard>
                                    <RotatingCardFront image="https://bit.ly/3G5JXJZ" icon="touch_app"
                                        title="Feel the <br /> Material Kit"
                                        description="All the Bootstrap components that you need in a development have been re-design with the new look." />

                                    <RotatingCardBack image="https://bit.ly/32ZoTGx" title="Discover More"
                                        description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                                        :action="[
                                            {
                                                route: '/',
                                                label: 'Start with Headers',
                                            },
                                        ]" />
                                </RotatingCard>
                            </div>
                            <div class="col g-3">
                                <RotatingCard>
                                    <RotatingCardFront image="https://bit.ly/3G5JXJZ" icon="touch_app"
                                        title="Feel the <br /> Material Kit"
                                        description="All the Bootstrap components that you need in a development have been re-design with the new look." />

                                    <RotatingCardBack image="https://bit.ly/32ZoTGx" title="Discover More"
                                        description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                                        :action="[
                                            {
                                                route: '/',
                                                label: 'Start with Headers',
                                            },
                                        ]" />
                                </RotatingCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6 gy-8 space-wrapper">
                <div class="mapContainer" ref="mapContainer"></div>
            </div>
        </div>
    </div>
</template>
<style>
div {
    border: 1px solid red;
    display: block;
}

.fix-pos {
    position: fixed;
}

.mapContainer {
    width: 100%;
    height: 100%;
}
</style>
<script>
</script>
  