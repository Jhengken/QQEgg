<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import Header from "../../../examples/Header.vue";
import homefooter from "../../../examples/footers/homefooter.vue";

//images
import vueMkHeader from "@/assets/img/office-dark.jpg";

//Naive
import { NCollapse, NCollapseItem } from "naive-ui";

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
    <h5 style="text-align: center">常見問題</h5>

    <n-collapse accordion>
      <n-collapse-item title="想享是怎樣的空間？" name="1">
        <div>
          <ul>
            <li>
              想享是以時計價的自助出租空間，不但精心設計，且價格實惠。透過線上預訂，並自行到場使用，免去了與客服人員的複雜溝通，讓您自在舒適地使用場地！
            </li>
          </ul>
        </div>
      </n-collapse-item>

      <n-collapse-item title="想享的使用規範" name="2">
        <div>
          <ul>
            <li>
              使用完畢後請將場地空間及桌椅復原，垃圾丟棄處請參考現場使用須知，留給下一位使用者乾淨的空間。
            </li>
            <li>
              請降低音量，避免跑跳，影響到周邊鄰居們的安寧，如遭檢舉，後果需由空間使用者自行負責。
            </li>
            <li>
              禁止烹飪、點燃明火、攜帶寵物（導盲犬不在此限）、危險物品、吸菸、毒品、性愛，以及賭博等違反法令規定、公共秩序或善良風俗的行為。違者將直接取消使用權利，如有任何法律責任，須由空間使用者自行負責。
            </li>
            <li>
              由於空間使用者的故意或過失，導致想享遭受損害時，想享將向該使用者要求賠償。
            </li>
          </ul>
        </div>
      </n-collapse-item>

      <n-collapse-item title="如何取消及修改？" name="3">
        <div>
          <ul>
            <li>
              想享提供48小時前無條件更改訂單服務，更改訂單包含「取消退費」、「改期」、「延長縮短時間」、「更改空間」等。
            </li>
            <li>
              更改訂單時，請先進入「訂單記錄」頁面提出「取消退款」申請，再重新預訂空間。
            </li>
          </ul>
        </div>
      </n-collapse-item>

      <n-collapse-item title="場地會不會很髒亂？" name="4">
        <div>
          <ul>
            <li>
              多數客人都會在使用後將空間恢復原狀，基本上都很乾淨。如果您認為需要清潔，現場亦備有酒精與乾淨抹布供您使用，我們也會安排人員每日定時清掃。
            </li>
          </ul>
        </div>
      </n-collapse-item>
      <n-collapse-item title="是否有場佈、場復、進入時間？" name="5">
        <div>
          <ul>
            <li>
              請您預約時，一併將場佈、場復、進入時間都算入，我們不額外提供場佈、場復時間。您可以提早5分鐘進場，但必須準時離場！
            </li>
          </ul>
        </div>
      </n-collapse-item>

      <n-collapse-item title="請問如何場勘？" name="6">
        <div>
          <ul>
            <li>
              如需場勘，請您依照租用流程，付款預約 1
              小時至現場使用。我們盡可能提供最詳細的資訊、符合實際的照片，希望能節省您去現場察看的時間。當然，您可以透過線上客服，詢問我們網路上沒有提供的資訊。
            </li>
          </ul>
        </div>
      </n-collapse-item>
      <n-collapse-item title="想享的聯絡方式？" name="7">
        <div>
          <ul>
            <li>
              我們目前都是使用 LINE (@Xiang)
              來與客人聯繫。預約成功後，會在密碼信中提供您電話，若您在使用當下出現任何問題，可以即刻撥打！
            </li>
          </ul>
        </div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<style>
.question {
  margin-top: 50px;
  width: 700px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
}
</style>