import React from "react";
import Image from "next/image";

interface Props {
  BannerSize: string;

  imageClassName?: string;
  imageSrc: string;

  textClassName: string;
  text: string;

  subtextClassName?: string;
  subtext?: string;
}

//imagesrc.slice(1, -4)
const BannerHome = (props: Props) => {
  return (
    <div className={`relative ${props.BannerSize}`}>
      <Image
        src={props.imageSrc}
        alt="fundo"
        fill
        className={`object-cover ${props.imageClassName || ""}`}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/10">
        <h1 className={props.textClassName}>{props.text}</h1>
        {props.subtext && (
          <p className={props.subtextClassName || ""}>{props.subtext}</p>
        )}
      </div>
    </div>
  );
};

export default BannerHome;
