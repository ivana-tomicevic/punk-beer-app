import React from "react";
import Modal from "react-modal";
import "../css/Main.css";

export default function BeerItem({ selected, modalIsOpen, closeModal }) {
  return (
    <Modal
      style={{
        content: {
          top: "6rem",
          left: "20rem",
          right: "20rem",
          bottom: "6rem",
          borderRadius: "1rem",
          outline: "none",
        },
      }}
      isOpen={!!modalIsOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => closeModal()}
    >
      <div className="details">
        <img
          style={{ width: "120px", height: "380px" }}
          alt={selected.name}
          src={selected.image_url}
        />
        <div className="description">
          <h1>{selected.name}</h1>
          <h4>{selected.tagline}</h4>
          <p style={{ fontStyle: "oblique", fontSize: "10px" }}>
            {selected.description}
          </p>
          <h4>First brewed: {selected.first_brewed}</h4>
          <h3>ABV: {selected.abv} %</h3>
          <h3>IBU: {selected.ibu} % </h3>
          <h3>EBC: {selected.ebc} %</h3>
          <h3>SRM: {selected.srm} %</h3>
          <h3>PH: {selected.ph} %</h3>
        </div>
      </div>
    </Modal>
  );
}
