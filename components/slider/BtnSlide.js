import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BtnSlide = ({ direction, iconName, moveSlide }) => {
  return (
    <button className={`btn-slide ${direction}`} onClick={moveSlide}>
      <FontAwesomeIcon icon={iconName} size="2x" />
    </button>
  );
};

export default BtnSlide;
