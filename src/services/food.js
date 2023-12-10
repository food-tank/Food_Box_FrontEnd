import foodBox from "../apis/instance"

export const getFoodData = async (type, criteria, setState) => {
  await foodBox.get(`/food?type=${type}&criteria=${criteria}&size=1000&page=0`, {
    headers : {Authorization : localStorage.getItem('accessToken')}
  })
    .then((res) => setState(res.data))
}

export const getFoodOne = async (foodId, setRes) => {
  await foodBox.get(`/food/${foodId}`, {
    headers: {Authorization : localStorage.getItem('accessToken')}
  })
    .then((res) => setRes(res.data))
}

export const getMatrial = async (foodId, setMaterial) => {
  await foodBox.get(`/material/${foodId}`)
    .then((res) => setMaterial(res.data))
}

export const getRecipe = async (foodId, setRecipe) => {
  await foodBox.get(`/recipe/${foodId}`)
    .then((res) => setRecipe(res.data))
}