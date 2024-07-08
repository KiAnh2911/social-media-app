<script setup>
import validateEmail from '@/utils/validate-email'
import { reactive } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import authService from '@/domain/auth-services'
import { message } from 'ant-design-vue'

const router = useRouter()

const obj = reactive({
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  gender: '',
  password: '',
  rewritepassword: '',
  validation: {
    username: null,
    email: null,
    firstName: null,
    lastName: null,
    gender: null,
    password: null,
    rewritepassword: null
  }
})

const handleSignUp = () => {
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

  if (!obj.username) {
    obj.validation.username = 'Username is required.'
    isValid = false
  } else if (obj.username.length < 6) {
    obj.validation.username = 'You need to enter 6 characters or more'
    isValid = false
  } else {
    obj.validation.username = null
  }

  if (!obj.firstName) {
    obj.validation.firstName = 'First name is required.'
    isValid = false
  } else {
    obj.validation.firstName = null
  }

  if (!obj.lastName) {
    obj.validation.lastName = 'Last name is required.'
    isValid = false
  } else {
    obj.validation.lastName = null
  }

  if (!obj.gender) {
    obj.validation.gender = 'Gender is required.'
    isValid = false
  } else {
    obj.validation.gender = null
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

  if (!obj.rewritepassword) {
    obj.validation.rewritepassword = 'Rewrite password is required.'
    isValid = false
  } else if (obj.password !== obj.rewritepassword) {
    obj.validation.password = 'Password and rewrite password do not match'
    obj.validation.rewritepassword = 'Password and rewrite password do not match'
    isValid = false
  } else {
    obj.validation.rewritepassword = null
  }

  if (isValid) {
    let data = {
      username: obj.username,
      email: obj.email,
      firstName: obj.firstName,
      lastName: obj.lastName,
      gender: obj.gender,
      password: obj.password
    }
    // call api
    authService
      .register(data)
      .then((res) => res.data)
      .then(() => {
        message.info('You have successfully registered')
        router.push({ name: 'Login' })
      })
      .catch((err) => {
        console.log(err)
        message.error(err.response.data)
      })
  }
}
</script>

<template>
  <section className="bg-gray-50 dark:bg-gray-900">
    <div
      className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-[550px] xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Sign up
          </h1>
          <form className="space-y-4 md:space-y-6" @submit.prevent="handleSignUp">
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  v-model="obj.email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
                <span v-if="obj.validation.email" class="text-red-500">{{
                  obj.validation.email
                }}</span>
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User Name
                </label>
                <input
                  type="text"
                  v-model="obj.username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="hoangki2911"
                />
                <span v-if="obj.validation.username" class="text-red-500">{{
                  obj.validation.username
                }}</span>
              </div>
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  v-model="obj.firstName"
                  id="firstName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="hoangki2911"
                />
                <span v-if="obj.validation.firstName" class="text-red-500">{{
                  obj.validation.firstName
                }}</span>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  v-model="obj.lastName"
                  id="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="hoangki2911"
                />
                <span v-if="obj.validation.lastName" class="text-red-500">{{
                  obj.validation.lastName
                }}</span>
              </div>
              <div>
                <label
                  htmlFor="new-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  v-model="obj.password"
                  id="new-password"
                  autocomplete
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <span v-if="obj.validation.password" class="text-red-500">{{
                  obj.validation.password
                }}</span>
              </div>
              <div>
                <label
                  htmlFor="rPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Rewrite Password
                </label>
                <input
                  type="password"
                  v-model="obj.rewritepassword"
                  id="rPassword"
                  placeholder="••••••••"
                  autocomplete
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <span v-if="obj.validation.rewritepassword" class="text-red-500">{{
                  obj.validation.rewritepassword
                }}</span>
              </div>
            </div>

            <div class="flex items-center gap-5">
              <label for="gender">Gender</label>
              <select id="gender" v-model="obj.gender" class="flex-1 p-2">
                <option value="" disabled>Chọn giới tính</option>
                <option value="Male">Nam</option>
                <option value="Female">Nữ</option>
              </select>
            </div>
            <span v-if="obj.validation.gender" class="text-red-500">{{
              obj.validation.gender
            }}</span>

            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign up
            </button>
            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
              You have an account yet?
              <RouterLink
                :to="{ name: 'Login' }"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign in
              </RouterLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
