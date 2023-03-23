export const userReducer = (state = { users: [], user: {} }, action) => {
   switch (action.type) {
      case "ALL_USER_REQUEST":
         return {
            loading: true,
            users: []
         }

      case "ALL_USER_SUCCESS":
         return {
            loading: false,
            users: action.payload,

         }

      case "ALL_USER_FAIL":
         return {
            loading: false,
            error: action.payload,
         }

      case "CLEAR_ERRORS":
         return {
            ...state,
            error: null,
         };

      case "NEW_USER_REQUEST":
         return {
            loading: true,
            user: {}
         }

      case "NEW_USER_SUCCESS":
         return {
            loading: false,
            user: action.payload,
            success:true
         }

      case "NEW_USER_FAIL":
         return {
            loading: false,
            error: action.payload,
         }

      case "USER_DETAILS_REQUEST":
         return {
            loading: true,
            user: {}
         }

      case "USER_DETAILS_SUCCESS":
         return {
            loading: false,
            user: action.payload
         }


      case "USER_DETAILS_FAIL":
         return {
            loading: false,
            error: action.payload,
         }

      case "UPDATE_PROFILE_REQUEST":
         return {
            loading: true,
         }

      case "UPDATE_PROFILE_SUCCESS":
         return {
            loading: false,
            user: action.payload
         }

      case "UPDATE_PROFILE_FAIL":
         return {
            loading: false,
            error: action.payload,
         }




      default:
         return state
   }
}