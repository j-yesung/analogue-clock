import { createSlice } from '@reduxjs/toolkit';

interface ClockState {
  isVisible: boolean;
  tooltipPosition: { x: number; y: number };
}

const initialState: ClockState = {
  isVisible: false,
  tooltipPosition: { x: 0, y: 0 },
};

const clockSlice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    setIsVisible: (state, action) => {
      state.isVisible = action.payload;
    },
    setTooltipPosition: (state, action) => {
      state.tooltipPosition = action.payload;
    },
  },
});

export const { setIsVisible, setTooltipPosition } = clockSlice.actions;
export default clockSlice.reducer;
