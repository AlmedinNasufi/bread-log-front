<script setup>
import { ref } from 'vue'

const accessToken = ref(localStorage.getItem('bl_access_token'))
</script>
<template>
  <div class="card">
    <div class="card-body">
      <h6 class="text-lg text-gray-500 font-semibold mb-6">Dashboard Page</h6>
      <p class="text-sm text-gray-400">This is a dashboard page</p>
      <p class="text-sm text-gray-400 break-all">
        {{ accessToken }}
      </p>
    </div>
  </div>
</template>
