import Chart from "../components/Chart";
import Card from "../components/Card";

import { Container, RightSide } from "./styles";

const cardData = [
  {
    title: "Saldo a pagar",
    value: "R$ 130,00",
  },
  {
    title: "Saldo a receber",
    value: "R$ 200,63",
  },
  {
    title: "Saldo total",
    value: "R$ 350,13",
  },
];

const Home = () => (
  <Container>
    <Chart />
    <RightSide>
      {cardData.map((card) => (
        <Card key={card.title} title={card.title} value={card.value} />
      ))}
      <button>Download</button>
    </RightSide>
  </Container>
);

export default Home;
