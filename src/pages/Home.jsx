import { Slider } from "../components";
import { ItemListContainer } from "../components/ItemListContainer";
import { Layout } from "./Layout";

export const Home = () => {
  return (
    <Layout>
      <Slider />
      <ItemListContainer />
    </Layout>
  );
};
