import { useState } from "react";
import { Barchart } from "../../components/home/Barchart";
import { Loader } from "../../components/common/Loader";
import { useUserData } from "../../hooks/useUserData";
import "./index.css";
import { Card } from "../../components/home/Card";

export const HomePage = () => {
  const [userId, setUserId] = useState(21);

  const { user, activity, averageSessions, performance, loading, error } =
    useUserData(userId);

  if (loading) return <Loader />;
  if (error)
    return (
      <div>
        Erreur : {error}
        <UserChoice setUserId={setUserId} />
      </div>
    );
  if (!user) return null;

  const cardsData = [
    {
      icon: "/icons/fire.svg",
      color: "rgba(255, 0, 0, 0.1)",
      value: user.calorieCount,
      unit: "kCal",
      label: "Calories",
    },
    {
      icon: "/icons/chicken.svg",
      color: "rgba(74, 184, 255, 0.1)",
      value: user.proteinCount,
      unit: "g",
      label: "Protéines",
    },
    {
      icon: "/icons/apple.svg",
      color: "rgba(249, 206, 35, 0.1)",
      value: user.carbohydrateCount,
      unit: "g",
      label: "Glucides",
    },
    {
      icon: "/icons/burger.svg",
      color: "rgba(253, 81, 129, 0.1)",
      value: user.lipidCount,
      unit: "g",
      label: "Lipides",
    },
  ];

  return (
    <div className="home-content">
      <div className="home-text">
        <h2 className="home-title">
          Bonjour <span className="home-name">{user.firstName}</span>
        </h2>
        <p className="home-subtitle">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>

      <div className="home-charts">
        <div className="home-activity">
          <div className="home-barchart">
            <Barchart data={activity?.sessions ?? []} />
          </div>
          <div className="home-subchart">
            <div>petit graph</div>
            <div>petit graph</div>
            <div>petit graph</div>
          </div>
        </div>
        <div className="home-cards">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};
