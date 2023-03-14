<script setup></script>
<template>
  <div class="rotating-card-container grid">
    <div class="card card-rotate card-background card-background-mask-success shadow-success mt-md-0 mt-5">
      <slot />
    </div>
  </div>
</template>
<style>
.grid {
  width: 100%;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(2, 1fr);
}
</style>