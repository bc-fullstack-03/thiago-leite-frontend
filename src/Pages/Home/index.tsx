import { useEffect } from "react";
import api from "../../services/api";
import getAuthHeader from "../../services/auth";


export default function Home() {
  const authHeader = getAuthHeader();

  useEffect(() => {
    async function getPosts() {
      try{
        const { data } = await api.get("/feed", authHeader);
        console.log(data);
      } catch (err) {
        console.log(err);
        alert("Erro ao carregar os posts");
      }
    }
    getPosts();
  }, [authHeader]);
    
  return (
    <h1>Home</h1>
    );
}