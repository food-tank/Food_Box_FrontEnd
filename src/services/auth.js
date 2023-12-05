import foodBox from "../apis/instance";

export const loginByGoogle = (code) => {
  console.log(code);
  console.log("sdfsdf", process.env.REACT_APP_BASE_URL);
  const { data } = foodBox
    .get("/auth/google", { code })
    .then((res) => console.log("sdfsdf", res.data));
  return data; // { accessToken, refreshToken }
};

export const logout = () => {};
