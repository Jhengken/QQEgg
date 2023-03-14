<script setup>
import { RouterLink, RouterView } from "vue-router";

import MemberHeader from "../Components/MemberHeader.vue";
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";

</script>

<template>
   <NavbarDefault :sticky="false" :transparent="false" class="mb-5" />
   <MemberHeader labelString="我的預定" />
   <div class="container">
      <div class="row">
         <ul class="list-unstyled d-flex border-bottom">
            <li class="me-4">
               <RouterLink :to="{ name: 'member-orders-inprogress' }">
                  <h5>尚未結束</h5>
               </RouterLink>
            </li>
            <li class="me-4">
               <RouterLink :to="{ name: 'member-orders-finish' }">
                  <h5>已結束</h5>
               </RouterLink>
            </li>
            <li class="me-4">
               <RouterLink :to="{ name: 'member-orders-cancel' }">
                  <h5>已取消</h5>
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