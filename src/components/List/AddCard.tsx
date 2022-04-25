import * as styles from "./styles.css";
import cross from "../../assets/images/cross.svg";
import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/reducers/listReducer";
import { createActivity } from "../../redux/reducers/boardReducer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { listSelector } from "../../redux/reducers/selectors";

type Props = {
  id: number;
  onClose: () => void;
};

export const AddCard = ({ onClose, id }: Props): JSX.Element => {
  const [cardValue, setCardValue] = useState<string>("");
  const params = useParams();

  const listArray = useSelector(listSelector);
  const list = listArray.find((list) => list.id === id);

  const dispatch = useDispatch();
  const handleAddClick = () => {
    if (cardValue === "") {
      return;
    }
    dispatch(addCard({ id: id, value: cardValue }));
    dispatch(
      createActivity({
        id: Number(params.id),
        action: `User added ${cardValue} to ${list?.title}`,
        time: Date.now(),
      })
    );
    onClose();
  };
  return (
    <div>
      <textarea
        className={styles.addCardText}
        placeholder="Enter a title for this card... "
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setCardValue(event.target.value);
        }}
      ></textarea>
      <div className={styles.addCardControlPanel}>
        <button className={styles.addCardConfirm} onClick={handleAddClick}>
          Add card
        </button>
        <img className={styles.addCardClose} src={cross} onClick={onClose} />
      </div>
    </div>
  );
};
