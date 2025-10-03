/**
 * Classe de modélisation des performances
 */
class Performance {
  constructor(data) {
    this.userId = data.userId;
    this.performances = data.data.map((item) => ({
      value: item.value,
      kind: this.translateKind(data.kind[item.kind]),
    }));
  }

  /**
   * Traduit les types de performance
   * @param {string} kind
   * @returns {string}
   */
  translateKind(kind) {
    const translations = {
      cardio: "Cardio",
      energy: "Energie",
      endurance: "Endurance",
      strength: "Force",
      speed: "Vitesse",
      intensity: "Intensité",
    };
    return translations[kind] || kind;
  }
}

export default Performance;
