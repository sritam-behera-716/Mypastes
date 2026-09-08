import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addPaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste created successfully");
    },
    updatePaste: (state, action) => {},
    deletePaste: (state, action) => {
      const pasteId = action.payload;
      state.pastes = state.pastes.filter((paste) => paste.id !== pasteId);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste deleted successfully");
    },
    deleteAllPaste: (state, action) => {},
  },
});

export const { addPaste, updatePaste, deletePaste, deleteAllPaste } =
  pasteSlice.actions;

export default pasteSlice.reducer;
