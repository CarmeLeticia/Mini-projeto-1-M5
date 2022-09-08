import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.headerFlex}>
        <p className={styles.headerTitle}>Uma seleção de produtos</p>
        <p className={styles.headerFocus}>Especial para você</p>
        <p className={styles.header_p}>
          Todos os produtos desta lista foram selecionado a partir da sua
          navegação. Aproveite!
        </p>
        <nav className={styles.btnNav}>
          <button className={styles.btn}>Conheça a Linx</button>
          <button className={styles.btn}>Ajude o algorítimo</button>
          <button className={styles.btn}>Seus produtos</button>
          <button className={styles.btn}>Compartilhe</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
