// import ParrotIconHome from "../../assets/ParrotIconHome.svg";
// import House from "../Icons/House";
import MenuLogo from "../Icons/MenuLogo";
import MenuItem from "../MenuItem";
import Text from "../Text";

export default function Menu() {
  return (
    <div className="w-[293px] border-r border-slate-400 ml-4 pt-4">
      <div className="flex items-center ml-4">
        <MenuLogo />
        <Text size="2xl" className="font-extrabold ml-4">
          Parrot
        </Text>
      </div>

      <ul className="pr-2">
        <MenuItem menuTitle="Página Inicial" menuIcon />
        <MenuItem menuTitle="Perfil" menuIcon />
        <MenuItem menuTitle="Amigos" menuIcon />
      </ul>
    </div>
  );
}