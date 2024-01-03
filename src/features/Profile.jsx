import Button from "./Button";

function Profile() {
  return (
    <div className="bg-stone-950 py-12  text-stone-50">
      <h1 className="mb-2 text-5xl tracking-wider">Rawera Daniel</h1>
      <p className="mb-6 text-2xl">Front-end Developer</p>
      <Button>Download CV</Button>
    </div>
  );
}

export default Profile;
