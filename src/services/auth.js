import foodBox from "../apis/instance";

export const loginByGoogle = (code) => {
  const { data } = foodBox
    .get("/auth/google", { code })
  return data; // { accessToken, refreshToken }
};

export const logout = () => {};
