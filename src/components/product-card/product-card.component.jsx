// import "./product-card.styles.scss";

import Button,{Button_TYPE_CLASSES} from "../button/button.component";
import { useState,useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const {addItemToCart} = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div
      className="products-card-container"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "350px",
        position: "relative",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imageUrl}
        alt={`${name}`}
        style={{
          width: "100%",
          height: "95%",
          objectFit: "cover",
          marginBottom: "5px",
          opacity: isHover ? "0.8" : "1",
        }}
      />
      <div
        className="footer"
        style={{
          width: "100%",
          height: "5%",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "18px",
        }}
      >
        <span className="name" style={{ width: "90px", marginBottom: "15px" }}>
          {name}
        </span>
        <span className="price" style={{ width: "10%" }}>
          {price}
        </span>
      </div>
      <Button
        style={{
          width: "80%",
          position: "absolute",
          top: "255px",
          display: isHover ? "flex" : "none",
          opacity: isHover ? "0.85" : "0.7",
        }}
        buttonType={Button_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
