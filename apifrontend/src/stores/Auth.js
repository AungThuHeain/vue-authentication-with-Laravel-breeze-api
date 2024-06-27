import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    is_error: [],
    is_status: "",
  }),
  getters: {
    user: (state) => state.authUser,
    status: (state) => state.is_status,
    error: (state) => state.is_error,
  },
  actions: {
    async getToken() {
      await axios.get("/sanctum/csrf-cookie");
    },

    async getUser() {
      this.getToken();
      const data = await axios.get("api/user");
      this.authUser = data.data;
    },

    async register(data) {
      this.getToken();
      this.is_error = [];
      try {
        await axios.post("api/register", {
          name: data.name,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        });

        this.router.push("/");
      } catch (error) {
        if (error.response.status == 422) {
          this.is_error = error.response.data.errors;
        }
      }
    },

    async login(data) {
      this.getToken();
      this.is_error = [];
      try {
        await axios.post("api/login", {
          email: data.email,
          password: data.password,
        });
        this.router.push("/");
      } catch (error) {
        if (error.response.status == 422) {
          this.is_error = error.response.data.errors;
        }
      }
    },

    async logout() {
      await axios.post("api/logout");
      this.authUser = null;
    },

    async forgotPassword(email) {
      this.getToken();

      try {
        this.is_error = [];
        const response = await axios.post("api/forgot-password", {
          email: email,
        });
        this.is_status = response.data.status;
      } catch (error) {
        this.is_error = error.response.data.errors;
      }
    },

    async passwordReset(data) {
      console.log(data);
      this.getToken();
      this.is_error = [];
      try {
        const response = await axios.post("api/reset-password", data);
        this.router.push("/login");
        this.is_status = response.data.status;
      } catch (error) {
        this.is_error = error.response.data.errors;
      }
    },
  },
});
