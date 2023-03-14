<script setup>
import { ref, reactive } from "vue";

const points = ref(100);
//Modal，按下按鈕後將資料傳送到這裡在傳到Modal
const modalinfo = reactive({ title: 'tittlee', body: 'bodyy', })

</script>

<template>
   <div class="container">
      <div class="row mb-5">
         <h4>目前累計的積分</h4>
         <p>來兌換吧</p>
      </div>
      <div class="row">
         <div class="col-6 border-bottom mb-5">
            <h5>積分總數</h5>
            <p>{{ points }}</p>
         </div>
      </div>
      <div class="row">
         <div class="col-6 border-bottom mb-5 d-flex justify-content-between">
            <h5>可兌換查詢</h5>
            <!-- Button trigger modal -->
            <h6 data-bs-toggle="modal" data-bs-target="#exampleModal">查詢</h6>
         </div>
      </div>
   </div>


   <!-- Modal -->
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
         <div class="modal-content">
            <div class="modal-header">
               <h1 class="modal-title fs-5" id="exampleModalLabel">{{ modalinfo.title }}</h1>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               {{ modalinfo.body }}
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
               <button type="button" class="btn btn-primary">Save changes</button>
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