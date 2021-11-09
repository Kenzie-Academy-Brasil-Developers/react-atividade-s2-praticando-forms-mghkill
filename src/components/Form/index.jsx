import "./styles.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  //   const formSchema = yup.object().shape({
  //     name: yup.stryng().required("Email obrigatório").email("E-mail inválido"),
  //     confirmName: yup
  //       .stryng()
  //       .required("Email obrigatório")
  //       .email("E-mail inválido"),

  //     email: yup.stryng().required("Obrigatório").email(),
  //     confirmEmail: yup
  //       .stryng()
  //       .email()
  //       .oneOf([yup.ref("email"), null], "msg"),
  //   });
  const { register, handleSubmit } = useForm();

  const onSubmitFunction = (date) => {
    console.log(date);
  };
  return (
    <div>
      <h3>Página de cadastro</h3>
      <form className="form" onSubmit={() => handleSubmit(onSubmitFunction)}>
        <input placeholder="Nome de usuário *" {...register("name")} />
        <input placeholder="Nome completo *" {...register("confirmName")} />

        <input placeholder="Email *" {...register("email")} />
        <input placeholder="Confirmar Email *" {...register("confirmEmail")} />

        <div className="form__password">
          <input
            placeholder="Senha *"
            type="password"
            {...register("password")}
          />
          <input
            placeholder="Confirmar senha *"
            {...register("confirm-password")}
          />
        </div>

        <input type="checkbox" {...register("check")} />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
export default Form;
