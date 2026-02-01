import Image from "next/image";
import Link from "next/link";

interface Props {
  BannerSize: string;

  imageClassName?: string;
  imageSrc: string;

  textClassName: string;
  text: string;

  subtextClassName?: string;
  subtext?: string;

  href?: string;
}

const BannerHome = (props: Props) => {
  return (
    <div className={`relative ${props.BannerSize}`}>
      <Link href={props.href || ""}>
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
      </Link>
    </div>
  );
};

export default BannerHome;
