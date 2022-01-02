# react-study-v6

- atomic design
- useHistory
  - 第２引数で state を渡せる。
- useLocation
- createContext
- useContext
  - どのコンテキストを利用するか引数で渡す
  - 単純に useContext を利用すると set 関数が実行されるたびに関係のない子コンポーネントも常に再レンダリングされてしまう。
  - memo を利用して再レンダリングを限定的にする。
- Recoil
  - atom で global state を定義
  - useRecoilState
  - useRecoilStateValue
  - useSetRecoilState
