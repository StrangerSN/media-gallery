interface Props {
  type:
    | "imageMediaType"
    | "videoMediaType"
    | "gifMediaType"
    | "videoIcon"
    | "gifIcon";
}

export default function Svg(props: Props) {
  const { type } = props;

  switch (type) {
    case "imageMediaType":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
        >
          <path
            fill="#5E6166"
            fillRule="evenodd"
            d="M.875 3.5A2.625 2.625 0 0 1 3.5.875h9A2.625 2.625 0 0 1 15.125 3.5v9a2.625 2.625 0 0 1-2.625 2.625h-9A2.625 2.625 0 0 1 .875 12.5v-9ZM3.5 2.125c-.76 0-1.375.616-1.375 1.375v9c0 .148.023.29.067.424L9.35 5.765a1.625 1.625 0 0 1 2.298 0l2.226 2.226V3.5c0-.76-.616-1.375-1.375-1.375h-9Zm10.375 7.634-3.11-3.11a.375.375 0 0 0-.53 0l-7.16 7.16c.134.043.277.066.425.066h9c.76 0 1.375-.616 1.375-1.375V9.759ZM6.5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "videoMediaType":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
        >
          <path
            fill="#5E6166"
            fillRule="evenodd"
            d="M2.875 2.862c0-.864.933-1.406 1.683-.977l8.992 5.138a1.125 1.125 0 0 1 0 1.954l-8.992 5.138a1.125 1.125 0 0 1-1.683-.977V2.862Zm1.25.215v9.846L12.74 8 4.125 3.077Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "gifMediaType":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
        >
          <path
            fill="#5E6166"
            fillRule="evenodd"
            d="M.875 5.5A2.625 2.625 0 0 1 3.5 2.875H4A2.625 2.625 0 0 1 6.625 5.5V6a.625.625 0 1 1-1.25 0v-.5c0-.76-.616-1.375-1.375-1.375h-.5c-.76 0-1.375.616-1.375 1.375v5c0 .76.616 1.375 1.375 1.375H4c.76 0 1.375-.616 1.375-1.375V9.125H4.5a.625.625 0 1 1 0-1.25h1c.621 0 1.125.504 1.125 1.125v1.5A2.625 2.625 0 0 1 4 13.125h-.5A2.625 2.625 0 0 1 .875 10.5v-5Zm9.5-1.5c0-.621.504-1.125 1.125-1.125H14c.621 0 1.125.504 1.125 1.125v.5a.625.625 0 1 1-1.25 0v-.375h-2.25v3.75H13.5a.625.625 0 1 1 0 1.25h-1.875V12.5a.625.625 0 1 1-1.25 0V4Zm-1.25-.5a.625.625 0 1 0-1.25 0v9a.625.625 0 1 0 1.25 0v-9Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "videoIcon":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="none"
        >
          <rect width="28" height="28" fill="#000" fillOpacity=".6" rx="14" />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M10.558 7.885a1.125 1.125 0 0 0-1.683.977v10.276c0 .864.933 1.406 1.683.977l8.992-5.138a1.125 1.125 0 0 0 0-1.954l-8.992-5.138Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "gifIcon":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="none"
        >
          <rect width="28" height="28" fill="#000" fillOpacity=".6" rx="14" />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M6.875 11.5A2.625 2.625 0 0 1 9.5 8.875h.5a2.625 2.625 0 0 1 2.625 2.625v.5a.625.625 0 1 1-1.25 0v-.5c0-.76-.616-1.375-1.375-1.375h-.5c-.76 0-1.375.616-1.375 1.375v5c0 .76.616 1.375 1.375 1.375h.5c.76 0 1.375-.616 1.375-1.375v-1.375H10.5a.625.625 0 1 1 0-1.25h1c.621 0 1.125.504 1.125 1.125v1.5A2.625 2.625 0 0 1 10 19.125h-.5A2.625 2.625 0 0 1 6.875 16.5v-5Zm9.5-1.5c0-.621.504-1.125 1.125-1.125H20c.621 0 1.125.504 1.125 1.125v.5a.625.625 0 1 1-1.25 0v-.375h-2.25v3.75H19.5a.625.625 0 1 1 0 1.25h-1.875V18.5a.625.625 0 1 1-1.25 0V10Zm-1.25-.5a.625.625 0 1 0-1.25 0v9a.625.625 0 1 0 1.25 0v-9Z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return null;
  }
}
