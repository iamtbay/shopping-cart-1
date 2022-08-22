import React, { useContext } from "react";
import styled from "styled-components";
import { AllContext } from "../../contexts/AllContext";

function AddToCart(item) {
  const { id, price, title, image } = item.item;
  const { addToCart } = useContext(AllContext);
  return (
    <Wrapper>
      {/*   */}
      <Button onClick={() => addToCart(id, price, title, 1, image)}>
        Add To Cart
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1%;
  align-items: center;
  justify-content: center;
  bottom: 0;
  right: 0;
`;
const Button = styled.button`
  display: flex;
  padding: 5% 10%;
  border: none;
  outline: none;
  background: #f58742;
  border-radius: 20px;
  font-size: 1.1rem;
  cursor: pointer;
`;
export default AddToCart;
