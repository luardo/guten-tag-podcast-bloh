import React from "react";
import EpisodePreview from "./EpisodePreview";
import SectionHeadline from "./SectionHeadline";

const EpisodeList = (props) => {
  return (
    <>
      <SectionHeadline title={props.title} />
      <div className="flex flex-wrap justify-between -mx-6 ">
        {props.nodes &&
          props.nodes.map((node) => (
            <div key={node.id} className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <EpisodePreview {...node} isInList />
            </div>
          ))}
      </div>
    </>
  );
};

export default EpisodeList;
