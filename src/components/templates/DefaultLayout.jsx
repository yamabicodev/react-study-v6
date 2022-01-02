import { Footer } from "../atoms/leyout/Footer";
import { Header } from "../atoms/leyout/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
