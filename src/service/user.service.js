import ApiService from "./api.service";
import MockService from "./mock.service";
import User from "../models/User.model";
import Activity from "../models/Activity.model";
import AverageSessions from "../models/AverageSessions.model";
import Performance from "../models/Performance.model";

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true" || false;

const dataSource = USE_MOCK ? MockService : ApiService;

class DataService {
  /**
   * Récupère les données utilisateur formatées
   * @param {number} userId
   * @returns {Promise<User>}
   */
  static async getUser(userId) {
    try {
      const data = await dataSource.getUser(userId);
      return new User(data);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
      throw error;
    }
  }

  /**
   * Récupère l'activité formatée
   * @param {number} userId
   * @returns {Promise<Activity>}
   */
  static async getUserActivity(userId) {
    try {
      const data = await dataSource.getUserActivity(userId);
      return new Activity(data);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'activité:", error);
      throw error;
    }
  }

  /**
   * Récupère les sessions moyennes formatées
   * @param {number} userId
   * @returns {Promise<AverageSessions>}
   */
  static async getUserAverageSessions(userId) {
    try {
      const data = await dataSource.getUserAverageSessions(userId);
      return new AverageSessions(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des sessions:", error);
      throw error;
    }
  }

  /**
   * Récupère les performances formatées
   * @param {number} userId
   * @returns {Promise<Performance>}
   */
  static async getUserPerformance(userId) {
    try {
      const data = await dataSource.getUserPerformance(userId);
      return new Performance(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des performances:", error);
      throw error;
    }
  }
}

export default DataService;
