import Navbar from "@/components/nav/Navbar";
import Carousel from "@/components/Carousel";
import Category from "@/components/Category";
import Recomend from "@/components/product/Recomend";
import BestSeller from "@/components/product/BestSeller";
import Content from "@/components/Content";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className="shap-bg p-5 ">
        <main className="container mx-auto   ">
          <Carousel />
          <section>
            <Category />
          </section>
        </main>
      </div>
      <div className="container mx-auto">
        <section>
          <Recomend />
        </section>
        <section>
          <BestSeller />
        </section>
        <section>
          <Content />
        </section>
        <section>
          <Feedback />
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
