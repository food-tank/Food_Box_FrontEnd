import foodBox from "../apis/instance"

export const getFoodData = (type, criteria, setState) => {
  foodBox.get(`/food?type=${type}&criteria=${criteria}&size=1000&page=0`)
    .then((res) => setState(res.data))
}