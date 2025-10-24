import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

/**
 * Axios instance configured with a base URL and a timeout.
 * This client is used to make HTTP requests to the API.
 *
 * @constant
 * @type {AxiosInstance}
 * @property {string} baseURL - The base URL for the API requests.
 * @property {number} timeout - The timeout in milliseconds for the requests.
 */
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

/**
 * A service for interacting with the API to fetch user-related data.
 */
export const apiService = {
  /**
   * Fetches user information by user ID.
   * @param {number|string} userId - The ID of the user.
   * @returns {Promise<Object>} A promise that resolves to the user data.
   */
  async getUser(userId) {
    const { data } = await apiClient.get(`/user/${userId}`);
    return data.data;
  },

  /**
   * Fetches user activity data by user ID.
   * @param {number|string} userId - The ID of the user.
   * @returns {Promise<Object>} A promise that resolves to the user activity data.
   */
  async getUserActivity(userId) {
    const { data } = await apiClient.get(`/user/${userId}/activity`);
    return data.data;
  },

  /**
   * Fetches user average session data by user ID.
   * @param {number|string} userId - The ID of the user.
   * @returns {Promise<Object>} A promise that resolves to the user average session data.
   */
  async getUserAverageSessions(userId) {
    const { data } = await apiClient.get(`/user/${userId}/average-sessions`);
    return data.data;
  },

  /**
   * Fetches user performance data by user ID.
   * @param {number|string} userId - The ID of the user.
   * @returns {Promise<Object>} A promise that resolves to the user performance data.
   */
  async getUserPerformance(userId) {
    const { data } = await apiClient.get(`/user/${userId}/performance`);
    return data.data;
  },
};
