import {
  AsyncThunk,
  AsyncThunkPayloadCreator,
  createAsyncThunk,
} from "@reduxjs/toolkit";

type AsyncThunkConfig = object;

const createAppAsyncThunk = <Returned, ThunkArg = unknown>(
  type: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, AsyncThunkConfig>
): AsyncThunk<Returned, ThunkArg, AsyncThunkConfig> => {
  return createAsyncThunk<Returned, ThunkArg, AsyncThunkConfig>(
    type,
    // this signature of thunkAPI cannot defined other than any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (arg: ThunkArg, thunkAPI: any) => {
      try {
        // do some stuff here that happens on every action
        return await payloadCreator(arg, thunkAPI);
      } catch (err) {
        // do some stuff here that happens on every error
        return thunkAPI.rejectWithValue(null);
      }
    }
  );
};

export default createAppAsyncThunk;
