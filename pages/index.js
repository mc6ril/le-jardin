import Layout from "../components/layout/Layout";
import Slider from "../components/slider/Slider";

export default function Accueil() {
  return (
    <Layout page={"Accueil - Gite le Jardin"}>
      <section className="home">
        <Slider />
        <p>bouton de scroll down</p>
        <h1>Description du gite</h1>
      </section>
    </Layout>
  );
}
