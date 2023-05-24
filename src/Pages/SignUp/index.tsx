import { useNavigate } from "react-router-dom";
import Auth, { iAuth } from "../../components/Auth";
import api from "../../services/api";

export default function SignUp() {
  const navigate = useNavigate();
  async function handleRegister(auth: iAuth) {
    try {
      await api.post("/security/register", auth);
      // navigate("/");
    } catch (err) {
      alert("Erro na criação do usuário, tente novamente.");
    }
  }

  return (
    <Auth
      authFormTitle="Cadastre-se e comece a usar!"
      submitFormButtonText="Cadastar"
      submitFormButtonAction={handleRegister}
      routeName="/"
    />
  );
}
