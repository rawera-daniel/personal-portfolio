import AboutMe from "../features/AboutMe";
import Header from "../features/Header";
import Profile from "../features/Profile";

function Applayout() {
  return (
    <div className="h-screen">
      <Header />

      <main className="text-center">
        <Profile />
        <AboutMe />
      </main>
    </div>
  );
}

export default Applayout;
