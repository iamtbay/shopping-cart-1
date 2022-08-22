import React, { useEffect, useContext, useState } from "react";
import { AllContext } from "../../contexts/AllContext";
import styled from "styled-components";
import CardOfProduct from "./CardOfProduct";
import AddToCart from "../Products/AddToCart";
function Homepage() {
  const { productUrl, data, fetchProducts } = useContext(AllContext);

  useEffect(() => {
    fetchProducts(productUrl);
  }, [productUrl]);
  return (
    <Wrapper>
      {data.map((item) => {
        return (
          <Card key={item.id}>
            <CardOfProduct item={item} />
          </Card>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 20%;
  padding: 1%;
  box-shadow: 0px 1px 2px 2px #aba8a6;
  border-radius: 20px 0px 20px 20px;
  margin: 1%;
  @media (max-width: 768px) {
    width: 45%;
    margin: 3% 1%;
  }
`;

export default Homepage;
