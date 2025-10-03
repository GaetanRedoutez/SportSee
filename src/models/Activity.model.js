/**
 * Classe de modélisation des données d'activité
 */
class Activity {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map((session) => ({
      date: session.day,
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }
}

export default Activity;
