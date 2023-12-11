import * as a from './StyledHeader.js';
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  }

  const goToPosting = () => {
    navigate("/Posting")
  }
  
  return (
    <a.HeaderBox>
        <a.HeaderWrap>
            <a.Logo src={require('../../images/LogoWhite.png')} onClick={goToMain}/>
            <a.SearchBox/>
            <a.SearchSimbol src={require('../../images/searchSimbol.png')}/>
        </a.HeaderWrap>
        <a.NavWrap>
            { localStorage.getItem('accessToken') ? <a.Logout onClick={() => {localStorage.clear(); window.location.reload();}}><a.LogoutText>로그아웃</a.LogoutText></a.Logout> : <a.LoginButton onClick={() => {
              window.location.href = process.env.REACT_APP_GOOGLE_OAUTH_URL;
            }}>
              <a.LoginL src={require('../../images/google.png')}/>
              <a.Login>구글로 로그인</a.Login>
            </a.LoginButton>}
            <a.Page>마이페이지</a.Page>
            <a.Page onClick={goToPosting}>식단공유하기</a.Page>
        </a.NavWrap>
    </a.HeaderBox>
  );
}

export default Header;