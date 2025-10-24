import { useState, useEffect } from "react";
import { userService } from "../service/user.service";

/**
 * Custom hook to fetch and manage user data, including user details, activity,
 * average sessions, and performance metrics.
 *
 * @param {string} userId - The ID of the user whose data is to be fetched.
 * @returns {Object} An object containing the following properties:
 *   - {Object|null} user: The user details, or null if not yet loaded.
 *   - {Object|null} activity: The user's activity data, or null if not yet loaded.
 *   - {Object|null} averageSessions: The user's average session data, or null if not yet loaded.
 *   - {Object|null} performance: The user's performance data, or null if not yet loaded.
 *   - {boolean} loading: A flag indicating whether the data is currently being loaded.
 *   - {string|null} error: An error message if an error occurred, or null otherwise.
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
