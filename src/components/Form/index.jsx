import "./styles.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";

const Form = ({ setAllowed, setFormValue }) => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    user: yup
      .string()
      .required("User obrigatório")
      .max(18, "Máximo 18 caracters"),
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email(),
    checkemail: yup
      .string()
      .required("Confirmação obrigatória")
      .email()
      .oneOf([yup.ref("email")], "Emails não são iguais!"),

    password: yup
      .string()
      .required("Senha obrigatório")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Maiúsculas, minúsculas, especiais %$#@%, 8 caracters +"
      ),

    checkpassword: yup
      .string()
      .required("Confirmação obrigatória")
      .oneOf([yup.ref("password")], "Senhas não são iguais!"),
    terms: yup
      .boolean()
      .oneOf([true], "É necessário aceitar os termos para continuar"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleRegister = (event) => {
    setAllowed(true);
    setFormValue(event);
    history.push("/card");
  };
  return (
    <div className="form">
      <h1>Página de cadastro</h1>
      <form onSubmit={handleSubmit(handleRegister)}>
        <input placeholder="Nome de usuário*" {...register("user")} />
        <div className="form__erro">{errors.user?.message}</div>

        <input placeholder="Nome completo*" {...register("name")} />
        <div className="form__erro">{errors.name?.message}</div>

        <input placeholder="Endereço de Email*" {...register("email")} />
        <div className="form__erro">{errors.email?.message}</div>

        <input placeholder="Confirme seu Email*" {...register("checkemail")} />
        <div className="form__erro">{errors.checkemail?.message}</div>

        <div className="form__password">
          <input
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          <input
            placeholder="Repetir Senha"
            type="password"
            {...register("checkpassword")}
          />
        </div>

        <div className="form__erro">{errors.password?.message}</div>

        <div className="form__erro">{errors.checkpassword?.message}</div>

        <div className="form__checkbox">
          <input id="terms" type="checkbox" {...register("terms")} />
          <label htmlFor="terms">Eu aceito os termos desta aplicação</label>
        </div>

        <div className="form__erro">{errors.terms?.message}</div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Form;
