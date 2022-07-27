import Modal from "../Modal";
import { useState } from "react";
import "./index.css";

const MessageCard = ({ textContent, isRenderedList, deleteFn }) => {
  const [isVisibile, setVisibile] = useState(false);

  return (
    <div className="MessageCard">
      <button onClick={() => setVisibile(true)} className="MessageCarddelete">
        X
      </button>
      <p className="MessageCardtext">{textContent.text}</p>
      <div className="MessageCardinfo">
        <p className="MessageCardinfo--sender">{textContent.sender}</p>
        <p className="MessageCard__info--date">{textContent.date}</p>
      </div>
      {isVisibile && (
        <Modal
          deleteFn={deleteFn}
          modalText={"Sei sicuro di voler cancellare il messaggio?"}
          setVisibile={setVisibile}
        />
      )}
    </div>
  );
};

export default MessageCard;
