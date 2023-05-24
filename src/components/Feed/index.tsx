// import { ReactNode } from "react";
import { UserCircle } from "@phosphor-icons/react";
import { Post } from "../../Model/Post";
import Heading from "../Heading";
import Text from "../Text";

interface FeedProps {
  posts: Post[];
}

export default function Feed(props: FeedProps) {
  console.log(props.posts);
  return (
    <div className="flex-1 overflow-y-auto scroll-smooth">
      {/* {props.posts.map((post) => () => {})} */}
      <Heading className="border-b border-slate-400 mt-4">
        <Text size="lg" className="font-extrabold ml-5">
          Página Inicial
        </Text>
        <div className="flex items-center ml-5 my-4">
          <UserCircle className="w-10 h-10 text-gray-100" />
          <Text className="font-extrabold ml-2">Fulano</Text>
        </div>
      </Heading>
    </div>
  );
}