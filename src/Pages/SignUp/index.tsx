import Auth from "../../components/Auth";

export default function SignUp() {
  return (
    <Auth
      authFormTitle="Faça seu registro!"
      submitFormButtonText="Registrar"
      routeName="/"
    />
  );
}