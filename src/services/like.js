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