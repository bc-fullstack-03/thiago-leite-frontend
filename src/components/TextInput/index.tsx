import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

interface TextInputRootProps {
    children: ReactNode
}
function TextInputRoot(props: TextInputRootProps ) {
    return (
        <div className="flex items-center gap-3 py-4 px-3 bg-[#202024] rounded focus-within:ring-2 ring-cyan-300 w-fullhh">
            {props.children}
        </div>
    );
}

type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>
function TextInputInput(props: TextInputInputProps) {
    return (
        <input className="bg-transparent flex-1 text-gray-text text-xs outline-none placeholder:text-gray-400"
               {...props}
        />
    )
}

interface TextInputIconProps {
    children: ReactNode;
}
function TextInputIcon(props: TextInputIconProps) {
    return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}