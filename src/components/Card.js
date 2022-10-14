import "../styles/Card.css";

const Card = (props) => {
  return (
    <>
      {props.data.map((item) => {
        return (
          <div
            className={
              item.id === "1" || item.id === "8"
                ? "card-container"
                : item.id === "2" ||
                  item.id === "3" ||
                  item.id === "7" ||
                  item.id === "9" ||
                  item.id === "10" ||
                  item.id === "17" ||
                  item.id === "21"
                ? "card-container-id2"
                : item.id === "12" || item.id === "13" || item.id === "14"
                ? "card-container-id12"
                : "card-container-id4"
            }
          >
            <p>Id: {item.id}</p>
            <p>Site name: {item.name}</p>
            <a
              target="_blank"
              href={
                item.url === "www.google.com"
                  ? "https://www.google.com"
                  : item.url === "www.walla.co.il"
                  ? "https://www.walla.co.il"
                  : item.url === "www.ynet.co.il"
                  ? "https://www.ynet.co.il"
                  : "https://www.mako.co.il"
              }
            >
              Site Url: {item.url}
            </a>
            <div>{item.subData?.length && <Card data={item.subData} />}</div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
