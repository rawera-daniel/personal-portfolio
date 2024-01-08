import AboutMe from "../features/AboutMe";
import Header from "../features/Header";
import MySkills from "../features/MySkills";
import Profile from "../features/Profile";
import Portfolio from "../features/portfolio";

function Applayout() {
  return (
    <div className="h-screen">
      <Header />

      <main className="text-center">
        <Profile />
        <AboutMe />
        <MySkills />
        <Portfolio />
      </main>
    </div>
  );
}

export default Applayout;
