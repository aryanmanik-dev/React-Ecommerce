import EntireCollection from "@components/EntireCollection/EntireCollection";
import ExploreCollection from "@components/ExploreCollection/ExploreCollection";
import LandingPage from "@components/LandingPage/LandingPage";
import ProductCard from "@components/ProductCard/ProductCard";

const Home = () => {
  return (
    <main>
      <section className="landing-section">
        <LandingPage />
      </section>
      <section className="min-h-screen mb-10 mt-10">
        <h2 className="text-4xl text-center">Spring/Summer 2024</h2>
        <div className="flex flex-wrap ">
          <ProductCard />
        </div>
      </section>

      <section className="min-h-screen my-10">
        <h2 className="text-2xl text-center">Explore The Collection</h2>
        <ExploreCollection />
      </section>

      <section className="min-h-screen my-10">
        <h2 className="text-2xl text-center">SEE THE ENTIRE COLLECTION</h2>
        <EntireCollection />
      </section>
    </main>
  );
};

export default Home;
