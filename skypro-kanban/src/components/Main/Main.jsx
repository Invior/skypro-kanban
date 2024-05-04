import Column from "../Column/Column";
const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Main ({ cards }) {
  return (
    <div className="container">
      <div className="main__block">
        <div className="main__content">
          {statusList.map((status) => {
            return (
              <Column
                key={status}
                title={status}
                allCards={cards.filter((card) => card.status === status)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;