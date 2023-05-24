import { Link } from "react-router-dom";
import { ReactNode } from "react";
import House from "../Icons/House";
import Perfil from "../Icons/Perfil";
import Friends from "../Icons/Friends";
import Text from "../Text";

interface MenuItemProps {
  menuTitle: string;
  menuIcon: ReactNode;
  route: string;
}
export default function MenuItem(props: MenuItemProps) {
  return (
    <li className="mt-5">
      <Link to={props.route} className="relative flex items-center py-2 rounded-full hover:bg-sky-400 ml-2 cursor-pointer">
        <div className="relative flex items-center py-2 rounded-full hover:bg-sky-400 ml-2 cursor-pointer">
          {menuItemIcon(props)}
          <Text size="2xl" className="font-extrabold ml-4">
            {props.menuTitle}
          </Text>
        </div>
      </Link>
    </li>
  );
}

export function menuItemIcon(props: MenuItemProps) {
  switch (props.menuTitle) {
    case "Página Inicial":
      return <House />;
    case "Perfil":
      return <Perfil />;
    case "Amigos":
      return <Friends />;
    default:
      return null;
  }
}