import ActionKeys from "redux-store/actions/ActionKeys";

const loginState = {
  token: "",
  userProfile: {},
};

export const authReducer = (state = loginState, action) => {
  switch (action.type) {
    case ActionKeys.AUTH.LOGIN:
      console.log('action: ', action);
      return {
        ...state,
        token: action?.data?.loginToken,
        userProfile: action.data || {},
      };
    case ActionKeys.AUTH.LOGOUT:
      return {
        ...state,
        token: "",
        userProfile: {},
      };
    case ActionKeys.AUTH.CHECKEXISTPROFILE:
      return {
        ...state,
        isExistProfile: action.data.isExistProfile,
      };
    case ActionKeys.AUTH.SET_FIRST_LOGIN:
      return {
        ...state,
        isFirstLogin: action.data.isFirstLogin,
      };
    case ActionKeys.SET_LOGIN_BY_SECURITY_DEVICE:
      return {
        ...state,
        isLoginSecurity: action.data.isLoginSecurity,
      };
    case "persist/REHYDRATE":
      if (
        action.payload &&
        action.payload.userProfile &&
        Object.keys(action.payload.userProfile).length
      ) {
        return {
          ...state,
          userProfile: action?.payload?.userProfile || {},
          token: action?.payload?.userProfile?.loginToken,
        };
      }
    default:
      return state;
  }
};
