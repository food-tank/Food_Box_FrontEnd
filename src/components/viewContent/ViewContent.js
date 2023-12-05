import Footer from '../footer/Footer.js';
import Header from '../header/Header.js';
import * as a from './StyledViewContent.js';

function ViewContent() {
  return (
    <div>
        <Header/>
        <a.ContentWrap>
            <a.TitleWrap>
                <a.Wrap>
                    <a.Title>엄마보고싶다</a.Title>
                    <a.Writer>작성자: 집에가고싶다</a.Writer>
                    <a.Date>작성일: 2023-11-21</a.Date>
                </a.Wrap>
                <a.LikeWrap>
                    <a.Like src={require('../../images/like.png')}/>
                    <a.LikeCount>18</a.LikeCount>
                </a.LikeWrap>
            </a.TitleWrap>
            <a.MainContent>
                <a.MainImg src={require('../../images/a.jpg')}/>
                <a.InfoWrap>
                    <a.Info>
                        <a.IconWrap>
                            <a.Icon src={require('../../images/one.png')}/>
                            <a.IconInfo>1인분</a.IconInfo>
                        </a.IconWrap>
                        <a.IconWrap>
                            <a.Icon src={require('../../images/time.png')}/>
                            <a.IconInfo>30분</a.IconInfo>
                        </a.IconWrap>
                        <a.IconWrap>
                            <a.Icon src={require('../../images/nomal.png')}/>
                            <a.IconInfo>평범함</a.IconInfo>
                        </a.IconWrap>
                    </a.Info>
                    <a.Ingredients>
                        <a.AWrap>
                            <a.A>재료</a.A>
                            <a.B>클릭해서 링크를 확인해보세요!</a.B>
                        </a.AWrap>
                        <a.C>집에 가고싶은 염원 (1스푼)</a.C>
                        <a.C>엄마가 보고싶은 마음 (1컵)</a.C>
                        <a.C>졸림 (100g) (생략 가능)</a.C>
                        <a.C>약간의 피곤함 (생략 가능)</a.C>
                    </a.Ingredients>
                </a.InfoWrap>
            </a.MainContent>
            <a.Recipe>
                <a.T>레시피</a.T>
                <a.List>
                    <a.ListTextWrap>
                        <a.ListTextT>
                            1. 집에보내주세요
                        </a.ListTextT>
                        <a.ListTextC>
                            간절하게 집에가고싶다 진짜 왜 안보내주는거지 난 언제 집에 갈 수 있는거지 아 아직도 화요일이라니 절망적이야 이게 말이 되냐고.... 집가서 마라샹궈에 짜파게티 야무지게 먹고싶다 아 배고파
                        </a.ListTextC>
                    </a.ListTextWrap>
                    <a.ListImg src={require('../../images/b.jpg')}/>
                </a.List>
                <a.List>
                    <a.ListTextWrap>
                        <a.ListTextT>
                            1. 집에보내주세요
                        </a.ListTextT>
                        <a.ListTextC>
                            간절하게 집에가고싶다 진짜 왜 안보내주는거지 난 언제 집에 갈 수 있는거지 아 아직도 화요일이라니 절망적이야 이게 말이 되냐고.... 집가서 마라샹궈에 짜파게티 야무지게 먹고싶다 아 배고파
                        </a.ListTextC>
                    </a.ListTextWrap>
                    <a.ListImg src={require('../../images/b.jpg')}/>
                </a.List>
                <a.List>
                    <a.ListTextWrap>
                        <a.ListTextT>
                            1. 집에보내주세요
                        </a.ListTextT>
                        <a.ListTextC>
                            간절하게 집에가고싶다 진짜 왜 안보내주는거지 난 언제 집에 갈 수 있는거지 아 아직도 화요일이라니 절망적이야 이게 말이 되냐고.... 집가서 마라샹궈에 짜파게티 야무지게 먹고싶다 아 배고파
                        </a.ListTextC>
                    </a.ListTextWrap>
                    <a.ListImg src={require('../../images/b.jpg')}/>
                </a.List>
                <a.List>
                    <a.ListTextWrap>
                        <a.ListTextT>
                            1. 집에보내주세요
                        </a.ListTextT>
                        <a.ListTextC>
                            간절하게 집에가고싶다 진짜 왜 안보내주는거지 난 언제 집에 갈 수 있는거지 아 아직도 화요일이라니 절망적이야 이게 말이 되냐고.... 집가서 마라샹궈에 짜파게티 야무지게 먹고싶다 아 배고파
                        </a.ListTextC>
                    </a.ListTextWrap>
                    <a.ListImg src={require('../../images/b.jpg')}/>
                </a.List>
                <a.Comment>곧 수업끝난당~곧 수업끝난당~곧 수업끝난당~곧 수업끝난당~곧 수업끝난당~곧 수업끝난당~곧 수업끝난당~곧 수업끝난당~곧 수업끝난당~곧 수업끝난당~곧 수업끝난당~곧 수업끝난당~</a.Comment>
            </a.Recipe>
        </a.ContentWrap>
        <Footer/>
    </div>
  );
}

export default ViewContent;