<script setup>
import { reactive } from "vue";
import { useMemberDataStore } from "../../../../stores/memberData.js";

const memberDataStore = useMemberDataStore();
const years = new Date().getFullYear();
const creditNum = reactive(['', '', '', ''])
const creditDate = reactive({ year: years, month: 1 })

const saveCredit = () => {
   console.log(creditNum);
}

</script>
<template>
   <div class="container">
      <div class="row">
         <div class="col">
            <h4>綁定信用卡</h4>4
            <p>綁定信用卡加速付款程序，讓預訂更順暢！</p>
         </div>
      </div>
      <div class="row mb-4">
         <div class="d-flex col-6 border-bottom">
            <div id="creditCard1" class="emptyCard mb-5">
               <h6>尚未新增信用卡</h6>
            </div>
         </div>
      </div>
      <div class="row mb-5">
         <div class="col">
            <!-- Button trigger modal -->
            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">新增信用卡</button>
         </div>
      </div>
   </div>

   <!-- Modal -->
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
         <div class="modal-content">
            <div class="modal-header">
               <h1 class="modal-title fs-5" id="exampleModalLabel">
                  <h3>新增信用卡</h3>
               </h1>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <h5>
                  好刷一直刷
               </h5>
               <p>信用卡號</p>
               <div class="d-flex mb-3">
                  <input type="text" class="form-control btn-light creditCardText" placeholder="0000" maxlength="4"
                     v-model="creditNum[0]">
                  <h5 class="creditDash form-control">-</h5>
                  <input type="text" class="form-control btn-light creditCardText" placeholder="0000" maxlength="4"
                     v-model="creditNum[1]">
                  <h5 class="creditDash form-control">-</h5>
                  <input type="text" class="form-control btn-light creditCardText" placeholder="0000" maxlength="4"
                     v-model="creditNum[2]">
                  <h5 class="creditDash form-control">-</h5>
                  <input type="text" class="form-control btn-light creditCardText" placeholder="0000" maxlength="4"
                     v-model="creditNum[3]">
               </div>
               <p>信用卡到期日</p>
               <div class="d-flex">
                  <select v-model="creditDate.month" class="form-select w-10 text-center">
                     <option v-for="month in 12">{{ month }}</option>
                  </select>
                  <h5 class="creditDash form-control">/</h5>
                  <select v-model="creditDate.year" class="form-select w-15 text-center">
                     <option v-for="num in 25">{{ years + num - 1 }}</option>
                  </select>
               </div>
               <p>驗證碼</p>
               <input type="text" class="form-control btn-light w-15 creditCardText" placeholder="000" maxlength="3">
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
               <button type="button" class="btn btn-primary" @click="saveCredit">儲存更新</button>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
.emptyCard {
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 30px;
   background-color: #DCDCDC;
   width: 300px;
   height: 200px;
}

.emptyCard>h6 {
   color: white;
}

.haveCard {
   position: relative;
   background: linear-gradient(145deg, #6495ED, #E0FFFF);
   border-radius: 30px;
   width: 300px;
   height: 200px;
}

.haveCard>h6 {
   position: absolute;
   right: 20px;
   bottom: 15px;
   color: #4682B4;
}

.creditCardText {
   width: 60px;
   text-align: center;
   border: 1px solid gray;
}

.creditDash {
   margin: 0 10px;
   width: auto;
}

input::placeholder {
   text-align: center;
}
</style>