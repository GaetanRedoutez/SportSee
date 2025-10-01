import axios from "axios";

const BASE_API_URL = import.meta.env.BASE_API_URL;

const USER_ENDPOINTS = {
  BASE: "",
  ACTIVITY: "activity",
  AVERAGE_SESSIONS: "average-sessions",
  PERFORMANCE: "performance",
};

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
 * @param {string|number} id
 * @param {'activity'|'average-sessions'|'performance'|''} endpoint
 * @returns {Promise<any>} - Données de la réponse
 */
const fetchUserData = async (id, endpoint = USER_ENDPOINTS.BASE) => {
  if (!id) {
    throw new Error("L'ID utilisateur est requis");
  }

  const url = endpoint
    ? `${BASE_API_URL}/user/${id}/${endpoint}`
    : `${BASE_API_URL}/user/${id}`;

  const response = await axios.get(url);
  return response.data;
};

export const getUserById = (id) => fetchUserData(id);

export const getUserActivityById = (id) =>
  fetchUserData(id, USER_ENDPOINTS.ACTIVITY);

export const getUserAverageSessionById = (id) =>
  fetchUserData(id, USER_ENDPOINTS.AVERAGE_SESSIONS);

export const getUserPerformanceById = (id) =>
  fetchUserData(id, USER_ENDPOINTS.PERFORMANCE);
