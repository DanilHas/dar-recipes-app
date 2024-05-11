import FilterSection from "../FilterSection";
import Header from "../Header";
import RecipesSection from "../RecipesSection";

export default function MainPage() {
  return (
    <>
      <Header />
      <main className="flex">
        <FilterSection />
        <RecipesSection />
      </main>
    </>
  );
}
