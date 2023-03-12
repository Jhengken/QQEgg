<script setup>
import { RouterLink, RouterView } from "vue-router";

import MemberHeader from "../Components/MemberHeader.vue";
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";

</script>

<template>
   <NavbarDefault :sticky="false" :transparent="false" class="mb-5" />
   <MemberHeader labelString="會員資料" />
   <div class="container">
      <div class="row">
         <ul class="list-unstyled d-flex border-bottom">
            <li class="me-4">
               <RouterLink :to="{ name: 'member-memberdetail-information' }">
                  <h5 class="linkstring">基本資料</h5>
               </RouterLink>
            </li>
            <li class="me-4">
               <RouterLink :to="{ name: 'member-memberdetail-point' }">
                  <h5 class="linkstring">累計積分</h5>
               </RouterLink>
            </li>
            <li class="me-4">
               <RouterLink :to="{ name: 'member-memberdetail-creditcard' }">
                  <h5 class="linkstring">信用卡管理</h5>
               </RouterLink>
            </li>
         </ul>
      </div>
   </div>
   <RouterView />
</template>

<style scoped>
h5 {
   color: gray;
}
</style>