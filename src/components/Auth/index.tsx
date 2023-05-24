import { EnvelopeSimple, Eye, EyeClosed, Lock } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import LogoParrot from "../../assets/LogoParrot.svg";
import Button from "../Button";
import Heading from "../Heading";
import Text from "../Text";
import { TextInput } from "../TextInput";

interface AuthFormElements extends HTMLFormControlsCollection {
  user: HTMLInputElement;
  password: HTMLInputElement;
}

interface AuthFormElement extends HTMLFormElement {
  readonly elements: AuthFormElements;
}

export interface iAuth {
  user: string;
  name?: string;
  password: string;
}
interface AuthProps {
  authFormTitle: string;
  submitFormButtonText: string;
  routeName: string;
  submitFormButtonAction: (auth: iAuth) => void;
}

export default function Auth(props: AuthProps) {
  const [visible, setVisible] = useState(false);

  function handleSubmit(event: FormEvent<AuthFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const auth = {
      user: form.elements.user.value,
      password: form.elements.password.value,
    };

    props.submitFormButtonAction(auth);
  }

  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <header className="flex flex-col items-center">
        <img src={LogoParrot} alt="Logo Rede social" />
        <Heading size="xlg" className="mt-4">
          Sysmap Parrot
        </Heading>
        <Text size="lg" className="mt-2 opacity-50">
          {props.authFormTitle}
        </Text>
      </header>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-stretch gap-3 w-full max-w-sm mt-12"
      >
        <Text size="lg">Endereço de e-email</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <EnvelopeSimple />
          </TextInput.Icon>
          <TextInput.Input
            id="user"
            placeholder="Digite seu e-mail"
            type="text"
          ></TextInput.Input>
        </TextInput.Root>
        <Text size="lg">Senha</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock />
          </TextInput.Icon>
          <TextInput.Input
            id="password"
            type={visible ? "text" : "password"}
            placeholder="*********"
          ></TextInput.Input>
          <TextInput.Icon>
            <div
              className="w-6 h-6 cursor-pointer"
              onClick={() => setVisible(!visible)}
            >
              {visible ? <Eye size={24} /> : <EyeClosed size={24} />}
            </div>
          </TextInput.Icon>
        </TextInput.Root>

        <Button type="submit" className="mt-9">
          {props.submitFormButtonText}
        </Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-9">
        <Text asChild size="sm">
          <Link
            to={props.routeName}
            className="underline text-gray-text hover:text-gray-200"
          >
            Não possui conta? Crie uma agora!
          </Link>
        </Text>
      </footer>
    </div>
  );
}
