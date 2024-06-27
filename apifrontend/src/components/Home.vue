<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "../stores/Auth";
const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getUser();
});
</script>
<template>
  <main>
    <div v-if="authStore.user" class="mx-auto text-center mt-10 font-bold">
      <h1>Name : {{ authStore.user?.name }}</h1>
      <h1>Email : {{ authStore.user?.email }}</h1>
    </div>
    <div v-else>
      <div class="mx-auto text-center mt-10">
        <router-link
          :to="{ name: 'login' }"
          class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Ples, login first
        </router-link>
      </div>
    </div>
  </main>
</template>
<style></style>
