import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/Hero";
import Footer from "../../components/layout/Footer";


// function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Footer />
//     </>
//   );
// }

// export default Home;


function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
      </main>
      <Footer />
    </>
  );
}