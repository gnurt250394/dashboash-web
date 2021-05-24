import network from "network/apis";

export const LoginApi = (phone, password) => {
  return network.post(network.path.auth.login, { phone, password });
};
