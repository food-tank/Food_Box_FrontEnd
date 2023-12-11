import React, { useCallback, useRef, useState } from "react";
import Footer from "../footer/Footer.js";
import Header from "../header/Header.js";
import * as a from "./StyledPosting.js";
import foodBox from "../../apis/instance.js";
import { styled } from "styled-components";

function Posting() {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const onUploadImage = useCallback((e) => {
    if (!e.target.files) {
      return;
    }

    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    foodBox
      .post("/food/image", formData)
      .then((response) => {
        setImage(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  console.log("image", image.url);

  return (
    <div>
      <Header />
      <a.ContentWrap>
        <a.TitleWrap>
          <a.Title placeholder="제목을 작성해 주세요" />
        </a.TitleWrap>
        <a.MainContent>
          {image.url && <Image src={image.url} alt="img" />}
          {!image.url && (
            <>
              <a.MainImg
                src={require("../../images/addImg.png")}
                onClick={onImageClick}
              />
              <label htmlFor="fileInput">
                <Input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  ref={inputRef}
                  onChange={onUploadImage}
                  style={{ display: "none" }}
                />
              </label>
            </>
          )}
          <a.InfoWrap>
            <a.Info>
              <a.IconWrap>
                <a.Icon src={require("../../images/one.png")} />
                <a.IconInfo>1인분</a.IconInfo>
              </a.IconWrap>
              <a.IconWrap>
                <a.Icon src={require("../../images/time.png")} />
                <a.IconInfoInput placeholder="소요시간"></a.IconInfoInput>
              </a.IconWrap>
              <a.IconWrap>
                <a.Icon src={require("../../images/nomal.png")} />
                <a.IconInfo>평범함</a.IconInfo>
              </a.IconWrap>
            </a.Info>
            <a.Ingredients>
              <a.AWrap>
                <a.A>재료</a.A>
              </a.AWrap>
              <a.BWrap>
                <a.CWrap>
                  <a.Plus src={require("../../images/plus.png")} />
                  <a.C placeholder="재료를 추가해주세요." />
                </a.CWrap>
                <a.Link src={require("../../images/link.png")} />
                <a.B placeholder="구매링크를 입력해주세요." />
              </a.BWrap>
            </a.Ingredients>
          </a.InfoWrap>
        </a.MainContent>
        <a.Recipe>
          <a.T>레시피</a.T>
          <a.List>
            <a.ListTextWrap>
              <a.ListTextT placeholder="1. 내용을 추가해주세요." />
              <a.ListTextC placeholder="내용을 추가해주세요." />
            </a.ListTextWrap>
            <a.ListImg src={require("../../images/addImg2.png")} />
          </a.List>
          <a.AddList src={require("../../images/addList.png")} />
          <a.Comment placeholder="팁을 추가해주세요" />
        </a.Recipe>
        <a.Upload>식단 공유</a.Upload>
      </a.ContentWrap>
      <Footer />
    </div>
  );
}

export default Posting;

const Image = styled.img`
  width: 20rem;
  height: 25rem;
  border: 1px solid #d9d9d9;
  margin-right: 0.5rem;
`;

const Input = styled.input`
  width: 20rem;
  height: 25rem;
  border: 1px solid #d9d9d9;
  margin-right: 0.5rem;
`;
