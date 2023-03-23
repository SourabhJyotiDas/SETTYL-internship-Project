import axios from "axios";



// get All Users
export const createUser = (name, age, address, category, department) => async (dispatch) => {
   try {
      dispatch({ type: "NEW_USER_REQUEST" });

      const { data } = await axios.post(`/api/v1/newuser`, { name, age, address, employeeStatus: category, department },
         {
            headers: {
               "Content-Type": "application/json",
            },
         }
      );

      dispatch({
         type: "NEW_USER_SUCCESS",
         payload: data,
      });
   } catch (error) {
      dispatch({
         type: "NEW_USER_FAIL",
         payload: error.response.data.message,
      });
   }
};


export const getAllUsers = () => async (dispatch) => {
   try {
      dispatch({ type: "ALL_USER_REQUEST" });
      const { data } = await axios.get(`/api/v1/getalluser`);

      dispatch({
         type: "ALL_USER_SUCCESS",
         payload: data.users
      });
   } catch (error) {
      dispatch({
         type: "ALL_USER_FAIL",
         payload: error.response.data.message
      });
   }
};


export const getUserDetails = (id) => async (dispatch) => {
   try {
      dispatch({ type: "USER_DETAILS_REQUEST" });
      const { data } = await axios.get(`/api/v1/user/${id}`);

      dispatch({
         type: "USER_DETAILS_SUCCESS",
         payload: data.user
      });
   } catch (error) {
      dispatch({
         type: "USER_DETAILS_FAIL",
         payload: error.response.data.message
      });
   }
};


export const updateUser = (name, age, address, category, department,id) => async (dispatch) => {
   try {
      dispatch({ type: "UPDATE_PROFILE_REQUEST" });

      const { data } = await axios.put(`/api/v1/updateuser/${id}`, { name, age, address, employeeStatus: category, department },
         {
            headers: {
               "Content-Type": "application/json",
            },
         }
      );

      dispatch({
         type: "UPDATE_PROFILE_SUCCESS",
         payload: data,
      });
      
   } catch (error) {
      dispatch({
         type: "UPDATE_PROFILE_FAIL",
         payload: error.response.data.message,
      });
   }
};



export const clearErrors = () => async (dispatch) => {
   dispatch({
      type: "CLEAR_ERRORS"
   })
}