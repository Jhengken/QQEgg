<script setup>
import datepickerDesign from "../RoomGuide/datepickerDesign.vue";
import datepickerDesign2 from "../RoomGuide/datepickerDesign2.vue";
import { ref } from "vue";
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import photo1 from "../../assets/img/4.jpg";
import photo2 from "../../assets/img/5.jpg";
import photo3 from "../../assets/img/6.jpg";
import photo4 from "../../assets/img/7.jpg";

const swiperTextBase = [
  { Title: "這是第一間房", Address: "高雄市內湖區", img: photo1 },
  { Title: "這是第二間房", Address: "高雄市內湖區", img: photo2 },
  { Title: "這是第三間房", Address: "高雄市內湖區", img: photo3 },
  { Title: "這是第四間房", Address: "高雄市內湖區", img: photo4 },
];
const view = ref(1);
const changview = (Index) => {
  view.value = Index;
};
const modules = [EffectCube, Autoplay, Pagination, Navigation];
const showModal = ref(false);
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <swiper :modules="modules" effect="cube" :space-between="20" :loop="true" :pagination="{ clickable: true }"
          navigation :autoplay="{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }" :cube-effect="{
  shadow: false,
  slideShadows: false,
  shadowOffset: 20,
  shadowScale: 0.94,
}">
          <swiper-slide v-for="(text, index) in swiperTextBase" :key="index">
            <div class="image-wrapper">
              <img :src="text.img" alt="img" class="object-fit-cover" style="height: 400px; width: 600px" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
  <section>
    <div class="container-wrapper">
      <div class="locationTitle">
        <div class="locationTitleLeft">
          <div class="locationTitleComment">
            <h3 class="title">{{ swiperTextBase[0].Title }}</h3>
            <div class="locationComment">
              <div class="material-icons">feedback</div>
              <div class="text">
                <p>0則評論</p>
              </div>
            </div>
          </div>
          <p class="material-icons">
            location_on{{ swiperTextBase[0].Address }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="border-bottom">
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-8 type-button d-flex justify-content-center">
          <ul>
            <li><button @click="changview(1)">顯示時租</button></li>
            <li><button @click="changview(2)">顯示日租</button></li>
          </ul>
        </div>
        <div class="col"></div>
        <!-- 這邊是顯示日租內容 -->
        <div class="row" v-if="view === 2">
          <ul class="price-list mt-3 col-8 d-flex justify-content-center">
            <li class="price-list-item clearfix">
              <span class="day-of-week" style="margin-right: 20px">周一 ~ 周五</span>
              <span class="hours">08:00 ~ 22:00</span>
            </li>
          </ul>
          <div class="col-4 mt-3"><span class="price">$24000/天</span></div>

          <ul class="price-list col-8 d-flex justify-content-center">
            <li class="price-list-item clearfix">
              <span class="day-of-week" style="margin-right: 20px">週六 ~ 周日</span>
              <span class="hours">08:00 ~ 22:00</span>
            </li>
          </ul>
          <div class="col-4">
            <span class="price d-flex mt-2 justify-content-start">$27000/天<span class="price-tag">假日收費</span></span>
          </div>
          <div class="time-choose clearfix d-flex justify-content-center mt-5">
            <label for="start-date" style="color: black; font-size: larger">開始日期:</label>
            <datepickerDesign />
            <!-- <input type="date" id="start-date" name="start-date" /> -->

            <label for="end-date" style="color: black; font-size: larger">結束日期:</label>
            <datepickerDesign />
            <!-- <input type="date" id="end-date" name="end-date" /> -->
          </div>
          <div class="actionBtn mb-5">
            <button class="fullBtn">天數 * 價格 | 立即預訂</button>
          </div>
        </div>

        <!-- 這邊是顯示時租內容 -->
        <div class="row" v-if="view === 1">
          <div class="time-choose mt-5 col-8 clearfix d-flex justify-content-end">
            <label for="start-date" style="color: black; font-size: larger">選擇日期:</label>
            <datepickerDesign2 />

            <!-- <input type="date" id="start-date" name="start-date" /> -->

            <!-- <label for="end-date">結束日期:</label><datepickerDesign /> -->
            <!-- <input type="date" id="end-date" name="end-date" /> -->
          </div>
          <div class="col-4 mt-5">
            <span class="price" style="color: black; font-size: larger">$190/小時</span>
          </div>

          <div class="actionBtn mb-5">
            <button class="fullBtn">天數 * 價格 | 立即預訂</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container mt-5">
      <div class="row">
        <div class="locationInfo">
          <!-- 簡介 -->
          <div class="infoSection d-flex justify-content-center js-daily-rule">
            <div class="infoTitle" style="padding: 0px 20px">簡介</div>
            <div class="infoDetail rules">
              Happ.
              小樹屋是以時計價的出租空間，線上付款，即訂即用，適合各類課程、會議、聚會、談話等活動。
            </div>
          </div>
          <!-- 租用流程 -->
          <div class="infoSection d-flex justify-content-center js-daily-rule mt-3">
            <div class="infoTitle" style="padding: 0px 20px">租用流程</div>
            <div class="infoDetail rules">
              <ul>
                <li class="material-icons step step1">
                  calendar_month 選擇租用的日期、時間，點擊立即預訂。
                </li>
                <li class="material-icons step step2" style="padding-top: 15px">
                  payment 使用線上信用卡
                </li>
                <li class="material-icons step step3" style="padding-top: 15px">
                  qr_code_scanner
                  付款後，請閱讀訂單密碼頁的使用須知，並至信箱收取預訂成功通知Email。
                </li>
              </ul>
            </div>
          </div>
          <!-- 空間容納 -->
          <div class="infoSection d-flex justify-content-center js-daily-rule mt-3">
            <div class="infoTitle" style="padding: 0px 20px">空間容納</div>
            <div class="infoDetail rules">
              <ul>
                <li class="material-icons step step1">
                  groups 建議人數 (人數) 人
                </li>
                <li class="material-icons step step1" style="padding-top: 15px">
                  accessible 場地大小約為
                  <a class="floorplanBtn" @click="showModal = true">4 坪</a>
                  | 此據點
                  <a class="floorplanBtn" @click="showModal = true">樓層平面圖</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 設備 -->
          <div class="infoSection d-flex justify-content-center js-daily-rule mt-3">
            <div class="infoTitle" style="padding: 0px 20px">設備</div>
            <div class="infoDetail">
              <ul class="deviceServe">
                <li>
                  <i class="material-icons-round">flutter_dash</i>
                  <p style="display: inline-block; font-size: 30px">白板</p>
                  <small>150*90cm/附白板筆、板擦</small>
                </li>
              </ul>
              <ul class="deviceServe">
                <li>
                  <i class="material-icons-round">flutter_dash</i>
                  <p style="display: inline-block; font-size: 30px">白板</p>
                  <small>150*90cm/附白板筆、板擦</small>
                </li>
              </ul>
              <ul class="deviceServe">
                <li>
                  <i class="material-icons-round">flutter_dash</i>
                  <p style="display: inline-block; font-size: 30px">白板</p>
                  <small>150*90cm/附白板筆、板擦</small>
                </li>
              </ul>
              <ul class="deviceServe">
                <li>
                  <i class="material-icons-round">flutter_dash</i>
                  <p style="display: inline-block; font-size: 30px">白板</p>
                  <small>150*90cm/附白板筆、板擦</small>
                </li>
              </ul>
              <ul class="deviceServe">
                <li>
                  <i class="material-icons-round">flutter_dash</i>
                  <p style="display: inline-block; font-size: 30px">白板</p>
                  <small>150*90cm/附白板筆、板擦</small>
                </li>
              </ul>
              <ul class="deviceServe">
                <li>
                  <i class="material-icons-round">flutter_dash</i>
                  <p style="display: inline-block; font-size: 30px">白板</p>
                  <small>150*90cm/附白板筆、板擦</small>
                </li>
              </ul>
              <p class="material-icons-round" style="font-size: small">
                warning
                場地未提供且禁止使用麥克風設備。使用電視時，請保持適當音量，以不影響其他空間使用者為原則。
              </p>
            </div>
          </div>
          <!-- 適合活動-->
          <div class="infoSection d-flex justify-content-center js-daily-rule mt-3">
            <div class="infoTitle" style="padding: 0px 20px">適合活動</div>
            <div class="infoDetail rules">
              <ul class="evtType">
                <li>家教</li>
                <li>心靈談話</li>
                <li>心靈談話</li>
                <li>面試</li>
                <li>鄭寶見面會</li>
                <li class="linote">為確保安全，房內、公共區設有監視器。</li>
              </ul>
            </div>
          </div>
          <!-- 開放時段-->
          <div class="infoSection d-flex justify-content-center js-daily-rule mt-3">
            <div class="infoTitle" style="padding: 0px 20px">開放時段</div>
            <div class="infoDetail rules">
              <p style="color:black">週一 - 週日 08:00 - 22:00</p>
            </div>
          </div>
          <!-- 近期評價(先Pass)-->
          <div class="infoSection d-flex justify-content-center js-daily-rule mt-3">
            <div class="infoTitle" style="padding: 0px 20px">近期評價</div>
            <div class="infoDetail rules">

            </div>
          </div>
          <!-- 使用規範-->
          <div class="infoSection d-flex justify-content-center js-daily-rule mt-3">
            <div class="infoTitle" style="padding: 0px 20px">使用規範</div>
            <div class="infoDetail">
              <ul class="use">
                <li style=" text-align: left; list-style-type: decimal;     display: list-item;
                        ">遵守大樓規範，公共區域應保持輕聲細語，請勿大聲喧嘩。</li>
                <li style=" text-align: left; list-style-type: decimal;    display: list-item;
                        ">自行清潔環境，愛惜空間內所有裝潢設備， Happ.小樹屋
                  不收取額外清潔、水電費，但若您留下髒亂的環境或造成家具損毀，需額外支付清潔維護費用。</li>
                <li style=" text-align: left; list-style-type: decimal;    display: list-item;
                        ">請配合準時離場，不得提早進入或超時使用。</li>
                <li style=" text-align: left; list-style-type: decimal;    display: list-item;
                        ">其他使用規範與罰則，請參考<a href="#" style="color: red;">使用者條款</a>。</li>

              </ul>
            </div>
          </div>
          <!-- 地圖 -->
          <div class="infoSection d-flex justify-content-center js-daily-rule mt-3">
            <div class="infoTitle" style="padding: 0px 20px">地圖</div>
            <div class="infoDetail rules">
              <P>捷運府中站 1 號出口，步行 7 分鐘</P>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6666850007955!2d120.2137666153539!3d22.999281222968683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e76f2ae1e81a1%3A0xefb13720d722d1c0!2z5oiQ5Yqf5aSn5a245ZSv6L6y5aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1678760586527!5m2!1szh-TW!2stw"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 秀出圖片檔案 -->
  <div v-if="showModal" class="floor-mask" @click.self="showModal = false">
    <div class="floor-container floor">
      <span class="close" @click="showModal = false">&times;</span>
      <img class="floor-container-main" src="../../assets/img/房間坪數格局/product-1.png" alt="image description" />
    </div>
  </div>
</template>

<style>
.swiper {
  width: 100%;
  height: 100%;
  overflow: visibles;
}

.locationComment {
  display: inline-block;
}

.container-wrapper {
  max-width: 760px;
  width: 100%;
  height: auto;
  margin: 0 auto 40px;
}

.container-wrapper .locationTitle {
  margin: 15px 0 20px;
  padding: 0;
}

.container-wrapper .locationTitle .locationTitleLeft .locationTitleComment {
  padding: 0 0 18px;
}

.container-wrapper .locationTitle .locationTitleLeft .locationTitleComment .locationComment {
  display: inline-block;
  cursor: pointer;
}

.container-wrapper .locationTitle .locationTitleLeft .locationTitleComment h3 {
  vertical-align: middle;
  display: inline-block;
  padding: 0 16px 0 0;
}

.container-wrapper .locationTitle .locationTitleLeft .locationTitleComment .locationComment .text {
  vertical-align: middle;
  display: inline-block;
}

.type-button ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.type-button li {
  display: inline-block;
}

.type-button button {
  background-color: transparent;
  border: none;
  color: #000;
  cursor: pointer;
  font-size: 16px;
  margin: 0 10px;
  padding: 10px 20px;
}

.type-button button:hover {
  background-color: #eee;
}

.type-button button:focus {
  background-color: rgb(52, 220, 100);
  outline: none;
}

.price-tag {
  border: solid 1px #ed5958;
  border-radius: 3px;
  padding: 4px 7px;
  color: #ed5958 !important;
  font-size: 10px !important;
  margin-left: 12px;
  line-height: 1 !important;
}

.actionBtn {
  padding-top: 20px;
  text-align: center;
  font-size: 18px;
}

.fullBtn {
  z-index: 99;
  cursor: pointer;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 50px;
  padding: 10px 20px;
  background-color: #ed5959;
  letter-spacing: 0.1em;
}

.infoTitle {
  width: 10%;
  min-width: 90px;
  display: inline-block;
  color: #a59476;
  text-align: right;
  font-size: large;
}

.infoDetail {
  max-width: 765px;
  line-height: 1.5em;
  width: 80%;
  border-bottom: 1px solid #d2d2d2;
  padding-bottom: 10px;
}

.step {
  width: 100% !important;
  position: relative;
}

.floorplanBtn {
  color: #42996d;
  cursor: pointer;
  margin: 0;
  text-decoration: underline;
}

.floor-mask {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000b3;
  display: block;
  transition: opacity 0.3s ease;
}
.p{
  font-weight: 400;
}
.floor-container {
  position: absolute;
  display: block;
  max-width: 800px;
  margin: 30px auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.floor-container-main {
  max-width: 100%;
  max-height: 680px;
  display: block;
  margin: 0 auto;
}

.locationInfo {
  color: #666;
  max-width: 995px;
  width: 100%;
  margin: 0 auto;
  font-size: .9em;
}

.locationInfo .infoSection .infoDetail ul li {
  display: inline-block;
  margin: 0 0 20px;
  width: auto;
  vertical-align: middle;
}

.infoDetail ul small {
  font-size: 0.7em;
  display: block;
  margin-top: -25px;
}

.deviceServe {
  display: inline-block;
}

.locationInfo .infoSection .infoDetail .evtType li {
  list-style: disc;
  float: left;
  margin: 0 3% 0 25px;
  display: list-item;
  width: auto;
}

.linote {
  list-style: none !important;
  font-size: 0.9em;
  padding: 10px 0 0;
  clear: both;
  color: #999;
}
</style>
