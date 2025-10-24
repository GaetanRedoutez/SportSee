/**
 * Transforms raw user data into a structured user object.
 *
 * @param {Object} data - The raw user data to transform.
 * @param {number} data.id - The unique identifier of the user.
 * @param {Object} data.userInfos - The user's personal information.
 * @param {string} data.userInfos.firstName - The user's first name.
 * @param {string} data.userInfos.lastName - The user's last name.
 * @param {number} data.userInfos.age - The user's age.
 * @param {number} [data.todayScore] - The user's score for the day (optional).
 * @param {number} [data.score] - The user's overall score (optional).
 * @param {Object} data.keyData - The user's key nutritional data.
 * @param {number} data.keyData.calorieCount - The user's calorie count.
 * @param {number} data.keyData.proteinCount - The user's protein count.
 * @param {number} data.keyData.carbohydrateCount - The user's carbohydrate count.
 * @param {number} data.keyData.lipidCount - The user's lipid count.
 * @returns {Object} A structured user object.
 * @returns {number} return.id - The unique identifier of the user.
 * @returns {string} return.firstName - The user's first name.
 * @returns {string} return.lastName - The user's last name.
 * @returns {number} return.age - The user's age.
 * @returns {number} return.score - The user's score (defaults to 0 if not provided).
 * @returns {number} return.calorieCount - The user's calorie count.
 * @returns {number} return.proteinCount - The user's protein count.
 * @returns {number} return.carbohydrateCount - The user's carbohydrate count.
 * @returns {number} return.lipidCount - The user's lipid count.
 */
export const transformUser = (data) => ({
  id: data.id,
  firstName: data.userInfos.firstName,
  lastName: data.userInfos.lastName,
  age: data.userInfos.age,
  score: data.todayScore || data.score || 0,
  calorieCount: data.keyData.calorieCount,
  proteinCount: data.keyData.proteinCount,
  carbohydrateCount: data.keyData.carbohydrateCount,
  lipidCount: data.keyData.lipidCount,
});

/**
 * Transforms activity data into a specific format.
 *
 * @param {Object} data - The activity data to transform.
 * @param {Array} data.sessions - An array of session objects.
 * @param {string} data.sessions[].day - The date of the session.
 * @param {number} data.sessions[].kilogram - The weight in kilograms for the session.
 * @param {number} data.sessions[].calories - The calories burned during the session.
 * @returns {Array} An array of transformed session objects, each containing:
 *   - `date` (string): The date of the session.
 *   - `kilogram` (number): The weight in kilograms for the session.
 *   - `calories` (number): The calories burned during the session.
 */
export const transformActivity = (data) => [
  ...data.sessions.map((s) => ({
    date: s.day,
    kilogram: s.kilogram,
    calories: s.calories,
  })),
];

/**
 * Transforms the average session data into a specific format.
 *
 * @param {Object} data - The input data object containing session information.
 * @param {Array} data.sessions - An array of session objects.
 * @param {number|string} data.sessions[].day - The day of the session.
 * @param {number} data.sessions[].sessionLength - The length of the session in minutes.
 * @returns {Array} An array of transformed session objects, each containing:
 *   - `day` (number|string): The day of the session.
 *   - `sessionLength` (number): The length of the session in minutes.
 */
export const transformAverageSessions = (data) => [
  ...data.sessions.map((s) => ({
    day: s.day,
    sessionLength: s.sessionLength,
  })),
];

const kindLabels = {
  cardio: "Cardio",
  energy: "Énergie",
  endurance: "Endurance",
  strength: "Force",
  speed: "Vitesse",
  intensity: "Intensité",
};

const kindOrder = [
  "Intensité",
  "Vitesse",
  "Force",
  "Endurance",
  "Énergie",
  "Cardio",
];

/**
 * Transforms performance data into a sorted array of performance objects.
 *
 * @param {Object} data - The raw performance data.
 * @param {Array} data.data - An array of performance items, each containing a value and a kind.
 * @param {Object} data.kind - An object mapping kind IDs to kind labels.
 * @returns {Array} - A sorted array of transformed performance objects, where each object contains:
 *   - `value` {number}: The performance value.
 *   - `kind` {string}: The performance kind label.
 */
export const transformPerformance = (data) => {
  const performances = data.data.map((item) => ({
    value: item.value,
    kind: kindLabels[data.kind[item.kind]] || data.kind[item.kind],
  }));

  performances.sort(
    (a, b) => kindOrder.indexOf(a.kind) - kindOrder.indexOf(b.kind)
  );

  return [...performances];
};
