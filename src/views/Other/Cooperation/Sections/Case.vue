<script setup>
//Naive
import { NCard } from "naive-ui";

// image
import team4 from "@/assets/img/team-2.jpg";
import vueMkHeader from "@/assets/img/office-dark.jpg";
import Cooperation from "@/assets/img/Cooperation.jpg";

//Vue Material Kit 2 components
import MaterialAvatar from "@/components/MaterialAvatar.vue";

</script>


<template>
    <div class="question" style="border: 1px #777 solid;  padding: 20px">
        <h3 style="text-align: center">合作案例</h3>

        <n-card title="带封面的卡片" hoverable>
            <template #header>
                <div class="title-box">
                    <div class="title-img">
                        <a href="javascript:;">
                            <MaterialAvatar :image="team4" alt="Image placeholder" size="lg" />
                        </a>
                    </div>
                    <div class="title-p" style="vertical-align:middle">
                        <h5>業主A</h5>
                        <p>大幅補貼了辦公室的租金！</p>
                    </div>
                    <p>“把公司會議室於非上班時段出租，大幅貼補了辦公室的租金！”</p>
                </div>
                <div class="img-wrap">
                    <img :src="Cooperation" />
                </div>
                <p class="p-title">
                    總坪數：10.3 坪<br>每坪分潤：3,300
                    元/月(僅平日晚上與假日開放)
                </p>
                <p>
                    活用非上班時間的會議室，平日做為公司夥伴的會議空間，假日則做為共享空間出租。
                </p>
            </template>

        </n-card>

        <n-card title="带封面的卡片" hoverable>
            <template #header>
                <div class="title-box">
                    <div class="title-img">
                        <a href="javascript:;">
                            <MaterialAvatar :image="team4" alt="Image placeholder" size="lg" />
                        </a>
                    </div>
                    <div class="title-p" style="vertical-align:middle">
                        <h5>業主A</h5>
                        <p>大幅補貼了辦公室的租金！</p>
                    </div>
                    <p>“把公司會議室於非上班時段出租，大幅貼補了辦公室的租金！”</p>
                </div>
                <div class="img-wrap">
                    <img :src="Cooperation" />
                </div>
                <p class="p-title">
                    總坪數：10.3 坪<br>每坪分潤：3,300
                    元/月(僅平日晚上與假日開放)
                </p>
                <p>
                    活用非上班時間的會議室，平日做為公司夥伴的會議空間，假日則做為共享空間出租。
                </p>
            </template>

        </n-card>
    </div>
</template>

<style>
.question {
    margin-top: 80px;
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

.img-wrap img {
    width: 450px;
    height: 220px;
    border-radius: 15px
}

.title-img {
    float: left;
    margin: 0 20px 0 0;
    clear: both;
    width: 48px;
    height: 48px;
}


.title-p p {
    font-size: 16px;
    font-weight: bold;

}

.p-title {
    font-weight: bold;

}
</style>