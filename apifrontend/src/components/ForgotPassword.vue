<script setup>
import { useAuthStore } from "../stores/Auth";
import { ref } from "vue";
const authStore = useAuthStore();
const email = ref("");
</script>
<template>
  <main>
    <div v-if="authStore.status" class="max-x-sm mx-auto">
      <span>{{ authStore.status }}</span>
    </div>
    <form
      class="max-w-sm mx-auto"
      @submit.prevent="authStore.forgotPassword(email)"
    >
      <label
        for="email"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Your email</label
      >
      <input
        type="email"
        id="email"
        v-model="email"
        aria-describedby="helper-text-explanation"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="name@flowbite.com"
      />
      <div v-if="authStore.error.email">
        <span class="text-red-500">{{ authStore.error.email[0] }}</span>
      </div>
      <div class="">
        <button
          type="submit"
          class="mx-auto text-white mt-3 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
        >
          Reset
        </button>
      </div>

      <p
        id="helper-text-explanation"
        class="mt-2 text-sm text-gray-500 dark:text-gray-400"
      >
        We’ll never share your details. Read our
        <a
          href="#"
          class="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >Privacy Policy</a
        >.
      </p>
    </form>
  </main>
</template>
<style></style>
