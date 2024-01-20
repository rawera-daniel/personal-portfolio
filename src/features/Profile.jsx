import Button from "./Button";

function Profile() {
  return (
    <div className="bg-stone-950 py-12 text-stone-50">
      <h1 className="mb-1.5 text-3xl tracking-wider m:text-4xl  md:mb-2 md:text-5xl">
        Rawera Daniel
      </h1>
      <p className="mb-4 text-lg m:text-xl sm:mb-6 sm:text-2xl">
        Front-end Developer
      </p>
      <Button type="primary">Download CV</Button>
    </div>
  );
}

export default Profile;
