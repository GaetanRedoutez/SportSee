import "./index.css";

export const HomePage = () => {
  return (
    <div className="home-content">
      <div className="home-text">
        <h2 className="home-title">
          Bonjour <span className="home-name">Thomas</span>
        </h2>
        <p className="home-subtitle">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
      <div className="home-charts">
        <div className="home-activity">
          <div className="home-barchart">activité quoti</div>
          <div className="home-subchart">
            <div>petit graph</div>
            <div>petit graph</div>
            <div>petit graph</div>
          </div>
        </div>
        <div className="home-card">
          <div>data card</div>
          <div>data card</div>
          <div>data card</div>
          <div>data card</div>
        </div>
      </div>
    </div>
  );
};
