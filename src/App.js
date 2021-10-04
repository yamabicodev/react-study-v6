import { SecondaryButton } from "./components/atoms/buttons/SecondaryButton";
import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>OK</PrimaryButton>
      <SecondaryButton>NG</SecondaryButton>
    </div>
  );
}
