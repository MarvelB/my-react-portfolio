import EmploymentCard from "components/EmploymentCard/EmploymentCard";
import { useCollection } from "hooks/useCollection";
import { EmploymentRecordModel, WithID } from "types";

interface EmploymentListProps {}

const EmploymentList = ({ }: EmploymentListProps) => {

  const { documents: empRecords } = useCollection<WithID<EmploymentRecordModel>>(
    "employmentRecords",
    null,
    ["order", "asc"]
    );

  return (
    <section>
      <div>
        <h3 className="text-xl md:text-2xl py-1 dark:text-white text-center my-10">Professional experience</h3>
      </div>

      <div className="flex gap-8 flex-row flex-wrap mx-auto items-center justify-center max-w-7xl">
        {empRecords && empRecords.map(record => (
          <EmploymentCard key={record.id} employmentRecord={record} />
        ))}
      </div>
    </section>
  );
}

export default EmploymentList;
