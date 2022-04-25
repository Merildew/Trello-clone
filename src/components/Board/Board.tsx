import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { createList, dropCard } from "../../redux/reducers/listReducer";
import { listSelector } from "../../redux/reducers/selectors";
import { List } from "../List/List";
import { BoardHeader } from "./BoardHeader";
import * as styles from "./styles.css";

type Props = {
  boardId: number;
};

export const Board = ({ boardId }: Props): JSX.Element => {
  const listArray = useSelector(listSelector);
  const dispatch = useDispatch();

  const listComponents = listArray.map((list) => {
    if (list.boardId === boardId)
      return (
        <List
          id={list.id}
          cards={list.cards}
          title={list.title}
          key={list.id}
        />
      );
  });

  const dragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    // console.log(destination, source, draggableId);
    if (!destination) return;
    dispatch(
      dropCard({
        initID: source.index,
        finalId: destination.index,
        sourceListId: Number(source.droppableId),
        destListId: Number(destination.droppableId),
      })
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.boardWrapper}>
        <BoardHeader />
        <div className={styles.listBoard}>
          <DragDropContext onDragEnd={dragEnd}>
            {listComponents}
          </DragDropContext>
          <button
            className={styles.addListButton}
            onClick={() => {
              dispatch(createList(boardId));
            }}
          >
            + Add another list
          </button>
        </div>
      </div>
    </div>
  );
};
