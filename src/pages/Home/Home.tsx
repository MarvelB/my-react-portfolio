import EmploymentList from "components/EmploymentList/EmploymentList";
import ProjectsList from "components/ProjectsList/ProjectsList";

interface HomeProps {}

const Home = ({ }: HomeProps) => {

  return (
    <>
      <section className="">

        <div className="text-center p-10">
          <h2 className="text-4xl sm:text-5xl py-10 text-teal-600 font-medium md:text-6xl dark:text-teal-400">Bryan Maravilla</h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Web Developer</h3>
  
          <p className="text-md py-5 leading-8 text-green-800 md:text-xl  dark:text-gray-200 max-w-4xl mx-auto">
            I am a Web Developer with over 3 years of industry experience developing Serverless SPAs and PWAs, as well as mobile applications using frameworks like Angular, React, and Ionic, in addition to Firebase Hosting. I am also well versed in JavaScript, HTML, CSS, and SCSS.
            <br />
            <br />
            I am proficient with many relational database management systems as well as NoSQL databases such as MongoDB and FireStore.
          </p>

        </div>

        <div className="text-center px-10">
          <h4 className="dark:text-white text-xl md:text-2xl py-1">Mission</h4>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 md:text-lg max-w-4xl mx-auto">
            Creating value for organizations through the design and deployment of innovative technology solutions that exceed
            customer’s expectations. Pro-active and diligent by nature, the experience and skills I possess in web development, programming, data
            analysis, reporting, databases and automation together form a broad range of complimentary, universal skills that can
            be applied to many common challenges that I look forward to helping businesses address.
          </p>
        </div>

      </section>

      <EmploymentList />

      <ProjectsList />
    </>
  );
}

export default Home;
