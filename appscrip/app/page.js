import Products from "./_components/_products/Products";
import { Hero } from "./_components/Hero";
import Recommended from "./_recommended/Recommended";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Products/>
      <Recommended/>
    </main>
  );
}
