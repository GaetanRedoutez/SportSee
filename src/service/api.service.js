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

class ApiService {
  /**
   * Récupère les informations principales d'un utilisateur
   * @param {number} userId
   * @returns {Promise<Object>}
   */
  static async getUser(userId) {
    const response = await apiClient.get(`/user/${userId}`);
    return response.data.data;
  }

  /**
   * Récupère l'activité quotidienne d'un utilisateur
   * @param {number} userId
   * @returns {Promise<Object>}
   */
  static async getUserActivity(userId) {
    const response = await apiClient.get(`/user/${userId}/activity`);
    return response.data.data;
  }

  /**
   * Récupère les sessions moyennes d'un utilisateur
   * @param {number} userId
   * @returns {Promise<Object>}
   */
  static async getUserAverageSessions(userId) {
    const response = await apiClient.get(`/user/${userId}/average-sessions`);
    return response.data.data;
  }

  /**
   * Récupère les performances d'un utilisateur
   * @param {number} userId
   * @returns {Promise<Object>}
   */
  static async getUserPerformance(userId) {
    const response = await apiClient.get(`/user/${userId}/performance`);
    return response.data.data;
  }
}

export default ApiService;
