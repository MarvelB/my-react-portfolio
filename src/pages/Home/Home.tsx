import { AiFillLinkedin } from "react-icons/ai";

interface HomeProps {}

const Home = ({ }: HomeProps) => {
  return (
    <>
      <section className="min-h-screen">

        <div className="text-center p-10">
          <h2 className="text-5xl py-10 text-teal-600 font-medium md:text-6xl dark:text-teal-400">Bryan Maravilla</h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Web Developer</h3>
          <p className="text-md py-5 leading-8 text-green-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">
            I am a Web Developer with industry experience developing Serverless SPAs and PWAs, as well as mobile applications using frameworks like Angular, React, and Ionic, in addition to Firebase Hosting. I am also well versed in JavaScript, HTML, CSS, and SCSS.
            <br />
            <br />
            I am proficient with many relational database management systems as well as NoSQL databases such as MongoDB and FireStore.
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-16 py-10 text-gray-600 dark:text-gray-400">
          <AiFillLinkedin />
        </div>

        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 my-10 overflow-hidden md:h-96 md:w-96">
          <img src="dev-ed-wave.png" alt="deved-logo" className="object-cover h-full" />
        </div>

      </section>

        {/* Section 2 */}
      <section>

        <div>
          <h3 className="dark:text-white text-3xl py-1">Mission</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Creating value for organizations through the design and deployment of innovative technology solutions that exceed
            customer’s expectations. Pro-active and diligent by nature, the experience and skills I possess in web development, programming, data
            analysis, reporting, databases and automation together form a broad range of complimentary, universal skills that can
            be applied to many common challenges that I look forward to helping businesses address.
          </p>
        </div>

        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <img src="design.png" alt="design" className="h-20 w-20 mx-auto" />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">Creating elegant designs suited for your needs</p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Ilustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <img src="code.png" alt="design" className="h-20 w-20 mx-auto" />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">Creating elegant designs suited for your needs</p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Ilustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <img src="consulting.png" alt="design" className="h-20 w-20 mx-auto" />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">Creating elegant designs suited for your needs</p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Ilustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>

        </div>

      </section>

      <section>

        <div>
          <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
        </div>

        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <img src="web1.png" alt="web1" className="rounded-lg object-cover w-full h-full" />
          </div>
          <div className="basis-1/3 flex-1">
            <img src="web2.png" alt="web2" className="rounded-lg object-cover w-full h-full" />
          </div>
          <div className="basis-1/3 flex-1">
            <img src="web3.png" alt="web3" className="rounded-lg object-cover w-full h-full" />
          </div>
          <div className="basis-1/3 flex-1">
            <img src="web4.png" alt="web4" className="rounded-lg object-cover w-full h-full" />
          </div>
          <div className="basis-1/3 flex-1">
            <img src="web5.png" alt="web5" className="rounded-lg object-cover w-full h-full" />
          </div>
          <div className="basis-1/3 flex-1">
            <img src="web6.png" alt="web6" className="rounded-lg object-cover w-full h-full" />
          </div>
        </div>

      </section>
    </>
  );
}

export default Home;
