import LoginForm from "components/LoginForm";
import Logo from "components/Logo";

export default function Login() {
  return (
    <main
      className="
            max-h-screen h-screen bg-[--primary-color] lg:py-12 p-8
            flex flex-col justify-start items-center gap-10
            overflow-auto
        "
    >
      <Logo />

      <div className="lg:w-1/3 w-full bg-white p-10 rounded-lg">
        <LoginForm />
      </div>
    </main>
  );
}
