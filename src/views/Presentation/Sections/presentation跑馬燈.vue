<script>
import photo1 from "../../../assets/img/1.jpg";
import photo2 from "../../../assets/img/2.jpg";
import photo3 from "../../../assets/img/3.jpg";
import photo4 from "../../../assets/img/4.jpg";
import photo5 from "../../../assets/img/5.jpg";
import photo6 from "../../../assets/img/6.jpg";
import photo7 from "../../../assets/img/7.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];

export default {
  data() {
    return {
      imageUrls: photos.map((photo) => ({ src: photo, link: "/product1" })),
      intervalId: null,
      scrollPosition: 0,
      scrollStep: 2,
      itemWidth: 0,
      containerWidth: 0,
    };
  },
  mounted() {
    this.startAutoScroll();
    this.getItemAndContainerWidth();
  },
  methods: {
    startAutoScroll() {
      this.intervalId = setInterval(this.scrollRight, 20);
    },
    stopAutoScroll() {
      clearInterval(this.intervalId);
    },
    scrollRight() {
      const maxScrollPosition =
        this.itemWidth * this.imageUrls.length - this.containerWidth;
      if (this.scrollPosition >= this.itemWidth) {
        const firstItem = this.imageUrls[0];
        const newImageUrls = this.imageUrls.slice(1).concat([firstItem]);
        this.imageUrls = newImageUrls;
        this.scrollPosition -= this.itemWidth;
      }
      this.scrollPosition += this.scrollStep;
      if (this.scrollPosition > maxScrollPosition) {
        this.scrollPosition = maxScrollPosition;
      }
      if (this.$refs.promoteList) {
        this.$refs.promoteList.scrollTo(this.scrollPosition, 0);
      }
    },
    getItemAndContainerWidth() {
      const item = this.$refs.promoteList.querySelector("img");
      this.itemWidth = item.offsetWidth;
      this.containerWidth = this.$refs.promoteList.offsetWidth;
    },
  },
};
</script>
<template>
  <div class="promote-container">
    <div class="row">
      <div class="promote-main d-flex justify-content-center">
        <img
          src="../../../assets/img/下載.jpg"
          class="promote-main__img"
          alt=""
        />
        <div style="margin-left: 120px">
          <h1 class="content-title">
            鄭仲智皮包 共享中....
            <br />
            歡迎各位！
          </h1>
          <a
            href="https://thehapp.com/space/result?lat=25.008323165610395&lng=121.45451073244777"
            class="content-link"
          >
            一起共襄盛舉
          </a>
        </div>
      </div>
    </div>
    <div class="promote-list item-4x" ref="promoteList">
      <div v-for="(imageUrl, index) in imageUrls" :key="index">
        <a :href="imageUrl.link">
          <img
            class="space-item"
            :src="imageUrl.src"
            @mouseover="stopAutoScroll"
            @mouseout="startAutoScroll"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-344px);
  }
}
.promote-list.item-4x {
  flex-wrap: nowrap;
  max-width: unset;
  overflow-x: hidden;
  padding: 20px 0;
}
.promote-list.item-4x .space-item {
  flex: 0 0 auto;
  width: 344px;
  margin-right: 24px;
}
.promote-list {
  display: flex;
  width: 100%;
  max-width: 1225px;
  margin: 42px auto -20px;
  padding: 20px;
}
.space-item {
  position: relative;
  width: 566px;
  height: 214px;
  background: #e6e6e6;
  border-radius: 8px;
  background-position: 75% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: transform 0.5s;
}
.space-item:hover {
  transform: scale(1.05);
}
.content-link {
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 21px;
  line-height: 1.4;
  letter-spacing: 0.5px;
  color: #3f916a;
  margin-top: 24px;
}

.content-title {
  font-weight: 500;
  font-size: 34px;
  line-height: 1.4;
  display: flex;
  letter-spacing: 0.5px;
  color: #4a4a4a;
}

.promote-main__img {
  width: 566px;
  height: 315px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  background-position: 75% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.promote-container {
  position: relative;
  padding: 75px 0;
  margin-bottom: 100px;
  background-color: #fff7f2;
  overflow: hidden;
}
</style>
