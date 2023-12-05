import Footer from '../footer/Footer.js';
import Header from '../header/Header.js';
import * as a from './StyledMain.js';

function Main() {
  return (
    <div>
        <Header/>
        <a.ContentWrap>
            <a.Title>Diet</a.Title>
            <a.MenuWrap>
              <a.Menu>다이어트</a.Menu>
              <a.MenuB>벌크업</a.MenuB>
              <a.MenuB>건강식</a.MenuB>
            </a.MenuWrap>
            <a.ListWrap>
              <a.Filter>최신</a.Filter>
              <a.FilterB>좋아요</a.FilterB>
            </a.ListWrap>
            <a.MainContent>
              <a.ContentBox>
                <a.Thumbnail src={require('../../images/a.jpg')}/>
                <a.Content>
                  <a.CTitleWrap>
                    <a.ContentTitle>집에보내죵 ㅠㅠ</a.ContentTitle>
                    <a.NickName>감자</a.NickName>
                  </a.CTitleWrap>
                  <a.LikeWrap>
                    <a.Like src={require('../../images/like.png')}/>
                    <a.LikeCount>18</a.LikeCount>
                  </a.LikeWrap>
                </a.Content>
              </a.ContentBox>
              <a.ContentBox>
                <a.Thumbnail src={require('../../images/a.jpg')}/>
                <a.Content>
                  <a.CTitleWrap>
                    <a.ContentTitle>집에보내죵 ㅠㅠ</a.ContentTitle>
                    <a.NickName>감자</a.NickName>
                  </a.CTitleWrap>
                  <a.LikeWrap>
                    <a.Like src={require('../../images/like.png')}/>
                    <a.LikeCount>18</a.LikeCount>
                  </a.LikeWrap>
                </a.Content>
              </a.ContentBox>
              <a.ContentBox>
                <a.Thumbnail src={require('../../images/a.jpg')}/>
                <a.Content>
                  <a.CTitleWrap>
                    <a.ContentTitle>집에보내죵 ㅠㅠ</a.ContentTitle>
                    <a.NickName>감자</a.NickName>
                  </a.CTitleWrap>
                  <a.LikeWrap>
                    <a.Like src={require('../../images/like.png')}/>
                    <a.LikeCount>18</a.LikeCount>
                  </a.LikeWrap>
                </a.Content>
              </a.ContentBox>
              <a.ContentBox>
                <a.Thumbnail src={require('../../images/a.jpg')}/>
                <a.Content>
                  <a.CTitleWrap>
                    <a.ContentTitle>집에보내죵 ㅠㅠ</a.ContentTitle>
                    <a.NickName>감자</a.NickName>
                  </a.CTitleWrap>
                  <a.LikeWrap>
                    <a.Like src={require('../../images/like.png')}/>
                    <a.LikeCount>18</a.LikeCount>
                  </a.LikeWrap>
                </a.Content>
              </a.ContentBox>
            </a.MainContent>
            <a.MainContent>
              <a.ContentBox>
                <a.Thumbnail src={require('../../images/a.jpg')}/>
                <a.Content>
                  <a.CTitleWrap>
                    <a.ContentTitle>집에보내죵 ㅠㅠ</a.ContentTitle>
                    <a.NickName>감자</a.NickName>
                  </a.CTitleWrap>
                  <a.LikeWrap>
                    <a.Like src={require('../../images/like.png')}/>
                    <a.LikeCount>18</a.LikeCount>
                  </a.LikeWrap>
                </a.Content>
              </a.ContentBox>
              <a.ContentBox>
                <a.Thumbnail src={require('../../images/a.jpg')}/>
                <a.Content>
                  <a.CTitleWrap>
                    <a.ContentTitle>집에보내죵 ㅠㅠ</a.ContentTitle>
                    <a.NickName>감자</a.NickName>
                  </a.CTitleWrap>
                  <a.LikeWrap>
                    <a.Like src={require('../../images/like.png')}/>
                    <a.LikeCount>18</a.LikeCount>
                  </a.LikeWrap>
                </a.Content>
              </a.ContentBox>
            </a.MainContent>
            <a.ListWrap>
            </a.ListWrap>
        </a.ContentWrap>
        <Footer/>
    </div>
  );
}

export default Main;