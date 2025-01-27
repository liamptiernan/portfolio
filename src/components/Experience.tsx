export function Experience() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Key Experience</h2>
      <div className="grid gap-2 max-w-3xl">
        <div className="p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">
            Technical Lead | <span className="text-blue-400">Norstella</span>
          </h3>
          <p className="mb-4">Jan 2024 - Present</p>
          <p>
            Leads 2 teams of 5 other engineers while also serving as the primary
            liaison with business stakeholders. Responsible for design and
            architecture decisions alongside continued hands-on work as a full
            stack engineer working on 3 business critical applications.
          </p>
        </div>

        <div className="p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">
            Senior Software Engineer |{" "}
            <span className="text-blue-400">Norstella</span>
          </h3>
          <p className="mb-4">May 2022 - Jan 2024</p>
          <p>
            Full stack engineer working in a key role across 2 business
            critical, greenfield applications. Extensive experience
            independently implementing complex solutions while also helping to
            lead and mentor a team of 8 engineers.
          </p>
        </div>

        <div className="p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">
            Developer | <span className="text-blue-400">BuzzFeed</span>
          </h3>
          <p className="mb-4">July 2021 - May 2022</p>
          <p>
            Lead developer on production technology team, creating and
            supporting programs for the video operations department. Most
            notably built a per-video profit tracking web app, and managed and
            built upon the existing video database.
          </p>
        </div>
      </div>
    </section>
  );
}
