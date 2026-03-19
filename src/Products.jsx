import Card from "./card";

function Products() {
  return (
    <div>
      <h2>My Products</h2>

      <div className="card-container">
        <Card name="Life Insurance" description="Insurance for your Life" />
        <Card name="Home/Boat/Auto Insurance" description="Insurance for your valuables" />
        <Card name="Geico" description="Geico" />
      </div>
    </div>
  );
}

export default Products;