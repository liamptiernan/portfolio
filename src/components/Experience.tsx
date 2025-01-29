function TechStack({ items }: { items: string[] }) {
  const itemsString = items.join(", ");
  return (
    <div className="mt-2 font-mono text-xs pr-6">
      <h4 className="text-lime-700 font-bold inline">Tech: </h4>
      <span className="inline">{itemsString}</span>
    </div>
  );
}

export function Experience() {
  return (
    <section className="container mx-auto mt-8 sm:mt-16 px-4 w-[95%] sm:w-full">
      <h2 className="text-3xl font-bold mb-2 px-6 sm:px-2 text-lime-700">
        Key Experience
      </h2>
      <div className="grid max-w-3xl sm:overflow-scroll sm:max-h-[calc(100vh-100px)] lg:max-h-[calc(100vh-175px)]">
        <div className="p-6 rounded-lg">
          <h3 className="text-xl font-bold">
            Technical Lead | <span className="text-lime-700">Norstella</span>
          </h3>
          <p className="mb-4 text-sm">Jan 2024 - Present</p>
          <p>
            Leading 2 teams of 5 other engineers while also serving as the
            primary liaison with business stakeholders. Responsible for design
            and architecture decisions alongside continued hands-on work as a
            full stack engineer working on 3 business critical applications.
          </p>
          <TechStack
            items={[
              "Python",
              "Typescript",
              "React",
              "FastAPI",
              "PostgreSQL",
              "MongoDB",
              "Snowflake",
              "DBT",
              "Docker",
              "Terraform",
              "AWS",
            ]}
          />
        </div>

        <div className="p-6 rounded-lg">
          <h3 className="text-xl font-bold">
            Senior Software Engineer |{" "}
            <span className="text-lime-700">Norstella</span>
          </h3>
          <p className="mb-4 text-sm">May 2022 - Jan 2024</p>
          <p>
            Full stack engineer working in a key role across 2 business
            critical, greenfield applications. Extensive experience
            independently implementing complex solutions while also helping to
            lead and mentor a team of 8 engineers.
          </p>
          <TechStack
            items={[
              "Typescript",
              "Python",
              "React",
              "FastAPI",
              "PostgreSQL",
              "MongoDB",
              "Docker",
              "Terraform",
              "AWS",
            ]}
          />
        </div>

        <div className="p-6 rounded-lg">
          <h3 className="text-xl font-bold">
            Developer | <span className="text-lime-700">BuzzFeed</span>
          </h3>
          <p className="mb-4 text-sm">July 2021 - May 2022</p>
          <p>
            Lead developer on production technology team, creating and
            supporting programs for the video operations department. Most
            notably built a per-video profit tracking web app, and managed and
            built upon the existing video database.
          </p>
          <TechStack
            items={[
              "Javascript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "BigQuery",
              "SASS",
              "AWS",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
