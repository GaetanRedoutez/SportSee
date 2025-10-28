import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "../data/mockData";

const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockService = {
  async getUser(userId) {
    await delay();
    const user = USER_MAIN_DATA.find((u) => u.id === userId);
    if (!user) throw new Error(`Utilisateur ${userId} introuvable`);
    return user;
  },

  async getUserActivity(userId) {
    await delay();
    const activity = USER_ACTIVITY.find((a) => a.userId === userId);
    if (!activity)
      throw new Error(`Activité pour l'utilisateur ${userId} introuvable`);
    return activity;
  },

  async getUserAverageSessions(userId) {
    await delay();
    const sessions = USER_AVERAGE_SESSIONS.find((s) => s.userId === userId);
    if (!sessions)
      throw new Error(`Sessions pour l'utilisateur ${userId} introuvables`);
    return sessions;
  },

  async getUserPerformance(userId) {
    await delay();
    const performance = USER_PERFORMANCE.find((p) => p.userId === userId);
    if (!performance)
      throw new Error(`Performance pour l'utilisateur ${userId} introuvable`);
    return performance;
  },
};
