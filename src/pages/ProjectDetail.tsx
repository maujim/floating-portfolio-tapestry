import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Navigation />
      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-4xl font-bold mb-8">Project Details: {id}</h1>
          <div className="aspect-video mb-8">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Project"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">
              Detailed description of the project will go here. This is a placeholder text that will be replaced with actual project content.
            </p>
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="mb-6">
              Description of the project challenges and objectives.
            </p>
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="mb-6">
              Explanation of how the challenges were addressed and solved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;