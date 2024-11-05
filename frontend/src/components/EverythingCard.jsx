import React from "react";

function Card(props) {
  return (
    <div className="everything-card mt-10 transition-transform duration-300 transform hover:scale-105">
      <div className="everything-card flex flex-wrap p-5 gap-1 mb-1 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <b className="title text-lg font-bold">{props.title}</b>
        <div className="everything-card-img mx-auto">
          <img className="everything-card-img rounded-lg" src={props.imgUrl} alt="img" />
        </div>
        <div className="description">
          <p className="description-text leading-7">
            {props.description?.substring(0, 200)}
          </p>
        </div>
        <div className="info">
          <div className="source-info flex items-center gap-2">
            <span className="font-semibold">Source:</span>
            <a
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link underline break-words text-blue-600 hover:text-blue-800"
            >
              {props.source.substring(0, 70)}
            </a>
          </div>
          <div className="origin flex flex-col">
            <p className="origin-item">
              <span className="font-semibold">Author:</span> {props.author}
            </p>
            <p className="origin-item">
              <span className="font-semibold">Published At:</span> {props.publishedAt}
            </p>
          </div>
        </div>
      </div>

      {/* New card content with styles */}
      <div className="flex lg:flex-row mt-4">
        <div
          className="h-80 lg:h-auto lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden transition-transform duration-300 transform hover:scale-105"
          style={{ backgroundImage: `url(${props.imageUrlLeft})` }}
          title={props.imageLeftTitle}
        ></div>
        <div className="border rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              {props.memberIcon && (
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  {props.memberIcon}
                </svg>
              )}
              {props.memberText}
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              {props.cardTitle}
            </div>
            <p className="text-gray-700 text-base">{props.cardDescription}</p>
          </div>
          <div className="flex items-center">
            {props.authorImage && (
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={props.authorImage}
                alt="Avatar"
              />
            )}
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{props.authorName}</p>
              <p className="text-gray-600">{props.publishedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
