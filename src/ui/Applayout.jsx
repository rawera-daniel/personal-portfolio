import AboutMe from "../features/AboutMe";
import Contact from "../features/Contact";
import Footer from "../features/Footer";
import Header from "../features/Header";
import MySkills from "../features/MySkills";
import Profile from "../features/Profile";
import Portfolios from "../features/Portfolios";

function Applayout() {
  return (
    <div className="h-screen">
      <Header />

      <main className="text-center">
        <Profile />
        <AboutMe />
        <MySkills />
        <Portfolios />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Applayout;
