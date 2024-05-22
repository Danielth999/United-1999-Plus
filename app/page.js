import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Category from "@/components/Category";
import Product from "@/components/Product";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Carousel />

        <section>
          <Category />
        </section>
        <section>
          <Product />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
