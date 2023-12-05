import styled from "styled-components";

export const LoginBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    Position: relative;
`;

export const Logo = styled.img`
    height: 60px;
    margin-bottom: 10px;
`;

export const InputWrap = styled.div`
    height: 40px;
    width: 400px;
    border-radius: 4px;
    margin-bottom: 5px;
    border: 1px solid #6C6C6C;
`;

export const InputBox = styled.input`
    margin-top: 4px;
    padding-left: 15px;
    outline: none;
    border:0;
    height: 30px;
    width: 345px;
    
`;

export const EyeIcon = styled.img`
    padding-top: 5px;
    position : absolute;
    height: 29px;
`;

export const LoginError = styled.div`
    width: 400px;
    text-align: left;
    color: red;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 13px;
    padding-left: 10px;
`;

export const LoginBtn = styled.button`
    margin-top: 5px;
    height: 45px;
    width: 400px;
    border-radius: 4px;
    text-align: center;
    color: white;
    background-color: black;
    font-weight: bold;
    &:hover{  
    background-color : #444444;
    }
`;

export const FindWrap = styled.div`
    display: flex;
    width: 400px;
    flex-direction: row-reverse;
    margin-top: 5px;
`;

export const FindBox = styled.div`
    color: #6C6C6C;
`;

export const Contour = styled.div`
    margin-right: 10px;
    margin-left: 10px;
    border-right: 2px solid #D9D9D9;
    margin-top: 5px;
    height: 15px;
`;

export const SignInBtn = styled.button`
    margin-top: 10px;
    height: 45px;
    width: 400px;
    border-radius: 4px;
    text-align: center;
    color: white;
    background-color: #444444;
    font-weight: bold;
    border-width: thin;
    &:hover{  
    background-color : black;
    }

`;
