import EmploymentRecordModal from "components/EmploymentRecordModal/EmploymentRecordModal";
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
        {employmentRecord.technologiesIcon.map((tech, index) => (
          <img src={tech} key={index} className="h-10 w-10 mr-2" />
        ))}
      </div>

      <EmploymentRecordModal employmentRecord={employmentRecord} />
    </div>
  );
}

export default EmploymentCard;
