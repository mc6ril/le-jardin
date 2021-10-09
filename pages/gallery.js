import Layout from "../components/layout/Layout";
import json from "../components/slider/dataSlider";
import Image from "next/image";
import { useState } from "react";
import useWindowSize from "../components/functions/Window";

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(-1);

  const toggleShowImage = (index) => {
    if (index >= 0) {
      setActiveImage(index);
    } else {
      setActiveImage(-1);
    }
  };

  const size = useWindowSize();

  if (!size.height || !size.width) {
    return "";
  }

  return (
    <Layout page={"Gallerie photo - Gite le Jardin"}>
      <section className="gallery">
        <div className="wrapper">
          <h1>Le Jardin</h1>
          <div className="gallery-images">
            {json.map((image, i) => {
              return (
                <div
                  key={image.id}
                  className={activeImage === i ? "image active" : "image"}
                >
                  {activeImage >= 0 ? (
                    <Image
                      src={`/static/images/img${i + 1}.jpg`}
                      alt={image.title}
                      layout="responsive"
                      width={size.width}
                      height={size.height}
                      onClick={() => {
                        toggleShowImage(-1);
                      }}
                    />
                  ) : (
                    <Image
                      src={`/static/images/img${i + 1}.jpg`}
                      alt={image.title}
                      layout="responsive"
                      width={250}
                      height={200}
                      onClick={() => {
                        toggleShowImage(i);
                      }}
                    />
                  )}

                  {activeImage >= 0 && (
                    <div
                      className="close-image"
                      onClick={() => {
                        toggleShowImage(-1);
                      }}
                    >
                      <span></span>
                      <span></span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
