import { useEffect, useState } from "react";
import api from "../../services/api";
import getAuthHeader from "../../services/auth";
import Feed from "../../components/Feed";
import MainScreen from "../../components/MainScreen";
import { Post } from "../../Model/Post";


export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]); // <1>
  const authHeader = getAuthHeader();

  useEffect(() => {
    async function getPosts() {
      try {
        const { data } = await api.get("/feed", authHeader);
        setPosts(data);
      } catch (err) {
        console.log(err);
        alert("Erro ao carregar os posts");
      }
    }
    getPosts();
  }, []);

  return (
    <div className="w-screen h-screen flex">
      <MainScreen>
        <Feed posts={posts}/>
      </MainScreen>
    </div>
  );
}