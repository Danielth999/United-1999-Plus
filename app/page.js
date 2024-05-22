import Navbar from "@/components/Navbar";

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
