import { WithID } from "types";
import { ProjectModel } from "types/project.model";

interface ProjectCardProps {
  projectRecord: WithID<ProjectModel>;
}

const ProjectCard = ({ projectRecord }: ProjectCardProps) => {

  const handleOpenProject = () => {
    window.open(projectRecord.siteUrl, "_blank", "noreferrer");
  }

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-xl dark:bg-white basis-1/2 flex-1">
      <img
        className="rounded-t-xl cursor-pointer"
        src={projectRecord.pictureUrl}
        alt="project's mini view"
        onClick={handleOpenProject}
      />

      <div className="p-5">
          <h5
            className="mb-1 text-xl md:mb-2 md:text-2xl font-bold tracking-tight text-gray-900 cursor-pointer"
            onClick={handleOpenProject}
          >{projectRecord.title}</h5>

          <p className="mb-2 text-sm font-normal text-gray-700 h-24 overflow-auto md:mb-3 md:text-base md:h-32">{projectRecord.description}</p>

          <button
            type="button"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-teal-700 hover:to-teal-700 text-white text-sm px-3 rounded-md py-1.5 mt-4 md:px-5 md:py-2.5 md:text-base"
            onClick={handleOpenProject}
          >View project</button>
      </div>
    </div>
  );
}

export default ProjectCard;
