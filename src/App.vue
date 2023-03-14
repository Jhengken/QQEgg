<script setup>
/*
=========================================================
* Vue Material Kit 2 - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-material-kit
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { RouterView } from "vue-router";
import NavbarDefault from "../src/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../src/examples/footers/FooterDefault.vue";

</script>

<template>
 <div class="container-fluid position-sticky z-index-sticky top-0" >
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <router-view />

  <DefaultFooter />
</template>



<<<<<<< HEAD
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
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  watch: {
    isTransparent(newVal) {
      this.$emit('update:transparent', newVal);
    },
    isSticky(newVal) {
      this.$emit('update:sticky', newVal);
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
</script>
=======
>>>>>>> c08a977b8d364d9da1bf9f1e6212bb9ea0a1db32
