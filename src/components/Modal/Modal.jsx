import "./index.css";
import Button from "../Button";

const Modal = ({ setVisibile, deleteFn, modalText }) => {
  return (
    <div className="Modal__overlay">
      <div className="Modal">
        <p className="Modal__desc">{modalText}</p>
        <div className="Modal__btns">
          <Button
            onClick={() => {
              deleteFn();
            }}
            color="green"
            textContent="Si"
          />

          <Button
            onClick={() => setVisibile(false)}
            color="red"
            textContent="No"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
