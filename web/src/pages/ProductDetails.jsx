import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      <p>Você está vendo o produto de ID: {id}</p>
      <a href="/">Voltar</a>
    </div>
  );
}

export default ProductDetails;
