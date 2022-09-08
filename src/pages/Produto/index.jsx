import "./style.css";
import Header from "../../components/Header";
import Text from "../../components/Text";
import Card from "../../components/Card";
import Newsletter from "../../components/Newsletter";
import { useState, useEffect } from "react";

function Produto() {
  const [itens, setItens] = useState([]);
  const [page, setPage] = useState(1);

  function nextPage() {
    setPage(page + 1);
    getProductsByPage(page);
  }

  async function getProductsByPage(page) {
    const response = await fetch(
      `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`
    );
    const data = await response.json();
    return setItens([].concat(itens, data.products));
  }

  useEffect(() => {
    getProductsByPage(page);
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <Text />
        <fieldset className="section">
          <legend>Sua seleção especial</legend>
        </fieldset>
        <div className="gridProducts">
          <>
            {itens.map((product, index) => {
              return (
                <>
                  <Card key={index} product={product} />
                </>
              );
            })}
          </>
        </div>
        <button className="btnProducts" onClick={nextPage}>
          Ainda mais produtos aqui!
        </button>
        <fieldset className="section">
          <legend>Compartilhe a novidade</legend>
        </fieldset>
        <Newsletter />
      </main>
      <footer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#707070"
            fill-opacity="0.5"
            d="M0,288L1440,96L1440,320L0,320Z"
          ></path>
        </svg>
      </footer>
    </>
  );
}

export default Produto;
