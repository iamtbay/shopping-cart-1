import { useContext, useReducer, useEffect, useState } from "react";
import { AllContext } from "../../contexts/AllContext";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
function SingleProduct() {
  const navigate = useNavigate();
  let { id } = useParams();
  const { mainUrl, fetchSingleProduct, singleProductData, cart, addToCart } =
    useContext(AllContext);
  useEffect(() => {
    fetchSingleProduct(`${mainUrl}/${id}`);
  }, [id]);
  const { title, price, description, category, image, rating } =
    singleProductData;

  const initialState = { count: 1 };

  function reducer(state, action) {
    switch (action.type) {
      case "increase":
        return { count: state.count + 1 };
      case "decrease":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Wrapper>
      <div className="backer">
        <BackButton onClick={() => navigate("/")}> Back to homepage</BackButton>
      </div>
      <ImageSection>
        <img src={image} alt={title} />
      </ImageSection>
      <OthersSection>
        <section id="product-info">
          <h5> Product Info : </h5>
          <p>{title}</p>
        </section>
        <section id="product-descr">
          <h5> Product : </h5>
          <p>{description}</p>
        </section>
        <div className="row">
          <section className="product-price">
            <h4> ${price}</h4>
          </section>
          <section className="product-rating">
            {rating && <h5>{rating.rate}/5 ⭐</h5>}
          </section>
        </div>
        <section className="quantity">
          <div className="buttons">
            <Button
              onClick={() => {
                state.count < 10
                  ? dispatch({ type: "increase" })
                  : (state.count = 10);
              }}
            >
              +
            </Button>
            <input type="number" readOnly value={state.count} />
            { /* prettier-ignore */}
            <Button onClick={() => {
                state.count > 1
                  ? dispatch({ type: "decrease" })
                  : (state.count = 1);}}>-
            </Button>
          </div>
          <div>
            <AddButton
              onClick={() => addToCart(id, price, title, state.count, image)}
            >
              {" "}
              Add To Cart
            </AddButton>
          </div>
        </section>
      </OthersSection>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .backer {
    width: 90%;
    display: inline-block;
    padding: 1%;
  }
`;
const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  background: #ff6803;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 1.5rem;
  margin: 0;
`;
const BackButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 2%;
  font-size: 0.9rem;
  border-radius: 20px;
  transition-delay: 1s;

  &:hover {
    &::before {
      content: "<-";
    }
  }
`;
const ImageSection = styled.section`
  width: 30%;
  img {
    width: 100%;
    max-width: 100%;
  }
`;
const AddButton = styled.button`
  background: green;
  border: none;
  outline: none;
  width: 150px;
  height: 60px;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
`;
const OthersSection = styled.section`
  width: 50%;
  justify-content: center;
  padding: 2.5%;
  h5 {
    display: inline;
  }
  p {
    font-size: 0.9rem;
    display: inline;
  }
  section {
    margin-top: 2%;
  }
  .row {
    display: flex;
    justify-content: space-between;
  }
  .product-price {
    display: inline;
  }
  .product-rating {
    display: inline;
  }
  .quantity {
    display: flex;
    justify-content: space-between;
  }
`;

export default SingleProduct;
