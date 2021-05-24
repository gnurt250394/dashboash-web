import { LoginApi } from "src/network/apis/auth/AuthApi";
import ActionKeys from "../ActionKeys";
import { message } from "antd";
import { getPageQuery } from "utils/utils";
import { stringify } from "querystring";
import Router from "next/router";

export const saveDataProfile = (data) => {
  return {
    type: ActionKeys.AUTH.LOGIN,
    data,
  };
};
export const onActionLogin =
  (phone, password) => async (dispatch, getState) => {
    try {
      let res = await LoginApi(phone, password);
      if (res.data.code == 0) {
        let data = res.data.data;
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;

        if (redirect) {
          const redirectUrlParams = new URL(redirect);

          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);

            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf("#") + 1);
            }
          } else {
            window.location.href = "/";
            return;
          }
        }
        message.success("Đăng nhập thành công");

        Router.replace(redirect || "/");
        dispatch(saveDataProfile(data));
      } else {
        message.error(res.data?.message || "Đăng nhập không thành công");
      }
    } catch (error) {}
  };
const _actionLogout = () => {
  return {
    type: ActionKeys.AUTH.LOGOUT,
  };
};
export const logout = () => (dispatch, getState) => {
  try {
    dispatch(_actionLogout());
    const { redirect } = getPageQuery(); // Note: There may be security issues, please note

    if (window.location.pathname !== "/user/login" && !redirect) {
      Router.replace({
        pathname: "/signin",
        search: stringify({
          redirect: window.location.href,
        }),
      });
    }
  } catch (error) {}
};
