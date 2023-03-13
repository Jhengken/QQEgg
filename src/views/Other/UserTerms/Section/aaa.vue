<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import Header from "../../../../examples/Header.vue";

//images
import vueMkHeader from "@/assets/img/pexels-photo-425122.jpeg";

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

    <div>
        <h5>
            Hey Ah Ah 你是我的寶貝<br>
            想你的滋味隱隱作祟<br>
            寶貝寶貝我們乾一杯<br>
            這是你最愛的黑桃A<br>
            乾杯<br>
            黑桃A<br>
            這是哪一款香水搭配夜的美<br>
            讓我成功陷入心動的氛圍<br>
            長長的腿一尺八的腰圍<br>
            此刻的我只想親吻你的嘴<br>
            拿來吧你Mu Ma<br>
            Hey Ah Ah 你是我的寶貝<br>
            想你的滋味隱隱作祟<br>
            寶貝寶貝我們乾一杯<br>
            這是你最愛的黑桃A 乾杯<br>
            更多更詳盡歌詞<br>
            在※ Mojim.com魔鏡歌詞網<br>
        </h5>
    </div>
</template>