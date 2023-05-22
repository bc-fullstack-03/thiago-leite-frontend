import LogoParrot from "./assets/LogoParrot.svg";
import Heading from "./components/Heading";
import Text from "./components/Text";
import {TextInput} from "./components/TextInput";
import {EnvelopeSimple, Lock} from "@phosphor-icons/react";
import Button from "./components/Button";

export default function App() {
    return (
        <div className="flex flex-col items-center justify-center mt-16 mobile:p-8 mobile:mt-0">
            <header className="flex flex-col items-center">
                <img src={LogoParrot} alt="Logo Rede social"/>
                <Heading size="xlg" className="mt-4">Sysmap Parrot</Heading>
                <Text className="mt-2 opacity-50">Faça o login e comece a usar!</Text>
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

                <Button type="submit" className="mt-9">Entrar</Button>
            </form>
            <footer className="flex flex-col items-center gap-4 mt-9">
                <Text asChild size="sm">
                    <a href="" className="underline text-gray-text hover:text-gray-200">Não possui conta? Crie uma agora!</a>
                </Text>
            </footer>
        </div>
    );
}
