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

export const transformActivity = (data) => ({
  userId: data.userId,
  sessions: data.sessions.map((s) => ({
    date: s.day,
    kilogram: s.kilogram,
    calories: s.calories,
  })),
});

export const transformAverageSessions = (data) => ({
  userId: data.userId,
  sessions: data.sessions.map((s) => ({
    day: s.day,
    sessionLength: s.sessionLength,
  })),
});

const kindLabels = {
  cardio: "Cardio",
  energy: "Énergie",
  endurance: "Endurance",
  strength: "Force",
  speed: "Vitesse",
  intensity: "Intensité",
};

export const transformPerformance = (data) => ({
  userId: data.userId,
  performances: data.data.map((item) => ({
    value: item.value,
    kind: kindLabels[data.kind[item.kind]] || data.kind[item.kind],
  })),
});
