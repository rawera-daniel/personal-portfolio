import Button from "./Button";

function Profile() {
  return (
    <div className="bg-stone-950 py-12 text-stone-50">
      <h1 className="mb-3.5 text-6xl tracking-wider sm:mb-2 sm:text-5xl">
        Rawera Daniel
      </h1>
      <p className="mb-8 text-4xl sm:mb-6 sm:text-2xl">Front-end Developer</p>
      <Button type="primary">Download CV</Button>
    </div>
  );
}

export default Profile;
