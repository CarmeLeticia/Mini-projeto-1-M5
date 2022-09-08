import styles from "./Form.module.css";
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit, errors } = useForm({
    register: {
      name: "",
      email: "",
      cpf: "",
      radio: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form className={styles.formContent} onSubmit={handleSubmit(onSubmit)}>
      <label>Seu nome:</label>
      <input
        className={styles.styleInput}
        {...register("name", { required: true, minLength: 3 })}
      />
      <label>E-mail</label>
      <input
        className={styles.styleInput}
        {...register("email", {
          pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
        })}
      />
      <label>CPF:</label>
      <input
        className={styles.styleInput}
        {...register("cpf", { pattern: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/ })}
      />
      <div className={styles.styleCheckbox}>
        <input
          type="checkbox"
          id="masculino"
          name="masculino"
          value="masculino"
          {...register("checkbox")}
        />
        <label htmlFor="masculino">
          Masculino
        </label>
        <input
          type="checkbox"
          id="feminino"
          name="feminino"
          value="feminino"
          {...register("checkbox")}
        />
        <label htmlFor="feminino">Feminino</label>
      </div>
      <input className={styles.btnForm} type="submit" value="Enviar" />
    </form>
  );
}

export default Form;
