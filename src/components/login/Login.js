import  React,{ useState } from 'react';
import * as a from './StyledLogin.js';
import { useNavigate } from "react-router-dom";

function Login() {
  const [hidePassword, setHidePassword] = useState(true);
  const PasswordHandler =()=>{
	  setHidePassword(!hidePassword);
  }

  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate("/signIn");
  }

  const goToMain = () => {
    navigate("/");
  }

  return (
    <a.LoginBox>
      <a.Logo src={require('../../images/LogoBlack.png')} onClick={goToMain}/>
      <a.InputWrap>
        <a.InputBox placeholder='아이디'/>
      </a.InputWrap>
      <a.InputWrap>
        <a.InputBox type={hidePassword ? "password" : "text"} placeholder='비밀번호'/>
        <a.EyeIcon onClick={PasswordHandler} src={hidePassword ? require('../../images/eye.png') : require('../../images/hidden.png')} />
      </a.InputWrap>
      <a.LoginError>아이디나 비밀번호가 일치하지않습니다.</a.LoginError>
      <a.LoginBtn>로그인</a.LoginBtn>
      <a.FindWrap>
        <a.FindBox>비밀번호찾기</a.FindBox>
        <a.Contour/>
        <a.FindBox>아이디찾기</a.FindBox>
      </a.FindWrap>
      <a.SignInBtn onClick={goToSignIn}>회원가입</a.SignInBtn>
    </a.LoginBox>
  );
}

export default Login;