import { useState, useEffect } from "react";
import DataService from "../service/user.service";

/**
 * Hook personnalisé pour récupérer toutes les données d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Object} - { user, activity, averageSessions, performance, loading, error }
 */
export const useUserData = (userId) => {
  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const [userData, activityData, sessionsData, performanceData] =
          await Promise.all([
            DataService.getUser(userId),
            DataService.getUserActivity(userId),
            DataService.getUserAverageSessions(userId),
            DataService.getUserPerformance(userId),
          ]);

        setUser(userData);
        setActivity(activityData);
        setAverageSessions(sessionsData);
        setPerformance(performanceData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [userId]);

  return { user, activity, averageSessions, performance, loading, error };
};

/**
 * Hook pour récupérer uniquement les données utilisateur principales
 * @param {number} userId
 * @returns {Object}
 */
export const useUser = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const userData = await DataService.getUser(userId);
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return { user, loading, error };
};

/**
 * Hook pour récupérer uniquement l'activité
 * @param {number} userId
 * @returns {Object}
 */
export const useUserActivity = (userId) => {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivity = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const activityData = await DataService.getUserActivity(userId);
        setActivity(activityData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, [userId]);

  return { activity, loading, error };
};

/**
 * Hook pour récupérer uniquement les sessions
 * @param {number} userId
 * @returns {Object}
 */
export const useUserSessions = (userId) => {
  const [averageSessions, setAverageSessions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSessions = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const sessionsData = await DataService.getUserAverageSessions(userId);
        setAverageSessions(sessionsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, [userId]);

  return { averageSessions, loading, error };
};

/**
 * Hook pour récupérer uniquement les performances
 * @param {number} userId
 * @returns {Object}
 */
export const useUserPerformance = (userId) => {
  const [performance, setPerformance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerformance = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const performanceData = await DataService.getUserPerformance(userId);
        setPerformance(performanceData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPerformance();
  }, [userId]);

  return { performance, loading, error };
};
