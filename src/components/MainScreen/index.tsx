import { ReactNode } from "react";
import Menu from "../../components/Menu";

interface MainScreenProps {
  children: ReactNode;

}
export default function MainScreen(props: MainScreenProps) {

  return (
    <div className="w-screen h-screen flex">
      <Menu />
      {props.children}
    </div>
  );
}