import { useState, useEffect } from "react";
import { userService } from "../service/user.service";

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
    if (!userId) {
      setLoading(false);
      return;
    }

    const fetchAllData = async () => {
      setLoading(true);
      setError(null);

      try {
        const results = await Promise.allSettled([
          userService.getUser(userId),
          userService.getUserActivity(userId),
          userService.getUserAverageSessions(userId),
          userService.getUserPerformance(userId),
        ]);

        results.forEach((result, index) => {
          if (result.status === "fulfilled") {
            switch (index) {
              case 0:
                setUser(result.value);
                break;
              case 1:
                setActivity(result.value);
                break;
              case 2:
                setAverageSessions(result.value);
                break;
              case 3:
                setPerformance(result.value);
                break;
            }
          }
        });
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
        const userData = await userService.getUser(userId);
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
        const activityData = await userService.getUserActivity(userId);
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
        const sessionsData = await userService.getUserAverageSessions(userId);
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
        const performanceData = await userService.getUserPerformance(userId);
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
