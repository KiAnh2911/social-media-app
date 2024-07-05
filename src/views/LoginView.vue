<script setup>
import validateEmail from '@/utils/validate-email'
import { reactive } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
// import authService from '@/services/auth-services'

const obj = reactive({
  email: '',
  password: '',
  validation: {
    email: null,
    password: null
  }
})

const router = useRouter()

const handleSignIn = () => {
  let isValid = true
  if (!obj.email) {
    obj.validation.email = 'Email is required.'
    isValid = false
  } else if (!validateEmail(obj.email)) {
    obj.validation.email = 'Email is not valid.'
    isValid = false
  } else {
    obj.validation.email = null
  }

  if (!obj.password) {
    obj.validation.password = 'Password is required.'
    isValid = false
  } else if (obj.password.length < 6) {
    obj.validation.password = 'You need to enter 6 characters or more'
    isValid = false
  } else {
    obj.validation.password = null
  }

  if (isValid) {
    try {
      // authService.login(obj.email, obj.password)
      console.log('data', obj.email, obj.password)
    } catch (error) {
      console.log('error', error)
    }
    router.push({ name: 'Home' })
  }
}
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="handleSignIn">
            <div>
              <label
                htmlFor="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                v-model="obj.email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
              />
              <span v-if="obj.validation.email" class="text-red-500">{{
                obj.validation.email
              }}</span>
            </div>
            <div>
              <label
                htmlFor="current-password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="current-password"
                autocomplete
                v-model="obj.password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span v-if="obj.validation.password" class="text-red-500">{{
                obj.validation.password
              }}</span>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Login
            </button>
            <p class="text-sm font-light text-center text-gray-500 dark:text-gray-400">
              Don’t have an account yet?
              <RouterLink
                :to="{ name: 'Register' }"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </RouterLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
