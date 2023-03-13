<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import Header from "../../../examples/Header.vue";

// sections

//images
import vueMkHeader from "@/assets/img/pexels-photo-425122.jpeg";
import { RouterLink, RouterView } from "vue-router";


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
    <!-- 這邊要改中間內容 -->
    <Header>
        <div class="page-header min-vh-75" :style="`background-image: url(${vueMkHeader})`" loading="lazy">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 text-center mx-auto position-relative">
                        <h1 class="text-white pt-3 mt-n5 me-2" :style="{ display: 'inline-block ' }">
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

    <div>aaaaaa</div>

    <nav>
        <h5 style="color: blue;">使用條款</h5>
        <button>
            <RouterLink to="/user-terms">使用條款</RouterLink>
        </button>
        <br>
        <button>
            <RouterLink to="/aaa">隱私政策a</RouterLink>
        </button>
        <br>
        <button>
            <RouterLink to="/bbb">Cookie好吃b</RouterLink>
        </button>
        <br>
        <button>
            <RouterLink to="/ccc">技術問題c</RouterLink>
        </button>
    </nav>
    <nav>
        <RouterView></RouterView>
    </nav>
</template>
      
<style></style>