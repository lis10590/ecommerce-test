import Card from "./Card";
import "../styles/MainPage.css";
const data = require("./data.json");

const MainPage = () => {
  return (
    <div className="flex-container">
      <div>
        <Card data={data.filter((item) => item.id < 8)} />
      </div>
      <div>
        <Card data={data.filter((item) => item.id > 7)} />
      </div>
    </div>
  );
};

export default MainPage;
