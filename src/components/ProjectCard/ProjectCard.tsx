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
            className="mb-2 text-2xl font-bold tracking-tight text-gray-900 cursor-pointer"
            onClick={handleOpenProject}
          >{projectRecord.title}</h5>

          <p className="mb-3 font-normal text-gray-700 h-32 overflow-auto">{projectRecord.description}</p>

          <button
            type="button"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-teal-700 hover:to-teal-700 text-white px-5 rounded-md py-2.5 mt-4"
            onClick={handleOpenProject}
          >View project</button>
      </div>
    </div>
  );
}

export default ProjectCard;
