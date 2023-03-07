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
      <div className="flex gap-8 flex-row flex-wrap mx-auto items-center justify-center">
        {empRecords && empRecords.map(record => (
          <EmploymentCard key={record.id} employmentRecord={record} />
        ))}
      </div>
    </section>
  );
}

export default EmploymentList;
