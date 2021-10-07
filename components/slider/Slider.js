import { useCallback, useEffect, useRef, useState } from "react";
import json from "./dataSlider";
import leftArrow from "./icons/left-arrow.svg";
import rigthArrow from "./icons/right-arrow.svg";
import BtnSlide from "./BtnSlide";
import Image from "next/image";

const Slider = () => {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });

  const nextSlide = useCallback(() => {
    if (slideAnim.index === json.length && !slideAnim.inProgress) {
      setSlideAnim({ index: 1, inProgress: true });

      setTimeout(setSlideAnim({ index: 1, inProgress: false }), 400);
    } else if (slideAnim.index !== json.length && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index + 1, inProgress: true });

      setTimeout(setSlideAnim({ index: slideAnim.index + 1, inProgress: false }), 1000);
    }
  }, [slideAnim.index, slideAnim.inProgress]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const previousSlide = () => {
    if (slideAnim.index === 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: json.length, inProgress: true });

      setTimeout(setSlideAnim({ index: json.length, inProgress: false }), 400);
    } else if (slideAnim.index !== 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index - 1, inProgress: true });

      setTimeout(setSlideAnim({ index: slideAnim.index - 1, inProgress: false }), 400);
    }
  };

  const moveDot = (index) => {
    setSlideAnim({ index: index, inProgress: false });
  };

  return (
    <div className="container-slider">
      {json.map((obj, i) => {
        return (
          <div
            key={obj.id}
            className={slideAnim.index === i + 1 ? "slide active-anim" : "slide"}
          >
            <Image
              src={`/static/images/img${i + 1}.jpg`}
              alt="Le gite en photo"
              layout="fill"
            />
            <BtnSlide direction={"prev"} icon={leftArrow} moveSlide={previousSlide} />
            <BtnSlide direction={"next"} icon={rigthArrow} moveSlide={nextSlide} />

            <div className="container-dots">
              {Array.from({ length: json.length }).map((item, i) => {
                return (
                  <button
                    key="i"
                    className={slideAnim.index === i + 1 ? "dot active" : "dot"}
                    onClick={() => moveDot(i + 1)}
                  ></button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
