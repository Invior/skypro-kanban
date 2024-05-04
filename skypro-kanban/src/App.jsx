import "./App.css";
import Header from "./components/Header/Header";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import MainContainer from "./components/Main/Main";
import PopUser from "./components/popups/PopExit/PopExit";
import { useState, useEffect } from "react";
import { cardList } from "./data";

function App() {
  const [cards, setCards] = useState(cardList);
  const onCardAdd = () => {
    const newCard = {
      id: cards.length + 1,
      theme: "Новая задача",
      title: "Новая задача",
      date: "30.10.23",
      status: "Без статуса",
      style: "card__theme _orange",
    };
    setCards([...cards, newCard]);
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="pop-exit" id="popExit">
          <PopUser />
        </div>

        <div className="pop-new-card" id="popNewCard">
          <PopNewCard />
        </div>

        <div className="pop-browse" id="popBrowse">
          <PopBrowse />
        </div>

        <header className="header">
          <Header onCardAdd={onCardAdd} />
        </header>
        {isLoading ? (
          <p className="loading"> Загрузка...</p>
        ) : (
          <main className="main">
            <MainContainer cards={cards} />
          </main>
        )}
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;