"use client";
import React, { useRef, useState } from "react";
import cls from "./image-picker.module.css";
import Image from "next/image";
const ImagePicker = ({ label, name }) => {
  const [pickedImg, setSickedImg] = useState(null);
  const pickerRef = useRef();
  const handlePickClick = () => {
    pickerRef.current.click();
  };
  const handleImgChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setSickedImg(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setSickedImg(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={cls.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={cls.controls}>
        <div className={cls.preview}>
          {!pickedImg && <p>No image picked yet.</p>}
          {pickedImg && <Image src={pickedImg} alt="picked image" fill />}
        </div>
        <input
          ref={pickerRef}
          className={cls.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          onChange={handleImgChange}
          required
        />
        <button className={cls.button} type="button" onClick={handlePickClick}>
          Choose Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
