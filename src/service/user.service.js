import { apiService } from "./api.service";
import { mockService } from "./mock.service";
import {
  transformUser,
  transformActivity,
  transformAverageSessions,
  transformPerformance,
} from "./transformers";

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";
const dataSource = USE_MOCK ? mockService : apiService;

export const userService = {
  async getUser(userId) {
    try {
      const data = await dataSource.getUser(userId);
      return transformUser(data);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
      throw error;
    }
  },

  async getUserActivity(userId) {
    try {
      const data = await dataSource.getUserActivity(userId);
      return transformActivity(data);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'activité:", error);
      throw error;
    }
  },

  async getUserAverageSessions(userId) {
    try {
      const data = await dataSource.getUserAverageSessions(userId);
      return transformAverageSessions(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des sessions:", error);
      throw error;
    }
  },

  async getUserPerformance(userId) {
    try {
      const data = await dataSource.getUserPerformance(userId);
      return transformPerformance(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des performances:", error);
      throw error;
    }
  },
};
