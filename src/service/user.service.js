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

/**
 * Service for handling user-related data operations.
 */
export const userService = {
  /**
   * Retrieves user data by user ID.
   * @param {string} userId - The ID of the user to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the transformed user data.
   * @throws Will throw an error if the user data cannot be retrieved.
   */
  async getUser(userId) {
    try {
      const data = await dataSource.getUser(userId);
      return transformUser(data);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
      throw error;
    }
  },

  /**
   * Retrieves user activity data by user ID.
   * @param {string} userId - The ID of the user whose activity data is to be retrieved.
   * @returns {Promise<Object>} A promise that resolves to the transformed activity data.
   * @throws Will throw an error if the activity data cannot be retrieved.
   */
  async getUserActivity(userId) {
    try {
      const data = await dataSource.getUserActivity(userId);
      return transformActivity(data);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'activité:", error);
      throw error;
    }
  },

  /**
   * Retrieves user average session data by user ID.
   * @param {string} userId - The ID of the user whose average session data is to be retrieved.
   * @returns {Promise<Object>} A promise that resolves to the transformed average session data.
   * @throws Will throw an error if the average session data cannot be retrieved.
   */
  async getUserAverageSessions(userId) {
    try {
      const data = await dataSource.getUserAverageSessions(userId);
      return transformAverageSessions(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des sessions:", error);
      throw error;
    }
  },

  /**
   * Retrieves user performance data by user ID.
   * @param {string} userId - The ID of the user whose performance data is to be retrieved.
   * @returns {Promise<Object>} A promise that resolves to the transformed performance data.
   * @throws Will throw an error if the performance data cannot be retrieved.
   */
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
