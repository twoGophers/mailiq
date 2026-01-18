import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Material from "@/components/Material";
import Nav from "@/components/Nav";
import Questions from "@/components/Questions";
import Tarif from "@/components/Tarif";
import Useful from "@/components/Useful";

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <Header />
      <Useful />
      <Material />
      <Tarif />
      <Questions />

      <Footer />
    </div>
  );
}
