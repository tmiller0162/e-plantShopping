export default function ProductCard({ name, image, description, cost }) {
  return (
    <div className="card">
      <p>{name}</p>
      <img src={image} width="200px" height="200px" />
      <p>{description}</p>
      <p>{cost}</p>
    </div>
  );
}
