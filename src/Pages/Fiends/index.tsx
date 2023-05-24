import FriendList from "../../components/FriendList";
import MainScreen from "../../components/MainScreen";


export default function Friends() {

  return (
    <div className="w-screen h-screen flex">
      <MainScreen>
        <FriendList />
      </MainScreen>
    </div>
  );
}