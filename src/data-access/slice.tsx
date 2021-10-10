import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IState {
  settings: any;
}

const initialState: IState = {
  settings: {
    isSet: false
  }
};

export const Slice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateSettings: (state, action: PayloadAction<any>) => {
      state.settings = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {updateSettings} = Slice.actions;

export default Slice.reducer;
