import House from "../Icons/House";
import Text from "../Text";

export default function MenuItem() {
  return (
    <li className="mt-5">
      <div className="relative flex items-center py-2 rounded-full hover:bg-sky-400 ml-2 cursor-pointer">
        <House />
        <Text size="2xl" className="font-extrabold ml-4">
          Página Inicial
        </Text>
      </div>
    </li>
  );
}