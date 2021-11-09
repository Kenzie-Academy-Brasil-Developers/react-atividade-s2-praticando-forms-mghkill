import { useHistory } from "react-router";
import "./styles.css";
const Card = ({ setFormValue, setAllowed, allowed, formValue }) => {
  const history = useHistory();

  if (!allowed) {
    history.push("/");
  }

  const handleReturn = () => {
    setAllowed(false);
    setFormValue({});
    history.push("/");
  };
  return (
    <div className="card">
      <div>
        <p>Usuário: {formValue.user}</p>
        <p>Nome: {formValue.name}</p>
        <p>Senha: {formValue.password}</p>
        <p>Email: {formValue.email}</p>
      </div>

      <button onClick={handleReturn} className="card__button">
        Retornar
      </button>
    </div>
  );
};
export default Card;
