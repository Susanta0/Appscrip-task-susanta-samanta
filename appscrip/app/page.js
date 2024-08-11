import Products from "./_components/_products/Products";
import { Hero } from "./_components/Hero";
import Recommended from "./_recommended/Recommended";
import Sidebar from "./_sidebar/Sidebar";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Sidebar/>
      {/* <Products/>
      <Recommended/> */}
    </main>
  );
}
