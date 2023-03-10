<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import homefooter from "../../examples/footers/homefooter.vue";

// sections
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import presentationcarousel from "./Sections/presentationcarousel.vue";
import presentation跑馬燈 from "./Sections/presentation跑馬燈.vue";
import presentation使用者操作 from "./Sections/presentation使用者操作.vue";

//images
import vueMkHeader from "@/assets/img/office-dark.jpg";

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
  <div class="container-fluid position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :transparent="isTransparent" :sticky="isSticky" />
      </div>
    </div>
  </div>
  <!-- 這邊要改中間內容 -->
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

  <div class="container">
    <div class="row">
      <presentationcarousel />
    </div>
  </div>

  <presentation跑馬燈 />
  <PresentationTestimonials />
  <presentation使用者操作 />
  <div class="container-fluid">
    <div class="row">
      <homefooter />
    </div>
  </div>
  <DefaultFooter />
</template>

<script>
export default {
  props: {
    transparent: {
      type: Boolean,
      default: true,
    },
    light: {
      type: Boolean,
      default: true,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    sticky: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isTransparent: this.transparent,
      isLight: this.light,
      isDark: this.dark,
      isSticky: this.sticky,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
    isTransparent(newVal) {
      this.$emit("update:transparent", newVal);
    },
    isSticky(newVal) {
      this.$emit("update:sticky", newVal);
    },
  },
  methods: {
    handleScroll() {
      // Check if the page is scrolled more than 100px
      if (window.pageYOffset > 100) {
        this.isTransparent = false;
        this.isSticky = true;
      } else {
        this.isTransparent = true;
        this.isSticky = false;
      }
    },
  },
};

function load() {
  var list = document.querySelector(".list");
  var box = document.querySelector(".box");
  var left = 0;
  var timer;

  function move() {
    clearInterval(timer);
    timer = setInterval(() => {
      left -= 2;
      if (left <= -(7 * 200 + 2 * 24)) {
        left = 0;
      }
      list.style.left = left + "px";
    }, 20);
  }

  move();

  box.onmouseover = function () {
    clearInterval(timer);
  };

  box.onmouseleave = function () {
    move();
  };
}

document.addEventListener("DOMContentLoaded", load);
</script>
