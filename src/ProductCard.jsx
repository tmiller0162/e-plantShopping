export default function ProductCard({ plant, onAddToCart }) {
  let { name, image, description, cost } = { ...plant };
  return (
    <div className="product-card">
      <div className="product-title">{name}</div>
      <img className="product-image" src={image} width="200px" height="200px" />
      <div className="product-description">{description}</div>
      <div className="product-cost">{cost}</div>
      <button className="product-button" onClick={() => onAddToCart(plant)}>
        Add to Cart
      </button>
    </div>
  );
}
