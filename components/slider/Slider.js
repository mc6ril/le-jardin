import { useCallback, useEffect, useState } from "react";
import json from "./dataSlider";
import BtnSlide from "./BtnSlide";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowSize from "../functions/Window";

const Slider = () => {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });

  const size = useWindowSize();

  const previousSlide = () => {
    if (slideAnim.index === 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: json.length, inProgress: true });

      setTimeout(setSlideAnim({ index: json.length, inProgress: false }), 400);
    } else if (slideAnim.index !== 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index - 1, inProgress: true });

      setTimeout(setSlideAnim({ index: slideAnim.index - 1, inProgress: false }), 400);
    }
  };

  const nextSlide = useCallback(() => {
    if (slideAnim.index === json.length && !slideAnim.inProgress) {
      setSlideAnim({ index: 1, inProgress: true });

      setTimeout(setSlideAnim({ index: 1, inProgress: false }), 400);
    } else if (slideAnim.index !== json.length && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index + 1, inProgress: true });

      setTimeout(setSlideAnim({ index: slideAnim.index + 1, inProgress: false }), 1000);
    }
  }, [slideAnim.index, slideAnim.inProgress]);

  // autoplay function
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const slideDown = () => {
    window.scrollTo(0, size.height);
  };

  return (
    <div className="container-slider">
      {json.map((obj, i) => {
        return (
          <div
            key={obj.id}
            className={slideAnim.index === i + 1 ? "slide active-anim" : "slide"}
          >
            <Image src={`/static/images/img${i + 1}.jpg`} alt={obj.title} layout="fill" />

            <BtnSlide
              direction={"prev"}
              iconName="chevron-left"
              moveSlide={previousSlide}
            />
            <BtnSlide direction={"next"} iconName="chevron-right" moveSlide={nextSlide} />
            <button className={`btn-slide down`} onClick={() => slideDown()}>
              <FontAwesomeIcon icon="chevron-down" size="2x" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
