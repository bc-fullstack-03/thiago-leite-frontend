import { EnvelopeSimple, Lock } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import LogoParrot from "../../assets/LogoParrot.svg";
import Button from "../Button";
import Heading from "../Heading";
import Text from "../Text";
import { TextInput } from "../TextInput";

interface AuthProps {
  authFormTitle: string;
  submitFormButtonText: string;
  routeName: string;
}

export default function Auth(props: AuthProps) {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <header className="flex flex-col items-center">
        <img src={LogoParrot} alt="Logo Rede social" />
        <Heading size="xlg" className="mt-4">Sysmap Parrot</Heading>
        <Text size="lg" className="mt-2 opacity-50">{props.authFormTitle}</Text>
      </header>
      <form action="" className="flex flex-col items-stretch gap-3 w-full max-w-sm mt-12">
        <Text size="lg">Endereço de e-email</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <EnvelopeSimple />
          </TextInput.Icon>
          <TextInput.Input placeholder="Digite seu e-mail"></TextInput.Input>
        </TextInput.Root>
        <Text size="lg">Senha</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock />
          </TextInput.Icon>
          <TextInput.Input placeholder="*********"></TextInput.Input>
        </TextInput.Root>

        <Button type="submit" className="mt-9">{props.submitFormButtonText}</Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-9">
        <Text asChild size="sm">
          <Link
            to={props.routeName}
            className="underline text-gray-text hover:text-gray-200">Não possui conta? Crie uma agora!</Link>
        </Text>
      </footer>
    </div>
  );
}