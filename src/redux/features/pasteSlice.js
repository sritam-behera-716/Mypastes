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
    updatePaste: (state, action) => {
      const updatedPaste = action.payload;

      const index = state.pastes.findIndex(
        (paste) => paste.id === updatedPaste.id,
      );

      if (index === -1) {
        toast.error("Paste not found");
        return;
      }

      state.pastes[index] = updatedPaste;
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste updated successfully");
    },
    deletePaste: (state, action) => {
      const pasteId = action.payload;
      state.pastes = state.pastes.filter((paste) => paste.id !== pasteId);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste deleted successfully");
    },
  },
});

export const { addPaste, updatePaste, deletePaste, deleteAllPaste } =
  pasteSlice.actions;

export default pasteSlice.reducer;
