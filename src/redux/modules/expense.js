import initialExpense from "../data/dummyData.json";

// 초기 상태값
const initialState = {
  expense: initialExpense,
};

// 리듀서
const expense = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// 모듈 파일에서는 리듀서를 export default함
export default expense;
