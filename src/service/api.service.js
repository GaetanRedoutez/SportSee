import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

const apiClient = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      const message = data?.message || "Une erreur est survenue";
      throw new Error(`[${status}] ${message}`);
    }
    throw new Error("Erreur réseau - vérifiez votre connexion");
  }
);

export const apiService = {
  async getUser(userId) {
    const { data } = await apiClient.get(`/user/${userId}`);
    return data.data;
  },

  async getUserActivity(userId) {
    const { data } = await apiClient.get(`/user/${userId}/activity`);
    return data.data;
  },

  async getUserAverageSessions(userId) {
    const { data } = await apiClient.get(`/user/${userId}/average-sessions`);
    return data.data;
  },

  async getUserPerformance(userId) {
    const { data } = await apiClient.get(`/user/${userId}/performance`);
    return data.data;
  },
};
