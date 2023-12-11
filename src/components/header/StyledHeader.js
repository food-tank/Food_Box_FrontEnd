import styled from "styled-components";

export const HeaderBox = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`;

export const HeaderWrap = styled.div`
    display: flex;
    height: 35px;
    width: 100%;
    background-color: black;
    padding: 10px;
`;

export const Logo = styled.img`
    height: 35px;
    margin-top: 3px;
    margin-left: 20px;
`;

export const SearchBox = styled.input`
    width: 300px;
    margin-left: 20px;
`;

export const SearchSimbol = styled.img`
    margin: 5px;

`;

export const NavWrap = styled.div`
    height: 30px;
    width: 100%;
    border-bottom:1.5px solid #D9D9D9;
    padding: 10px;
    display: flex;
`;

export const LoginButton = styled.button`
    border: 1.5px solid #D9D9D9;
    margin-left: 50px;
    margin-right: 30px;
    width: 150px;
    text-align: center;
    height: 100%;
    background-color: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{  
    background-color : #4285F4;
    color : white
  }
`;

export const Logout = styled.button`
    border: 1.5px solid #D9D9D9;
    margin-left: 50px;
    margin-right: 30px;
    width: 150px;
    text-align: center;
    height: 100%;
    background-color: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{  
    background-color : #4285F4;
    color : white
  }
`;

export const LogoutText = styled.div`
    margin: 0 auto;
    
`

export const LoginL = styled.img`
    height: 15px;
    margin-right: 3px;
`

export const Login = styled.div`
    margin-right: 3px;
`

export const Page = styled.button`
    border: 0;
    border-left: 2px solid #D9D9D9;
    text-align: center;
    padding-top: 4px;
    padding-left: 20px;
    margin-right: 20px;
    background-color: white;
    font-size: 15px;
`;

