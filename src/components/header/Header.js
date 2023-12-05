import * as a from './StyledHeader.js';
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  }
  
  return (
    <a.HeaderBox>
        <a.HeaderWrap>
            <a.Logo src={require('../../images/LogoWhite.png')} onClick={goToMain}/>
            <a.SearchBox/>
            <a.SearchSimbol src={require('../../images/searchSimbol.png')}/>
        </a.HeaderWrap>
        <a.NavWrap>
            <a.LoginButton onClick={() => {
              window.location.href = process.env.REACT_APP_GOOGLE_OAUTH_URL;
            }}>
              <a.LoginL src={require('../../images/google.png')}/>
              <a.Login>구글로 로그인</a.Login>
            </a.LoginButton>
            <a.Page>마이페이지</a.Page>
            <a.Page>식단공유하기</a.Page>
        </a.NavWrap>
    </a.HeaderBox>
  );
}

export default Header;