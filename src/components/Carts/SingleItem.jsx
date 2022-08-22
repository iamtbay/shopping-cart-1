import React, { useContext } from "react";
import styled from "styled-components";
import { AllContext } from "../../contexts/AllContext";

function SingleItem({ item }) {
  const { deleteFromCart } = useContext(AllContext);

  const { id, image, price, quantity, title } = item;
  return (
    <Wrapper>
      <ImageContainer>
        <img src={image} alt={title} />
      </ImageContainer>
      <InformationSection>
        <div className="titleDiv">
          <p className="title">Product Name : </p>
          <p>{title}</p>
        </div>
        <div className="priceDiv">
          <p className="title">Price : </p>
          <p>${price}</p>
        </div>
        <div className="quantityDiv">
          <p>Quantity : </p>
          {quantity}
        </div>
        <div className="summary">
          <p className="title">Total :</p>
          <p>{`${price} * ${quantity} = ${price * quantity}`}</p>
        </div>
      </InformationSection>
      <div className="button">
        <Button onClick={() => deleteFromCart(id)}>Delete It</Button>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 0;
  padding: 2%;
  justify-content: space-between;
  .button {
    width: 25%;
    display: flex;
    height: 50px;
    justify-content: flex-end;
    align-content: center;
  }
  .summary {
    .title {
      font-weight: bold;
      font-size: 0.8rem;
    }
  }
`;
const Button = styled.button`
  min-width: 60px;
  width: 40%;
  border: none;
  cursor: pointer;
  background: red;
  border-radius: 20px;
`;
const InformationSection = styled.div`
  margin-left: 10%;
  .title {
    font-weight: bold;
  }
  p {
    display: inline;
  }
`;
const ImageContainer = styled.div`
  width: 200px;
  height: 250px;
  img {
    width: 100%;
    height: 250px;
    border-radius: 20px;
  }
`;
export default SingleItem;
