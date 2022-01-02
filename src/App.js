import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import "./styles.css";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/UserCard";

const user = {
  name: "yamabico",
  image: "https://source.unsplash.com/EdJZqsZpZYg",
  email: "test@gmail.com",
  phone: "090-1234-5678",
  company: {
    name: "hogefuga"
  },
  website: "https://hogefuga.com"
};
export default function App() {
  return (
    <div className="App">
      <PrimaryButton>OK</PrimaryButton>
      <SecondaryButton>NG</SecondaryButton>
      <br />
      <SearchInput></SearchInput>
      <UserCard user={user} />
    </div>
  );
}
