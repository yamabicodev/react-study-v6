import { atom } from "recoil";

export const userState = atom({
  // 他のstateを被らないよう、uniqueな名前にする関数名で設定しておくのが良さそう
  key: "userState",
  default: { isAdmin: false }
});
