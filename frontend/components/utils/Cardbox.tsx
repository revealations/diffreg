import React, { HtmlHTMLAttributes, ReactNode } from "react";
import styles from "../../styles/Utils.module.css";

const Cardbox = (props: { width: string; height: string }) => {
  const cardbox = {
    width: props.width + "px",
    height: props.height + "px",
  };

  return (
    <>
      <div style={cardbox}>d</div>
    </>
  );
};

export default Cardbox;
