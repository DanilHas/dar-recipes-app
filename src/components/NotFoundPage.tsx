import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="w-full max-w-full flex flex-col items-center pt-60 pb-16">
      <h1
        className="max-w-[400px] w-full text-customBlack text-center text-[140px]
      font-normal leading-normal"
      >
        404
      </h1>
      <p
        className="max-w-[400px] w-full text-customBlack text-center text-base
      leading-normal font-normal mt-1 mb-[184px]"
      >
        Страница не найдена
      </p>
      <Link
        to={"/"}
        className="text-center text-sm leading-normal font-normal
        transition-opacity ease-out duration-300 hover:opacity-80"
      >
        На главную
      </Link>
    </main>
  );
}
