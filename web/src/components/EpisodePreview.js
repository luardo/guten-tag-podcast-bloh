import {format} from 'date-fns'

import React from "react";
import { Link } from "gatsby";
import { buildImageObj, getBlogUrl } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from './portableText'

const EpisodePreview = (props) => {
  return (
    <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
          {props.mainImage && props.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .auto("format")
                .url()}
              alt={props.mainImage.alt}
            />
          )}
          <div className="w-full font-bold text-xl text-blue p-6">{props.title}</div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
            {props._rawExcerpt && <PortableText blocks={props._rawExcerpt} />}
          </p>
        </a>
      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
        <div className="flex items-center justify-between">
          <img
            className="w-8 h-8 rounded-full mr-4 avatar"
            data-tippy-content="Author Name"
            src="http://i.pravatar.cc/300"
            alt="Avatar of Author"
          />
          <p className="text-gray-600 text-xs md:text-sm">
            {format(props.publishedAt, "MMMM Do, YYYY")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EpisodePreview;
