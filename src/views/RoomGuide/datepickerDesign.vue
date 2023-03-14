<script setup>
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
import { add } from 'date-fns'
const pickedDate = ref(new Date())
const disabledDate = ref(add(new Date(), { days: 1  }))
</script>

<template>
  <Datepicker
    v-model="pickedDate"
    :disabledDates="{ dates: [disabledDate] }"
  />
</template>