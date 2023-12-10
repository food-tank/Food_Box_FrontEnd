import { useEffect } from 'react';
import Footer from '../footer/Footer.js';
import Header from '../header/Header.js';
import * as a from './StyledViewContent.js';
import { getFoodOne, getMatrial, getRecipe } from '../../services/food.js';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import FilledHeart from '../../images/like2.png'
import Heart from '../../images/like.png'
import { checkLike, createLike, deleteLike } from '../../services/like.js';

function ViewContent() {
    const [res, setRes] = useState();
    const [material, setMaterial] = useState([]);
    const [recipe, setRecipe] = useState();
    const [like, setLike] = useState(false);
    const {foodId} = useParams();
    let difficulty, difficultyImg, servingImg;

    useEffect(() => {
        getFoodOne(foodId, setRes);
    }, [])

    useEffect(() => {
        getMatrial(foodId, setMaterial);
    }, [])

    useEffect(() => {
        getRecipe(foodId, setRecipe);
    }, [])

    useEffect(() => {
        checkLike(foodId, setLike);
    }, [])

    switch(res?.difficulty) {
        case "NORMAL":
            difficulty = "보통";
            difficultyImg = require('../../images/nomal.png');
            break;
        case "VERY_EASY":
            difficulty = "매우 쉬움"; 
            difficultyImg = require('../../images/supereasy.png');
            break;
        case "EASY":
            difficulty = "쉬움"; 
            difficultyImg = require('../../images/easy.png');
            break;
        case "VERY_HARD":
            difficulty = "매우 어려움";  
            difficultyImg = require('../../images/superhard.png');
            break;       
        case "HARD":
            difficulty = "어려움"; 
            difficultyImg = require('../../images/hard.png');
            break
        default:
            difficultyImg = '../../images/nomal.png';
    }

    switch(res?.serving) {
        case 1: 
            servingImg = require('../../images/one.png');
            break;
        case 2: 
            servingImg = require('../../images/two.png');
            break;
        case 3: 
            servingImg = require('../../images/three.png');
            break;
        case 4: 
            servingImg = require('../../images/four.png');
            break;
        case 5:
            servingImg = require('../../images/five.png');
            break;
        default:
            servingImg = require('../../images/five.png');
    }

  return (
    <div>
        <Header/>
        <a.ContentWrap>
            <a.TitleWrap>
                <a.Wrap>
                    <a.Title>{res?.name}</a.Title>
                    <a.Writer>{res?.writer.name}</a.Writer>
                    <a.Date>작성일: {res?.createTime}</a.Date>
                </a.Wrap>
                <a.LikeWrap>
                    <a.Like onClick={() => {
                        if (like) {
                            deleteLike(res?.foodId);
                            window.location.reload();
                        } else {
                            createLike(res?.foodId);
                            window.location.reload();
                        }}} src={like ? FilledHeart : Heart}/>
                    <a.LikeCount>{res?.likeCount}</a.LikeCount>
                </a.LikeWrap>
            </a.TitleWrap>
            <a.MainContent>
                <a.MainImg src={res?.imgUrl}/>
                <a.InfoWrap>
                    <a.Info>
                        <a.IconWrap>
                            <a.Icon src={servingImg}/>
                            <a.IconInfo>{res?.serving}인분</a.IconInfo>
                        </a.IconWrap>
                        <a.IconWrap>
                            <a.Icon src={require('../../images/time.png')}/>
                            <a.IconInfo>{res?.cookingTime}분</a.IconInfo>
                        </a.IconWrap>
                        <a.IconWrap>
                            <a.Icon src={difficultyImg}/>
                            <a.IconInfo>{difficulty}</a.IconInfo>
                        </a.IconWrap>
                    </a.Info>
                    <a.Ingredients>
                        <a.AWrap>
                            <a.A>재료</a.A>
                            <a.B>클릭해서 링크를 확인해보세요!</a.B>
                        </a.AWrap>
                        {material?.map(material => (
                            <a.C>{material.name}</a.C>
                        ))}
                    </a.Ingredients>
                </a.InfoWrap>
            </a.MainContent>
            <a.Recipe>
                <a.T>레시피</a.T>
                {recipe?.map((recipe, i) => (
                <a.List>
                    <a.ListTextWrap>
                        <a.ListTextT>
                            {i + 1}. {recipe?.title}
                        </a.ListTextT>
                        <a.ListTextC>
                            {recipe?.content}
                        </a.ListTextC>
                    </a.ListTextWrap>
                    <a.ListImg src={recipe.imgUrl}/>
                </a.List>
                ))}
                <a.Comment>{res?.content}</a.Comment>
            </a.Recipe>
        </a.ContentWrap>
        <Footer/>
    </div>
  );
}

export default ViewContent;