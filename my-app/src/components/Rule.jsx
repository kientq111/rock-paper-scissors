export const Rule = ({ modalState, handleModal }) => {
  return (
    <div className="rule-modal">
      <div>
        <p>RULES</p>
        <img
          className="button-exit"
          onClick={() => handleModal(modalState)}
          src="./images/icon-close.svg"
        />
      </div>
      <img className="img-rule" src="./images/image-rules.svg" alt="a" />
    </div>
  );
};
