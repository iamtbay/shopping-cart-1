import React, { useContext } from "react";
import styled from "styled-components";
import { AllContext } from "../../contexts/AllContext";
import SingleItem from "../Carts/SingleItem";
function Cart() {
  const { cart } = useContext(AllContext);
  let price = 0;
  let totalPrice = cart.map((item) => {
    price += item.price * item.quantity;
  });
  return (
    <Wrapper>
      {cart.length < 1 ? (
        <p>No info</p>
      ) : (
        cart.map((item) => {
          return (
            <>
              <SingleItem key={item.id} item={item} />
            </>
          );
        })
      )}

      {cart.length > 0 && (
        <div className="amountSec">
          <p>Total Amount :</p> <h3> {price}</h3>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
  margin: auto;
  border: 1px solid #fff;
  border-radius: 20px;
  .amountSec {
    background: #10e629;
    width: 50%;
    display: flex;
    border-radius: 20px;
    justify-content: center;
    margin: 2% auto;
    padding: 2%;
  }
`;

export default Cart;
