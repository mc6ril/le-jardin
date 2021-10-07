import Image from "next/image";

const BtnSlide = ({ direction, icon, moveSlide }) => {
  return (
    <button className={`btn-slide ${direction}`} onClick={moveSlide}>
      <Image
        src={icon}
        alt="icone de déplacement du carroussel"
        width="50px"
        height="50px"
      />
    </button>
  );
};

export default BtnSlide;
