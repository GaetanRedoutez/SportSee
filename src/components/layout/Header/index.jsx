import "./index.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/icons/logo.svg" alt="Logo" />
        <h1 className="header-title">SportSee</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/" className="link">
              Accueil
            </a>
          </li>
          <li>
            <a href="/" className="link">
              Profil
            </a>
          </li>
          <li>
            <a href="/" className="link">
              Réglage
            </a>
          </li>
          <li>
            <a href="/" className="link">
              Communauté
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
