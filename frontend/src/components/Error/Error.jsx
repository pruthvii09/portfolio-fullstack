import React from "react";
import "./Error.css";

const Error = () => {
  return (
    <section className="page_404">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="svg_404"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>
      <h1>Page not found</h1>
      <p>
        The page you are looking for doesn't exist. Here are some helpful links:
      </p>
      <div className="btn_404">
        <a className="btn_go">
          {/* <MoveLeft size={10} /> */}
          <p>Go back</p>
        </a>
        <a href="/" className="btn_home">
          Take me Home
        </a>
      </div>
    </section>
  );
};

export default Error;
