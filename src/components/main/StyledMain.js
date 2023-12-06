import styled, {css} from "styled-components";

export const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    //background-color: pink;
    margin: auto;
`;

export const Title = styled.div`
    font-size: 23px;
    font-weight: 600;
    margin-top: 20px;
`;

export const MenuWrap = styled.div `
    margin-top: 10px;
    height: 30px;
    display: flex;
`;

export const Menu = styled.div`
    border: 1px solid #D9D9D9;
    width: 60px;
    text-align: center;
    font-size: 14px;
    padding: 4.5px;
`;

export const MenuB = styled.div`
    border: 1px solid #D9D9D9;
    width: 60px;
    text-align: center;
    font-size: 14px;
    padding: 4.5px;
    background-color: #F3F3F3;
    color: #B4B5B6;
    cursor: pointer;

    ${({selected})=> selected && css`
        background-color: white;
        color: black;
    `}
`;

export const ListWrap = styled.div`
    margin-top: 5px;
    height: 25px;
    display: flex;
    width: 100%;
    border: 1px solid #D9D9D9;
`;

export const Filter = styled.div`
    font-size: 13px;
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 3px;
`;

export const FilterB = styled.div`
    font-size: 13px;
    padding-left: 7px;
    padding-right: 7px;
    margin-top: 3px;
    height: 16px;
    border-left: 1px solid #D9D9D9;
    color: #B4B5B6;
    cursor: pointer;

    ${({selected})=> selected && css`
        color: black;
    `}
`;

export const MainContent = styled.div`
    width: 100%;
    height: 390px;
    margin-top: 30px;
    display: flex;
    align-content: flex-start;
    flex-wrap: nowrap;
`;

export const ContentBox = styled.div`
    //background-color: pink;
    width: 227.5px;
    margin-right: 30px;

`;

export const Thumbnail = styled.img`
    width: 227.5px;
`;

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 5px;
`;

export const CTitleWrap = styled.div`
    width: 180px;
`;

export const ContentTitle = styled.div`
    font-size: 17px;
`;

export const NickName = styled.div`
    color: #B4B5B6;
`;

export const LikeWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const Like = styled.img`
    height: 25px;
`;

export const LikeCount = styled.div`
    padding-left: 3px;
    color: #B4B5B6;
    font-size: 13px;
`