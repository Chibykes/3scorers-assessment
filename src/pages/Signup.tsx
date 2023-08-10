import Logo from "components/Logo";
import SignUpForm from "components/SignUpForm";

export default function Signup() {
  return (
    <main
      className="
        h-screen bg-[--primary-color]
        grid grid-cols-12
      "
    >
      <div className="col-span-7 lg:grid hidden place-content-center">
        <Logo />

        <h1 className="text-white text-4xl text-center font-bold">
          Create Account
        </h1>
        <p className="text-white text-center">
          Join the community and have fun <br /> predicting!
        </p>
      </div>

      <div
        className="
          lg:col-span-5 col-span-12 bg-white 
          lg:p-20 p-8 max-h-screen overflow-auto
        "
      >
        <SignUpForm />
      </div>
    </main>
  );
}
