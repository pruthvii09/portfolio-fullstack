import React from "react";
import GitHubCalendar from "react-github-calendar";
import { useSelector } from "react-redux";
import "./Github.css";
const Github = () => {
  const { user } = useSelector((store) => store.user);
  console.log(user);
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">My Github Contributions</h2>
      <span className="section__subtitle">Take a looks at my Github</span>
      <div className="github_contrib">
        {user && (
          <GitHubCalendar
            //   colorScheme="blue"
            username={user?.user?.social?.github}
            colorScheme="light"
            blockSize={15}
            blockRadius={0}
            blockMargin={3}
            fontSize={12}
            year={"last"}
          />
        )}
      </div>
      {/* {projects?.length > 0 && <a className="all_projects">View All</a>} */}
    </section>
  );
};

export default Github;
