import foodBox from "../apis/instance"

export const createLike = async (foodId) => {
  await foodBox.post(`/like/${foodId}`, {},{
    headers: {Authorization : localStorage.getItem('accessToken')}
  });
}

export const deleteLike = async (foodId) => {
  await foodBox.delete(`/like/${foodId}`, {
    headers : {Authorization : localStorage.getItem('accessToken')}
  })
}

export const checkLike = async (foodId, setLike) => {
  await foodBox.get(`/like/${foodId}`, {
    headers : {Authorization : localStorage.getItem('accessToken')}
  })
    .then((res) => setLike(res.data));
}