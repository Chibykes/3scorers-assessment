import logo from "@images/logo.png";

type LogoTypes = {
  width?: number | "auto";
  height?: number | "auto";
};

export default function Logo(props: LogoTypes) {
  return <img className="mx-auto" {...props} src={logo} alt="" />;
}
