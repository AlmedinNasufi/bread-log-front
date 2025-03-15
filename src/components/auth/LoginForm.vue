<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useToaster } from '@/composables/useToaster'
import { useRouter } from 'vue-router'

const { notify, positions, types } = useToaster()
const router = useRouter()
const userData = ref({
  email: '',
  password: '',
})

const handleLogin = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/auth/login', userData.value)
    if (response.status === 200) {
      const accessToken = response?.data?.access_token

      if (accessToken) {
        localStorage.setItem('bl_access_token', accessToken)
        router.push('/dashboard')
      }
    } else {
      notify('Login Failed', types.ERROR, positions.TOP_RIGHT)
    }
  } catch (error) {
    console.log('error', error)
    notify('Your email or password is incorrect', types.ERROR, 9000, positions.TOP_RIGHT)
  }
}
</script>
<template>
  <div class="justify-center items-center w-full card lg:flex max-w-md">
    <div class="w-full card-body">
      <a href="../" class="py-4 block"
        ><img src="../assets/images/logos/logo-light.svg" alt="" class="mx-auto"
      /></a>
      <p class="mb-4 text-gray-400 text-sm text-center">Welcome To BreadLog</p>
      <!-- form -->
      <form @submit.prevent="handleLogin">
        <!-- Email -->
        <div class="mb-4">
          <label for="forEmail" class="block text-sm mb-2 text-gray-400">Email</label>
          <input
            type="email"
            id="forEmail"
            v-model="userData.email"
            class="py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-blue-600 focus:ring-0"
            aria-describedby="hs-input-helper-text"
          />
        </div>
        <!-- password -->
        <div class="mb-6">
          <label for="forPassword" class="block text-sm mb-2 text-gray-400">Password</label>
          <input
            type="password"
            id="forPassword"
            v-model="userData.password"
            class="py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-blue-600 focus:ring-0"
            aria-describedby="hs-input-helper-text"
          />
        </div>
        <div class="flex justify-end">
          <a href="../" class="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >Forgot Password ?</a
          >
        </div>
        <!-- button -->
        <div class="grid my-6">
          <button
            type="submit"
            class="btn py-[10px] text-base text-white font-medium hover:bg-blue-700"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
