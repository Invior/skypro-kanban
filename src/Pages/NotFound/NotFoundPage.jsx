import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const returnHome = () => {
    navigate(appRoutes.HOME);
  }
  return <>
  <div>Страница не найдена</div>
  <div><button onClick={returnHome}>На Главную</button></div>
  </>;
}
