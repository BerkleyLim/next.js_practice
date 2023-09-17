'use client'; // 클라이언트 모드로 사용
import React, { useState } from 'react'
import dynamic from "next/dynamic";

const PageComponent = dynamic(() =>
  import("../pages/Page")
);

const Component = () => {
  const [isTest, setIsTest] = useState(true);
  const [render, SetRender] = useState();

  const clickEvent = () => {
    setIsTest(false)
    console.log(isTest)
    console.log("hellow");
    SetRender(PageComponent);
  };

  return (
    <div>
      <h2>안녕하세요.</h2>
      <button style={{ background: "yellow" }}
      onClick={() => clickEvent()}
      >
        버튼 클릭시 아래 글자 출력
      </button>
      {!!render && render}
    </div>
  );
}
export default Component;