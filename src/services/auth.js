import foodBox from "../apis/instance"

export const loginByGoogle = (code) => {
  console.log(code)
  console.log(process.env.REACT_APP_BASE_URL)
  const { data } = foodBox.get('/auth/google', { code });
  return data; // { accessToken, refreshToken }
}

export const logout = () => {

}