import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RecipePage from "./pages/RecipePage";
import { useAppDispatch } from "../hooks/redux";
import { recipeApi } from "../services/recipeService";
import { setFilteredRecipes } from "../store/reducers/FilterSlice";
import ScrollToTop from "./ScrollToTop";
import NotFoundPage from "./NotFoundPage";

function App() {
  const dispatch = useAppDispatch();
  const { data } = recipeApi.useGetAllRecipesQuery(50);
  const allRecipes = data?.recipes;

  useEffect(() => {
    if (allRecipes) {
      dispatch(setFilteredRecipes(allRecipes));
    }
  }, [allRecipes]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "recipes/:recipeId",
      element: (
        <>
          <ScrollToTop />
          <RecipePage />
        </>
      ),
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
