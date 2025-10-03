import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "../data/mockData";

class MockService {
  /**
   * Simule un délai réseau
   */
  static async delay(ms = 300) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Récupère les informations principales d'un utilisateur
   * @param {number} userId
   * @returns {Promise<Object>}
   */
  static async getUser(userId) {
    await this.delay();
    const user = USER_MAIN_DATA.find((u) => u.id === userId);
    if (!user) {
      throw new Error(`Utilisateur ${userId} introuvable`);
    }
    return user;
  }

  /**
   * Récupère l'activité quotidienne d'un utilisateur
   * @param {number} userId
   * @returns {Promise<Object>}
   */
  static async getUserActivity(userId) {
    await this.delay();
    const activity = USER_ACTIVITY.find((a) => a.userId === userId);
    if (!activity) {
      throw new Error(`Activité pour l'utilisateur ${userId} introuvable`);
    }
    return activity;
  }

  /**
   * Récupère les sessions moyennes d'un utilisateur
   * @param {number} userId
   * @returns {Promise<Object>}
   */
  static async getUserAverageSessions(userId) {
    await this.delay();
    const sessions = USER_AVERAGE_SESSIONS.find((s) => s.userId === userId);
    if (!sessions) {
      throw new Error(`Sessions pour l'utilisateur ${userId} introuvables`);
    }
    return sessions;
  }

  /**
   * Récupère les performances d'un utilisateur
   * @param {number} userId
   * @returns {Promise<Object>}
   */
  static async getUserPerformance(userId) {
    await this.delay();
    const performance = USER_PERFORMANCE.find((p) => p.userId === userId);
    if (!performance) {
      throw new Error(`Performance pour l'utilisateur ${userId} introuvable`);
    }
    return performance;
  }
}

export default MockService;
