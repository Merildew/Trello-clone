import { useState } from "react";
import * as styles from "./styles.css";
import { ListHeader } from "./ListHeader";
import { AddCard } from "./AddCard";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

type Props = {
  id: number;
  cards: Array<string>;
  title: string;
};

type cardProps = {
  value: string;
  id: number;
};

export const Card = ({ value, id }: cardProps): JSX.Element => {
  return (
    <Draggable draggableId={String(id)} index={id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className={styles.listCard}
        >
          {value}
        </div>
      )}
    </Draggable>
  );
};

export const List = ({ id, cards, title }: Props): JSX.Element => {
  const [open, setOpen] = useState<boolean>(true);
  const dispatch = useDispatch();
  const handleCloseClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.listWrapper}>
      <ListHeader id={id} title={title} />
      <Droppable droppableId={String(id)}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {cards.map((card, index) => (
              <Card key={index} value={card} id={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {open ? (
        <div
          className={styles.addCardButton}
          onClick={() => {
            setOpen(!open);
          }}
        >
          + Add a card
        </div>
      ) : (
        <AddCard onClose={handleCloseClick} id={id} />
      )}
      <div></div>
    </div>
  );
};
