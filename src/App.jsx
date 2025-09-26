import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import { HomePage } from "./pages/home";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="content">
          <Sidebar />
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default App;
