/**
 * Classe de modélisation des sessions moyennes
 */
class AverageSessions {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map((session) => ({
      day: session.day,
      sessionLength: session.sessionLength,
    }));
  }
}

export default AverageSessions;
