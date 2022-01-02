import "./styles.css";
import { Router } from "./router/Router";
// react hooks版
// import { UseProvider } from "./providers/UserProvider";
// recoil版
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      {/* <UseProvider> */}
      <Router />
      {/* </UseProvider> */}
    </RecoilRoot>
  );
}
