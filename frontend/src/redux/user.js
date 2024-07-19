import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'user',
  initialState: {
  
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      
    },

  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
