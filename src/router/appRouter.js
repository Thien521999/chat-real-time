// components
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import ChatRoom from "../pages/ChatRoom";

export const routes = [
  {
    id: 1,
    path: "/",
    component: ChatRoom,
  },
  {
    id: 2,
    path: "/login",
    component: Login,
  },
  {
    id: 3,
    component: NotFound,
  },
];
