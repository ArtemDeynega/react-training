import PaintingsList from "./components/PaintingList.js";
import Section from "./components/Section";
import paintings from "./paintings.json";
import Painting from "components/Painting";
import ColorPicker from "components/ColorPicker";
import Container from "components/Container";

import Alert from "components/Alert";
// const colorPikckerOptions = [
//   { label: "red", color: "#FF0000" },
//   { label: "green", color: "#008000" },
//   { label: "blue", color: "#1E90FF" },
//   { label: "grey", color: "#808080" },
//   { label: "pink", color: "#FFC0CB" },
//   { label: "indigo", color: "#4B0082" },
// ];

const App = () => {
  return (
    <Container>
      <Alert text="Шеф все пропало!" type="alert" />
      <Alert text="Шеф все пропало!" type="success" />
      <Alert text="Шеф все пропало!" type="warning" />
      <Alert text="Шеф все пропало!" type="error" />
    </Container>
  );
};
export default App;

//  <h2>Привет</h2>
//     <ColorPicker options={colorPikckerOptions} />

//     <Section title="Топ недели">
//       <PaintingsList items={paintings} />
//     </Section>
//     <Section />
