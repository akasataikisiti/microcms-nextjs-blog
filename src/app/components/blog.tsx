"use client";
import Image from "next/image";
import { FC } from "react";
import formatIsoToJst from "@/utility/timeconvert";

export type BlogProps = {
  id: string;
  title: string;
  date: string;
  category: string;
  imgurl: string;
};

const Brog: FC<BlogProps> = (props: BlogProps) => {
  return (
    <a href={`/post/${props.id}`}>
      <div className="blog-top-div">
        <div className=" group blog-second-div">
          <Image
            src={props.imgurl}
            fill
            loading="lazy"
            alt="Photo by Minh Pham"
            className="preview-image group-hover:scale-110"
          />
        </div>

        <div className="flex flex-col gap-2 p-4 lg:p-6">
          <span className="text-sm text-gray-400">
            {formatIsoToJst(props.date)}
          </span>

          <h2 className="text-xl font-bold text-gray-800">{props.title}</h2>
          <div>Read more</div>
        </div>
      </div>
    </a>
  );
};

export default Brog;
