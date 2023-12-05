import  React,{ useState } from 'react';
import * as a from './StyledSignInCheck.js';
import { useNavigate } from "react-router-dom";

function SignInCheck() {
  const [hidePassword, setHidePassword] = useState(true);
  const PasswordHandler =()=>{
	  setHidePassword(!hidePassword);
  }

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  }

  const goToMain = () => {
    navigate("/");
  }

  return (
    <a.LoginBox>
      <a.Logo src={require('../../images/LogoBlack.png')} onClick={goToMain}/>
      <a.InputWrap>
        <a.InputBox placeholder='이메일'/>
      </a.InputWrap>
      <a.InputWrap>
        <a.InputBox type={hidePassword ? "password" : "text"} placeholder='인증번호'/>
        <a.EyeIcon onClick={PasswordHandler} src={hidePassword ? require('../../images/eye.png') : require('../../images/hidden.png')} />
      </a.InputWrap>
      <a.LoginError>인증번호가 일치하지않습니다.</a.LoginError>
      <a.SignInBtn>회원가입</a.SignInBtn>
      <a.FindWrap>
        <a.FindBox>비밀번호찾기</a.FindBox>
        <a.Contour/>
        <a.FindBox>아이디찾기</a.FindBox>
      </a.FindWrap>
      <a.LoginBtn onClick={goToLogin}>로그인</a.LoginBtn>
    </a.LoginBox>
  );
}

export default SignInCheck;