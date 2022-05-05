import React from "react";
import styled from "styled-components";

import { CardPreview } from "../components";
import PageHeader from "../PageHeader";
import useLocalStorage from "../useLocalStorage";

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  margin: 50px auto;
`;

const CardItem = styled.div`
  width: 80%;
  margin: auto;
`;

const CardNickname = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const CardShapeButton = styled.div`
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 213px;
  height: 133px;

  background-color: #d2d2d2;
  border-radius: 5px;

  font-size: 30px;
  color: #575757;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #00caa5;
  }
`;

export default function CardListPage({ setPage }) {
  const [formDataArray] = useLocalStorage("card-info");

  return (
    <>
      <PageHeader page={"CardList"} />
      <CardList>
        {formDataArray.map((card) => {
          const cardNumberArray = card["card-number"].match(/.{1,4}/g);
          const expireDateArray = card["expire-date"].match(/.{1,2}/g);
          const colorIndex = Number(card["card-number"]) % 5;
          return (
            <CardItem key={card.nickname}>
              <CardPreview
                cardNumber={cardNumberArray}
                holderName={card["holder-name"]}
                expireDate={expireDateArray}
                color={colorIndex}
              />
              <CardNickname>{card.nickname}</CardNickname>
            </CardItem>
          );
        })}
        <CardShapeButton onClick={() => setPage("CardAdd")}>+</CardShapeButton>
      </CardList>
    </>
  );
}