import React from "react";
import styles from "../../styles/Utils.module.css";

const textBox = (props: { width: string; height: string }) => {
  const textBox = {
    width: props.width,
    height: props.height,
  };

  return (
    <>
      <input type={"text"} style={textBox}></input>
    </>
  );
};

export default textBox;
