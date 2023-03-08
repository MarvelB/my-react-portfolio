import EmploymentRecordModal from "components/EmploymentRecordModal/EmploymentRecordModal";
import { EmploymentRecordModel, WithID } from "types";

interface EmploymentCardProps {
  employmentRecord: WithID<EmploymentRecordModel>;
}

const EmploymentCard = ({ employmentRecord }: EmploymentCardProps) => {
  return (
    <div className="max-w-sm p-10 bg-white shadow-lg rounded-xl dark:bg-white basis-1/2 flex-1">
      <h5 className="text-lg md:text-2xl font-medium pb-1 md:pb-2">{employmentRecord.title}</h5>
      <h6 className="text-md pb-1 md:text-xl font-medium md:pb-2">{employmentRecord.companyName}</h6>

      <p className="text-gray-800 py-1 text-sm md:text-base">{employmentRecord.dates}</p>

      <div className="flex flex-row">
        {employmentRecord.technologiesIcon.map((tech, index) => (
          <img src={tech} key={index} className="h-8 w-8 mr-1 md:h-10 md:w-10 md:mr-2" />
        ))}
      </div>

      <EmploymentRecordModal employmentRecord={employmentRecord} />
    </div>
  );
}

export default EmploymentCard;
