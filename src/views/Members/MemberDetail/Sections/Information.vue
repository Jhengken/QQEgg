<script setup>
import { reactive } from "vue";

const info = reactive({ name: '欸另', email: 'elin@gmail.com', phone: '0920000000' });

</script>

<template>
   <div class="container">
      <div class="row mb-5">
         <h4>修改個人資料</h4>
         <p>我會好好保存你的資料</p>
      </div>
      <div class="row">
         <div class="col-6 border-bottom mb-5">
            <h5>姓名</h5>
            <div class="d-flex justify-content-between">
               <p>{{ info.name }}</p>
               <h6>編輯</h6>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-6 border-bottom  mb-5">
            <h5>電子信箱</h5>
            <div class="d-flex justify-content-between">
               <p>{{ info.email }}</p>
               <h6>編輯</h6>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-6 border-bottom  mb-5">
            <h5>電話號碼</h5>
            <div class="d-flex justify-content-between">
               <p>{{ info.phone }}</p>
               <h6>編輯</h6>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
h5+p {
   font-family: sans-serif;
   font-weight: 900;
}

h6 {
   cursor: pointer;
}
</style>