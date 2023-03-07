import { EmploymentRecordModel, WithID } from "types";

interface EmploymentCardProps {
  employmentRecord: WithID<EmploymentRecordModel>;
}

const EmploymentCard = ({ employmentRecord }: EmploymentCardProps) => {
  return (
    <div className="max-w-sm p-10 bg-white shadow-lg rounded-xl dark:bg-white basis-1/2 flex-1">
      <h5 className="text-2xl font-medium pb-2">{employmentRecord.title}</h5>
      <h6 className="text-xl font-medium pb-2">{employmentRecord.companyName}</h6>

      <p className="text-gray-800 py-1">{employmentRecord.dates}</p>

      <div className="flex flex-row">
        {employmentRecord.technologiesIcon.map(tech => (
          <img src={tech} key={tech} className="h-10 w-10 mr-2" />
        ))}
      </div>

      <button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-teal-700 hover:to-teal-700 text-white px-5 rounded-md py-2.5 mt-4">Read more</button>
    </div>
  );
}

export default EmploymentCard;
