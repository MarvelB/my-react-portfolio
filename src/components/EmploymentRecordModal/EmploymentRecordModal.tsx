import { useState } from "react";
import { EmploymentRecordModel, WithID } from "types";

interface EmploymentRecordModalProps {
  employmentRecord: WithID<EmploymentRecordModel>;
}

const EmploymentRecordModal = ({ employmentRecord }: EmploymentRecordModalProps) => {

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-teal-700 hover:to-teal-700 text-white text-sm md:text-base px-3 py-1.5 mt-4 md:px-5 rounded-md md:py-2.5 md:mt-4"
        onClick={() => setShowModal(true)}
      >Read more</button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full max-w-3xl h-auto mx-4">

                <div className="relative bg-white rounded-lg shadow">

                    <div className="flex items-start justify-between p-4 border-b rounded-t">
                        <h3 className="text-lg lg:text-2xl font-semibold text-gray-900">
                            {employmentRecord.title}
                        </h3>
                        <button
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                          onClick={() => setShowModal(false)}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                      <h4 className="lg:text-lg font-semibold text-gray-700">Main responsibilities:</h4>
                      <ul className="text-sm md:text-base leading-relaxed text-gray-700 list-disc ml-4">
                        {employmentRecord.keyPoints.map((keyPoint, index) => (
                          <li key={index}>{keyPoint}</li>
                        ))}
                      </ul>

                      <h4 className="lg:text-lg font-semibold text-gray-700">Some of the technologies used:</h4>
                      <p className="flex flex-row">
                        {employmentRecord.technologiesIcon.map((tech, index) => (
                          <img src={tech} key={index} className="h-7 w-7 mr-1 md:h-10 md:w-10 md:mr-2" />
                        ))}
                      </p>

                      <br />
                      <br />
                      <p className="text-sm md:text-base leading-relaxed text-gray-700">
                        <span className="font-semibold">{employmentRecord.companyName}</span> from <span className="font-semibold">{employmentRecord.dates}</span>
                      </p>
                    </div>

                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                      <button
                        type="button"
                        className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-teal-700 hover:to-teal-700 text-white px-5 rounded-md py-2.5"
                        onClick={() => setShowModal(false)}
                      >Close</button>
                    </div>
                </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      
    </>
  );
}

export default EmploymentRecordModal;
