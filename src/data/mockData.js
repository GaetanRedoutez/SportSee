export const USER_MAIN_DATA = [
  {
    id: 21,
    userInfos: {
      firstName: "Alex",
      lastName: "Dupont",
      age: 28,
    },
    todayScore: 0.45,
    keyData: {
      calorieCount: 2100,
      proteinCount: 130,
      carbohydrateCount: 310,
      lipidCount: 70,
    },
  },
  {
    id: 42,
    userInfos: {
      firstName: "Laura",
      lastName: "Martin",
      age: 39,
    },
    score: 0.72,
    keyData: {
      calorieCount: 1800,
      proteinCount: 100,
      carbohydrateCount: 220,
      lipidCount: 85,
    },
  },
];

export const USER_ACTIVITY = [
  {
    userId: 21,
    sessions: [
      { day: "2020-08-01", kilogram: 75, calories: 260 },
      { day: "2020-08-02", kilogram: 75, calories: 200 },
      { day: "2020-08-03", kilogram: 74, calories: 310 },
      { day: "2020-08-04", kilogram: 74, calories: 290 },
      { day: "2020-08-05", kilogram: 73, calories: 180 },
      { day: "2020-08-06", kilogram: 73, calories: 210 },
      { day: "2020-08-07", kilogram: 72, calories: 330 },
    ],
  },
  {
    userId: 42,
    sessions: [
      { day: "2020-08-01", kilogram: 62, calories: 190 },
      { day: "2020-08-02", kilogram: 62, calories: 250 },
      { day: "2020-08-03", kilogram: 61, calories: 270 },
      { day: "2020-08-04", kilogram: 61, calories: 310 },
      { day: "2020-08-05", kilogram: 60, calories: 200 },
      { day: "2020-08-06", kilogram: 60, calories: 240 },
      { day: "2020-08-07", kilogram: 59, calories: 350 },
    ],
  },
];

export const USER_AVERAGE_SESSIONS = [
  {
    userId: 21,
    sessions: [
      { day: 1, sessionLength: 20 },
      { day: 2, sessionLength: 35 },
      { day: 3, sessionLength: 50 },
      { day: 4, sessionLength: 40 },
      { day: 5, sessionLength: 25 },
      { day: 6, sessionLength: 60 },
      { day: 7, sessionLength: 55 },
    ],
  },
  {
    userId: 42,
    sessions: [
      { day: 1, sessionLength: 45 },
      { day: 2, sessionLength: 30 },
      { day: 3, sessionLength: 60 },
      { day: 4, sessionLength: 20 },
      { day: 5, sessionLength: 35 },
      { day: 6, sessionLength: 50 },
      { day: 7, sessionLength: 65 },
    ],
  },
];

export const USER_PERFORMANCE = [
  {
    userId: 21,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 90, kind: 1 },
      { value: 110, kind: 2 },
      { value: 160, kind: 3 },
      { value: 70, kind: 4 },
      { value: 190, kind: 5 },
      { value: 100, kind: 6 },
    ],
  },
  {
    userId: 42,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 180, kind: 1 },
      { value: 200, kind: 2 },
      { value: 95, kind: 3 },
      { value: 120, kind: 4 },
      { value: 210, kind: 5 },
      { value: 130, kind: 6 },
    ],
  },
];
