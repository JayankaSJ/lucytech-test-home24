import { getCategory } from "api/categories.api";
import createAppAsyncThunk from "store/createAppAsyncThunk";
import { executeApiCall } from "utils/executeApiCall";

async function fetchCategoryCallback() {
  const request = getCategory();

  const response = await executeApiCall(request);

  return response?.categories || [];
}

export const fetchCategory = createAppAsyncThunk<string, void>(
  "fetchCategory",
  fetchCategoryCallback
);
