import React, { useState } from "react";
import "../css/Main.css";
import Modal from "react-modal";
import Carousel, { consts } from "react-elastic-carousel";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import BeerItem from "./BeerItem";

Modal.setAppElement("#root");
export default function BeerList({
  beerList,
  handleClick,
  closeModal,
  modalIsOpen,
}) {
  const [selected, setSelected] = useState(null);

  const breakPoints = [{ itemsToShow: 4, width: 1200 }];

  return (
    <div>
      <div className="scroll">
        <Carousel
          pagination={false}
          breakPoints={breakPoints}
          renderArrow={({ type, onClick }) => {
            const pointer =
              type === consts.PREV ? (
                <IoIosArrowBack style={{ fontSize: "3rem" }} />
              ) : (
                <IoIosArrowForward style={{ fontSize: "3rem" }} />
              );
            return (
              <button className="arrow" onClick={onClick}>
                {pointer}
              </button>
            );
          }}
        >
          {beerList.map((beer, id) => {
            return (
              <div key={id} className="products">
                <div
                  className="image"
                  onClick={() =>
                    setSelected(
                      beerList.find((b) => b.id === beer.id),
                      handleClick()
                    )
                  }
                >
                  <img src={beer.image_url} alt={beer.name} />
                </div>
                <div className="description">
                  <h2
                    style={{
                      backgroundColor: "rgb(18, 18, 18 )",
                      color: "white",
                      borderRadius: "1rem",
                      padding: "4px 8px ",
                      maxWidth: "max-content",
                      margin: "0 auto",
                      width: "50%",
                    }}
                  >
                    {beer.abv} %
                  </h2>
                  <h4
                    style={{
                      color: "white",
                      fontSize: "1.5vmin",
                      textSizeAdjust: "80%",
                      textTransform: "uppercase",
                    }}
                  >
                    {beer.name}{" "}
                  </h4>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      {selected && (
        <BeerItem
          selected={selected}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}
