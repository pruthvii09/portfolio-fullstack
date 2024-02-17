import React from "react";

const Social = ({ user }) => {
  return (
    <div className="home__social">
      <a
        href={`mailto:${user?.email}`}
        className="home__social-icon"
        target="_blank"
      >
        <i className="bx bxl-gmail"></i>
      </a>
      {user?.social?.linkedin && (
        <a
          href={user?.social?.linkedin}
          className="home__social-icon"
          target="_blank"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>
      )}
      <a
        href={`https://github.com/${user?.social?.github}`}
        className="home__social-icon"
        target="_blank"
      >
        <i className="bx bxl-github"></i>
      </a>
    </div>
  );
};

export default Social;
