import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { recipeApi } from "../services/recipeService";
import {
  nextPage,
  prevPage,
  setCurrentPage,
  setTotalPages,
} from "../store/reducers/PaginationSlice";

export default function Pagination() {
  const { recipesPerPage, totalPages, currentPage } = useAppSelector(
    (state) => state.pagination
  );
  const dispatch = useAppDispatch();
  const { data } = recipeApi.useGetAllRecipesQuery(50);
  const allRecipes = data?.recipes;

  useEffect(() => {
    if (allRecipes) {
      const calculatedTotalPages = Math.ceil(
        allRecipes.length / recipesPerPage
      );
      dispatch(
        setTotalPages(calculatedTotalPages > 0 ? calculatedTotalPages : 1)
      );
    }
  }, [allRecipes?.length, recipesPerPage]);

  const handlePageChange = (pageNumber: number): void => {
    dispatch(setCurrentPage(pageNumber));
  };

  const renderPageNumbers = (): JSX.Element[] => {
    const pageNumbers: JSX.Element[] = [];
    const visiblePages: number = 4;

    if (totalPages <= visiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <li key={i} className="max-w-8 w-full">
            <button
              className={`join-item btn paginationButton ${
                currentPage === i ? "paginationBtnActive" : ""
              }`}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </button>
          </li>
        );
      }
    } else {
      let start: number = currentPage - Math.floor(visiblePages / 2);
      let end: number = currentPage + Math.floor(visiblePages / 2);

      start = Math.max(start, 1);
      end = Math.min(end, totalPages);

      if (start > 1) {
        pageNumbers.push(
          <li key={1} className="max-w-8 w-full">
            <button
              className="join-item btn paginationButton"
              onClick={() => handlePageChange(1)}
            >
              1
            </button>
          </li>
        );
      }
      if (start > 2) {
        pageNumbers.push(
          <li key="dotStart" className="max-w-8 w-full">
            <button className="join-item btn btn-disabled paginationDotButton">
              ...
            </button>
          </li>
        );
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(
          <li key={i} className="max-w-8 w-full">
            <button
              className={`join-item btn paginationButton ${
                currentPage === i ? "paginationBtnActive" : ""
              }`}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </button>
          </li>
        );
      }

      if (end < totalPages) {
        if (end < totalPages - 1) {
          pageNumbers.push(
            <li key="dotEnd" className="max-w-8 w-full">
              <button className="join-item btn btn-disabled paginationDotButton">
                ...
              </button>
            </li>
          );
        }
        pageNumbers.push(
          <li key={totalPages} className="max-w-8 w-full">
            <button
              className={`join-item btn paginationButton ${
                currentPage === totalPages ? "paginationBtnActive" : ""
              }`}
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </button>
          </li>
        );
      }
    }
    return pageNumbers;
  };

  return (
    <ul className="join w-full flex justify-center mt-6 mb-3 gap-x-2">
      <li className="max-w-8 w-full">
        <button
          className="join-item btn paginationButton"
          onClick={() => dispatch(prevPage())}
          disabled={currentPage === 1}
        >
          «
        </button>
      </li>
      {renderPageNumbers()}
      <li className="max-w-8 w-full">
        <button
          className="join-item btn paginationButton"
          onClick={() => dispatch(nextPage())}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </li>
    </ul>
  );
}
