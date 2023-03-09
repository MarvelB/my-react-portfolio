import { WithID } from "types";
import { ProjectModel } from "types/project.model";
import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";

interface ProjectCardProps {
  projectRecord: WithID<ProjectModel>;
}

const ProjectCard = ({ projectRecord }: ProjectCardProps) => {

  const handleOpenUrl = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-xl dark:bg-white basis-1/2 flex-1">
      <img
        className="rounded-t-xl cursor-pointer w-96 h-48"
        src={projectRecord.pictureUrl}
        alt="project's mini view"
        onClick={() => handleOpenUrl(projectRecord.siteUrl)}
      />

      <div className="p-5">
          <h5
            className="mb-1 text-xl md:mb-2 md:text-2xl font-bold tracking-tight text-gray-900 cursor-pointer"
            onClick={() => handleOpenUrl(projectRecord.siteUrl)}
          >{projectRecord.title}</h5>

          <p className="mb-2 text-sm font-normal text-gray-700 h-24 overflow-auto md:mb-3 md:text-base md:h-32">{projectRecord.description}</p>

          <div className="flex flex-row">
            <button
              type="button"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-teal-700 hover:to-teal-700 text-white text-sm px-3 rounded-md py-1.5 mt-4 md:px-5 md:py-2.5 md:text-base"
              onClick={() => handleOpenUrl(projectRecord.siteUrl)}
            >View website</button>

            <button
              type="button"
              className="bg-black text-white text-xl rounded-lg p-1 mt-4 ml-2 sm:p-1.5 sm:ml-4 sm:text-3xl"
              onClick={() => handleOpenUrl(projectRecord.githubUrl)}
            >
              <AiFillGithub />
            </button>
          </div>
      </div>
    </div>
  );
}

export default ProjectCard;
