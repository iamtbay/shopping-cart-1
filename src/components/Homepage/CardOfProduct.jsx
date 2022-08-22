import React, { useState, useContext } from "react";
import { AllContext } from "../../contexts/AllContext";
import styled from "styled-components";
import AddToCart from "../Products/AddToCart";
import { useNavigate } from "react-router-dom";

function CardOfProduct(item) {
  const { data, addToCart } = useContext(AllContext);
  let navigate = useNavigate();
  const {
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  } = item.item;

  return (
    <>
      <Wrapper
        onClick={() => {
          navigate(`products/${id}`);
          //alert(id);
        }}
      >
        <ProductTitle>
          {title.length > 40 ? title.substring(0, 40) + "..." : title}
        </ProductTitle>
        <ImageContainer>
          <img src={image} alt="product" />
        </ImageContainer>
        <Infos>
          <h4>${price}</h4>
          <h5>{rate}/5</h5>
        </Infos>
      </Wrapper>
      <AddToCart item={item.item} />
    </>
  );
}
const Wrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    padding: 2%;
    height: 250px;
    max-height: 250px;
  }
`;
const ImageContainer = styled.section`
  display: flex;
  border-radius: 0px 10px 0px 10px;
  align-items: center;
  justify-content: center;
  padding: 2%;
`;
const Infos = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ProductTitle = styled.h5`
  font-size: 0.9rem;
`;
export default CardOfProduct;
