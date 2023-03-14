import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

//第一個參數就是 id 名稱，餵給 pinia 使用的
export const useMemberDataStore = defineStore('memberData', () => {
   const name = ref('');
   const phone = ref('');
   const email = ref('');
   const creditCard = reactive([]);

   const addCreditCard = (newCardData) => {
      creditCard.push(newCardData);
   }
   const removeCreditCard = (rmCardData) => {
      if (confirm('是否要刪除信用卡'))
         creditCard.splice(creditCard.indexOf(rmCardData), 1)
   }

   return { name, phone, email, creditCard, addCreditCard, removeCreditCard }
})