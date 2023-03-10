<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import Header from "../../../examples/Header.vue";
import homefooter from "../../../examples/footers/homefooter.vue";

//Naive
import { NCollapse, NCollapseItem, NCard } from "naive-ui";

//Vue Material Kit 2 components
import MaterialAvatar from "@/components/MaterialAvatar.vue";

// image
import team4 from "@/assets/img/team-2.jpg";
import vueMkHeader from "@/assets/img/office-dark.jpg";
import Cooperation from "@/assets/img/Cooperation.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <Header>
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
              Material Kit 2
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              Start the Development With Bootstrap 5 Design System inspired by
              Material Design.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div
    class="question"
    style="border: 1px #777 solid; border-radius: 20px; padding: 20px"
  >
    <h4 style="text-align: center">合作案例</h4>

    <n-card title="带封面的卡片" hoverable>
      <template #header>
        <div>
          <a href="javascript:;">
            <MaterialAvatar :image="team4" alt="Image placeholder" size="sm" />
          </a>
          <h7>業主A</h7>
          <p>“把公司會議室於非上班時段出租，大幅貼補了辦公室的租金！”</p>
        </div>
      </template>
      <template #default>
        <div class="img-wrap">
          <img :src="Cooperation" style="border-radius: 20px" />
        </div>
        <h7>
          活用非上班時間的會議室 總坪數：10.3 坪 每坪分潤：3,300
          元/月(僅平日晚上與假日開放)
        </h7>
        <h7></h7>
      </template>
    </n-card>

    <n-card title="带封面的卡片" hoverable>
      <template #header>
        <div>
          <a href="javascript:;">
            <MaterialAvatar :image="team4" alt="Image placeholder" size="sm" />
          </a>
          <h7>業主A</h7>
          <p>“把公司會議室於非上班時段出租，大幅貼補了辦公室的租金！”</p>
        </div>
      </template>
      <template #default>
        <div class="img-wrap">
          <img :src="Cooperation" style="border-radius: 20px" />
        </div>
        <h7>
          活用非上班時間的會議室 總坪數：10.3 坪 每坪分潤：3,300
          元/月(僅平日晚上與假日開放)
        </h7>
        <h7></h7>
      </template>
    </n-card>
  </div>

  <DefaultFooter />
</template>

<style>
.question {
  margin-top: 110px;
  width: 1100px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
}

.n-card {
  max-width: 500px;
  margin: 10px;
  display: inline-block;
}

.img-wrap > img {
  width: 400px;
  max-height: 200px;
}
</style>