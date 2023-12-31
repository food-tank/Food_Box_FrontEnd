import { useEffect, useState } from "react";
import foodBox from "../../apis/instance.js";
import Footer from "../footer/Footer.js";
import Header from "../header/Header.js";
import * as a from "./StyledMain.js";
import { getFoodData } from "../../services/food.js";
import { createLike, deleteLike } from "../../services/like.js";
import FilledHeart from '../../images/like2.png'
import Heart from '../../images/like.png'
import { useMutation, useQuery } from "@tanstack/react-query";

function Main() {

  const [choice, setChoice] = useState(1);
  const [query, setQuery] = useState(1);
  const [res, setRes] = useState({
    foods : []
  });
  const [criteria, setCriteria] = useState("recent");
  const [type, setType] = useState("DIET");

  const { data: foodsData, refetch } = useQuery({
    queryKey: ['foods', type, criteria],
    queryFn: async () => {
      const { data } = await foodBox.get(`/food?size=1000&page=0&type=${type}&criteria=${criteria}`, {
        headers: {Authorization : localStorage.getItem('accessToken')}
      });
      return data
    },
  });

  useEffect(() => {
    if (foodsData) {
      setRes(foodsData)
    }
  }, [foodsData])

  const { mutate: deleteLikeMutate } = useMutation({
    mutationFn: (foodId) => deleteLike(foodId),
    onSuccess() {
      refetch();
    }
  })

  const { mutate: createLikeMutate } = useMutation({
    mutationFn: (foodId) => createLike(foodId),
    onSuccess() {
      refetch();
    }
  })
  
  return (
    <div>
      <Header />
      <a.ContentWrap>
        <a.Title>Diet</a.Title>
        <a.MenuWrap>
          <a.MenuB selected={choice===1} onClick={()=>{setChoice(1); setType("DIET"); getFoodData("DIET", criteria, setRes)}}>다이어트</a.MenuB>
          <a.MenuB selected={choice===2} onClick={()=>{setChoice(2); setType("BULK"); getFoodData("BULK", criteria, setRes)}}>벌크업</a.MenuB>
          <a.MenuB selected={choice===3} onClick={()=>{setChoice(3); setType("HEALTH"); getFoodData("HEALTH", criteria, setRes)}}>건강식</a.MenuB>
        </a.MenuWrap>
        <a.ListWrap>
          <a.FilterB selected={query===1} onClick={() => {setQuery(1); setCriteria("recent"); getFoodData(type, "recent", setRes)}}>최신순</a.FilterB>
          <a.FilterB selected={query===2} onClick={() => {setQuery(2); setCriteria("like"); getFoodData(type, "like", setRes)}}>좋아요순</a.FilterB>
        </a.ListWrap>
        <a.MainContent>
          {res?.foods?.map(food => (
            <a.ContentBox key={food.foodId} >
            <a.ThumbnailBox to={{
              pathname: `ViewContent/${food.foodId}`
            }}>
            <a.Thumbnail src={food.imgUrl}  />
            </a.ThumbnailBox>
            <a.Content>
              <a.CTitleWrap>
                <a.ContentTitle>{food.foodName}</a.ContentTitle>
                <a.NickName>{food.writer.name}</a.NickName>
              </a.CTitleWrap>
              <a.LikeWrap>
                <a.Like onClick={() => {
                  food.isLiked ? deleteLikeMutate(food.foodId) : createLikeMutate(food.foodId) }} src={food.isLiked ? FilledHeart : Heart} />
                <a.LikeCount>{food.likeCount}</a.LikeCount>
              </a.LikeWrap>
            </a.Content>
            </a.ContentBox>
          ))}
        </a.MainContent>
        <a.ListWrap></a.ListWrap>
      </a.ContentWrap>
      <Footer />
    </div>
  );
}

export default Main;
