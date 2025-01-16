import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Navigation />
      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-2xl mx-auto text-white">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <p className="mb-6 text-lg">
            I'm a multidisciplinary designer focused on creating immersive digital experiences. With a background in both design and development, I bring a unique perspective to every project.
          </p>
          <p className="mb-6 text-lg">
            My work spans across various mediums - from digital interfaces to brand identities, always with a focus on creating meaningful and memorable experiences.
          </p>
          <p className="text-lg">
            Currently available for freelance projects and collaborations.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;