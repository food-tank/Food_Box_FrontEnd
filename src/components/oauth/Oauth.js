import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import foodBox from "../../apis/instance";
import { useMutation } from "@tanstack/react-query";

function Oauth() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const encodedCode = searchParams.get("code") ?? "";

  const encodedValue = encodeURIComponent(encodedCode);
  const prevEncodedValueRef = useRef();

  const postCode = async (encodedValue) => {
    const { data } = await foodBox.get(`/api/auth/google?code=${encodedValue}`);
    return data;
  };

  const navigate = useNavigate();

  const { mutate: loginMutate } = useMutation({
    mutationFn: () => postCode(encodedValue),
    onSuccess: (data) => {
      const { accessToken, refreshToken } = data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("firstLogin", "false");

      navigate("/");
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  useEffect(() => {
    if (encodedValue !== prevEncodedValueRef.current) {
      loginMutate();
      prevEncodedValueRef.current = encodedValue;
    }
  }, [encodedValue, loginMutate]);
}

export default Oauth;
