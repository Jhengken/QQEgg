<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration"></span>
      <el-date-picker v-model="selectedDate" type="date" placeholder="請選擇租借日期" />
    </div>

  </div>
  <div class="block">
    <el-select v-model="startTime" placeholder="開始時間">
      <el-option v-for="time in selectableTimes" :key="time" :label="time" :value="time" />
    </el-select>
    <el-select v-model="endTime" placeholder="結束時間">
      <el-option v-for="time in selectableEndTimes" :key="time" :label="time" :value="time" />
    </el-select>
  </div>

</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'

const selectedDate = ref('')
const startTime = ref('')
const endTime = ref('')
const timelineRef = ref(null)
const options = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
]

const selectableTimes = computed(() => {
  const now = new Date()
  const selected = new Date(selectedDate.value)
  const times = []
  // Check if date is valid
  if (!isNaN(selected.getTime())) {
    // Add all options that are after the current time or after 12:00 on the selected date
    const baseTime = selected > now ? selected : new Date(selected.getFullYear(), selected.getMonth(), selected.getDate(), 12)
    for (const option of options) {
      const [hours, minutes] = option.split(':')
      const optionTime = new Date(baseTime.getFullYear(), baseTime.getMonth(), baseTime.getDate(), parseInt(hours), parseInt(minutes))
      if (optionTime >= now) {
        times.push(option)
      }
    }
  }
  return times
})

const selectableEndTimes = computed(() => {
  const selected = new Date(selectedDate.value)
  const startTimeValue = startTime.value
  const times = []
  if (startTimeValue !== '') {
    const [startHours, startMinutes] = startTimeValue.split(':')
    const startTimeValueInMs = new Date(selected.getFullYear(), selected.getMonth(), selected.getDate(), parseInt(startHours), parseInt(startMinutes)).getTime()
    for (const option of options) {
      const [hours, minutes] = option.split(':')
      const optionTimeInMs = new Date(selected.getFullYear(), selected.getMonth(), selected.getDate(), parseInt(hours), parseInt(minutes)).getTime()
      if (optionTimeInMs >= startTimeValueInMs + 30 * 60 * 1000) {
        times.push(option)
      }
    }
  }
  return times
})
watch(
  selectedDate,
  (newValue, oldValue) => {
    // Reset startTime and endTime to empty string
    startTime.value = ''
    endTime.value = ''
  }
)

</script>