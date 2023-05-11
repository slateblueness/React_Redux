import React from "react";

// Reducer에 있는 값을 꺼내서 사용할 때: useSelector 사용
// Reducer에 있는 값을 수정할 때: useDispatch 사용
import { useDispatch, useSelector } from "react-redux";

export default function CounterBox() {
  // useSelector로 값 가져오기
  // state는 modules의 index.js에서 작성한 rootReducer
  // state.counter는 rootReducer 안에 객체로 묶인 counter
  // counter를 속성 이름으로 사용
  // reducer 함수만 전달해도 useSelector에서 자동으로 state를 뽑아 줌
  const counter = useSelector((state) => state.counter);

  return <div>{counter}</div>;
}
