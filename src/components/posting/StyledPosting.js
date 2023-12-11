import styled from "styled-components";

export const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    //background-color: pink;
    margin: auto;
`;

export const Title = styled.input`
    border:1.5px solid #D9D9D9;
    padding: 10px;
    margin-top: 10px;
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    width: 100%;
`;


export const TitleWrap = styled.div`
    border-bottom:1.5px solid #D9D9D9;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 10px;
`;

export const Date = styled.div`
    font-size: 14px;
    margin-top: 3px;
    color: #D9D9D9;
`;

export const MainContent = styled.div`
    display: flex;
    border-bottom:1.5px solid #D9D9D9;

`;

export const MainImg = styled.img`
    height: 400px;
    margin-right: 20px;
`
export const InfoWrap =styled.div`
    width: 100%;

`
export const Info = styled.div`
    height: 100px;
    border:1.5px solid #D9D9D9;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const Ingredients = styled.div`
    padding: 30px;
    height: 215px;
    border:1.5px solid #D9D9D9;
    margin-bottom: 20px;
`
export const IconWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.img `
    height: 40px;
`;

export const IconInfo = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-left: 10px;
    color: #575757;
`;

export const IconInfoInput = styled.input`
    font-size: 20px;
    font-weight: 600;
    margin-left: 10px;
    color: #575757;
    border-width: 0;
    outline: none;
    width: 100px;
`;

export const A = styled.div`
    font-size: 25px;
`;

export const AWrap = styled.div`
    display: flex;
    margin-bottom: 5px;
`;

export const BWrap = styled.div`

`;

export const CWrap = styled.div`

`;

export const Link = styled.img `
    height: 10px;
    margin-left: 20px;
`;

export const Plus = styled.img`
    height: 15px;
    
`;

export const C = styled.input`
    border-width: 0;
    height: 30px;
    font-size: 20px;
    outline: none;
    margin-left: 5px;
`;

export const B= styled.input`
    border-width: 0;
    font-size: 15px;
    padding: 3px;
    outline: none;
    color: #6C9BF6;
    text-decoration: underline;
    &::placeholder {
        color: #6C9BF6;
    }
`;

export const Recipe = styled.div`

`;

export const T = styled.div`
    margin-top: 10px;
    font-weight: 600;
    margin-bottom: 20px;
`;

export const List = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const AddList = styled.img`
    width: 100%;
`;

export const ListTextWrap = styled.div`
    margin-left: 30px;
`;

export const ListTextT = styled.input`
    font-size: 25px;
    width: 100%;
    border-width: 0;
`;

export const ListTextC = styled.input`
    color: #575757;
    margin-left: 25px;
    width: 100%;
    border-width: 0;
`;

export const ListImg = styled.img`
    height: 200px;
    margin-left: 50px;
    
`;

export const Comment = styled.input`
    width: 960px;
    height: 40px;
    border:1.5px solid #D9D9D9;
    font-weight: 600;
    margin-top: 20px;
    padding: 20px;
`;

export const Upload = styled.button`
    background-color: black;
    border-radius: 30px;
    color: white;
    font-size: 15px;
    font-weight: 700;
    width: 100px;
    margin-top: 20px;
    margin-left: auto;
    padding: 5px;
`;