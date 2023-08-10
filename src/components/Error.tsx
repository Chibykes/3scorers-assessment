import { useRouteError } from "react-router-dom";

export default function Error() {
  const error:any = useRouteError();

  return (
    <main
      className="
            max-h-screen h-screen bg-[--primary-color] lg:py-12 p-8
            flex flex-col justify-center items-center gap-10
            overflow-auto
        "
    >

      <div className="flex flex-col justify-center gap-3 lg:w-1/3 w-full text-white text-center p-10 rounded-lg">
        <h1 className="text-4xl font-bold">
          Oops!
        </h1>
        <span className="self-center px-2 py-1 bg-red-600 rounded-md font-semibold">{error.status} {error.statusText}</span>
        <p className="">Sorry an unexpexted error has occured!</p>
        <p className="">
          <span className="px-2 py-1 text-sm underline italics">"{error.data}"</span>
        </p>
      </div>
    </main>
  );
}
