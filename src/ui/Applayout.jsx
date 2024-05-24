import AboutMe from "../features/AboutMe";
import Contact from "../features/Contact";
import Footer from "../features/Footer";
import Header from "../features/Header";
import MySkills from "../features/MySkills";
import Profile from "../features/Profile";
import Portfolios from "../features/Portfolios";
import Experience from "../features/Experience";

function Applayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />

      <main className="text-center">
        <Profile />
        <AboutMe />
        <MySkills />
        <Experience />
        <Portfolios />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Applayout;
