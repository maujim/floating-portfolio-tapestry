import { Link } from "react-router-dom";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link to={`/project/${project.id}`} className="relative group block w-full h-[400px] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-8">
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="text-center">{project.description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;