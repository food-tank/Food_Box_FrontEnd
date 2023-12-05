import * as a from './StyledNotFound.js';
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  }
  
  return (
    <a.Box>
      <a.Logo src={require('../../images/LogoWhite.png')} onClick={goToMain}/>
      <a.XLogo src={require('../../images/404.png')}/>
      <a.A>404 Not Found</a.A>
      <a.B>페이지를 찾을 수 없습니다</a.B>
    </a.Box>
  );
}

export default NotFound;