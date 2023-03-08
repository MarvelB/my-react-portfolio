import ProjectCard from "components/ProjectCard/ProjectCard";
import { useCollection } from "hooks/useCollection";
import { WithID } from "types";
import { ProjectModel } from "types/project.model";

interface ProjectsListProps {}

const ProjectsList = ({ }: ProjectsListProps) => {

  const { documents: projects } = useCollection<WithID<ProjectModel>>(
    "projects",
    null,
    ["order", "asc"]
  );

  return (
    <section className="pb-10">
      <div>
        <h3 className="text-xl md:text-2xl py-1 dark:text-white text-center my-10">Personal projects</h3>
      </div>

      <div className="flex gap-8 flex-row flex-wrap mx-auto items-center justify-center">
        {projects && projects.map((project, index) => (
          <ProjectCard key={index} projectRecord={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsList;
