import Navigation from "@/components/Navigation";
import ProjectCard, { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    id: "xbox",
    title: "Xbox Jungle",
    description: "An immersive 3D environment design for Xbox",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    link: "/project/xbox",
  },
  {
    id: "trench",
    title: "Trench Cover Art",
    description: "Album cover design exploration",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    link: "/project/trench",
  },
  {
    id: "kush",
    title: "Kush Cosmetics",
    description: "Brand identity and packaging design",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    link: "/project/kush",
  },
  {
    id: "spotify",
    title: "Spotify Visuals",
    description: "Visual design system for Spotify",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    link: "/project/spotify",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Navigation />
      <main className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;