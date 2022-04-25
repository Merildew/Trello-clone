import { useParams } from "react-router-dom";
import { Board } from "../components/Board/Board";

export const BoardPage = (): JSX.Element => {
  let params = useParams();
  return <Board boardId={Number(params.id)} />;
};
