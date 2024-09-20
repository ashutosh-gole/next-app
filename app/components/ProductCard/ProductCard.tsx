import AddToCart from "../AddToCart";
// import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className="p-5 my-5 bg-orange-200 text-white text-xl hover:bg-orange-600">
      <AddToCart />
    </div>
  );
};

export default ProductCard;
