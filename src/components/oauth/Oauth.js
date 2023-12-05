import axios from "axios";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { loginByGoogle } from "../../services/auth";

function Oauth() {
  const [search] = useSearchParams();
  const code = search.get('code');
  const encodeCode = encodeURIComponent(code);
  useEffect(() => {
    const data = loginByGoogle(encodeCode);
    console.log(data);
  }, [code]);
  return (
    <div>
      Loading...
    </div>
  )
}

export default Oauth;