import React from "react";
import styles from "./Card.module.css";

function Card({ product }) {
  if (!product) return <></>;

  return (
    <>
      <div key={product.id} className={styles.cardProduct}>
        <img src={product.image} className={styles.cardImage}></img>
        <p className={styles.cardName}>{product.name}</p>
        <p>{product.description}</p>
        <p>De: R${product.oldPrice.toFixed(2).replace(".", ",")}</p>
        <p className={styles.cardFocus}>
          Por: R$ {product.price.toFixed(2).replace(".", ",")}
        </p>
        <p>
          ou {product.installments.count}x de R$
          {product.installments.value.toFixed(2).replace(".", ",")}
        </p>
        <button className={styles.btnCard}>Comprar</button>
      </div>
    </>
  );
}

export default Card;
