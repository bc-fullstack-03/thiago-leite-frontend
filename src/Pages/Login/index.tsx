import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Auth, { iAuth } from "../../components/Auth";
import api from "../../services/api";

interface UserToken {
  profile: string;
  user: string;
}

export default function Login() {
  const navigate = useNavigate();
  async function handleLogin(auth: iAuth) {
    try {
      const { data } = await api.post("/security/login", auth);
      const decodeToken = jwtDecode(data.accessToken) as UserToken;
      localStorage.setItem("profile", decodeToken.profile);
      localStorage.setItem("user", decodeToken.user);
      localStorage.setItem("accessToken", data.accessToken);
      navigate("/home");
    } catch (err) {
      alert("Erro, o usuário não existe.");
    }
  }

  return (
    <Auth
      authFormTitle="Faça seu login e comece a usar!"
      submitFormButtonText="Entrar"
      routeName="/signup"
      submitFormButtonAction={handleLogin}
    />
  );
}
