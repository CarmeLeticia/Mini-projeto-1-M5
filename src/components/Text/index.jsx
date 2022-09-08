import Form from "../Form";
import style from "./Text.module.css";

function Text() {
  return (
    <section className={style.flex}>
      <div className={style.contentLeft}>
        <h3 className={style.title}>Ajude o algorítimo a ser mais certeiro</h3>
        <p className={style.p}>
          Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis
          conhecidiss, que um alcoolatra anonimis.Leite de capivaris, leite de
          mula manquis sem cabeça.Copo furadis é disculpa de bebadis, arcu quam
          euismod magna.Mauris nec dolor in eros commodo tempor. Aenean aliquam
          molestie leo, vitae iaculis nisl. euzis!Todo mundo vê os porris que eu
          tomo, mas ninguém vê os tombis que eu levo!Vehicula non. Ut sed ex
          eros. Vivamus sit amet nibh non tellus tristique interdum.Mé faiz
          elementum girarzis, nisi eros vermeio. Mauris nec dolor in eros
          commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Leite
          de capivaris, leite de mula manquis sem cabeça.Detraxit consequat et
          quo num tendi nada.Sapien in monti palavris qui num significa nadis i
          pareci latim. Si u mundo tá muito paradis? Toma um mé que o mundo vai
          girarzis!
        </p>
        <p className={style.p}>
          Quem manda na minha terra sou euzis!Todo mundo vê os porris que eu
          tomo, mas ninguém vê os tombis que eu levo!Vehicula non. Ut sed ex
          eros. Vivamus sit amet nibh non tellus tristique interdum.Mé faiz
          elementum girarzis, nisi eros vermeio. Mauris nec dolor in eros
          commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Leite
          de capivaris, leite de mula manquis sem cabeça.Detraxit consequat et
          quo num tendi nada.Sapien in monti palavris qui num significa nadis i
          pareci latim. Si u mundo tá muito paradis?
        </p>
      </div>
      <div className={style.contentRight}>
        <Form />
      </div>
    </section>
  );
}

export default Text;
