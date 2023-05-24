import Auth from "../../components/Auth";

export default function Login() {
  return (
    <Auth
      authFormTitle="Faça seu login e comece a usar!"
      submitFormButtonText="Entrar"
      routeName="/signup"
      submitFormButtonAction={() => {}}
    />
  );
}
