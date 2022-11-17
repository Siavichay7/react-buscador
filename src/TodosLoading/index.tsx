import { Skeleton } from "primereact/skeleton";

export const TodosLoading = () => {
  return (
    <div className="card">
      <div className="grid formgrid">
        <div className="field col-12 md:col-6">
          <h5>Rounded</h5>
          <Skeleton className="mb-2" borderRadius="16px"></Skeleton>
          <Skeleton
            width="10rem"
            className="mb-2"
            borderRadius="16px"
          ></Skeleton>
          <Skeleton
            width="5rem"
            borderRadius="16px"
            className="mb-2"
          ></Skeleton>
          <Skeleton
            height="2rem"
            className="mb-2"
            borderRadius="16px"
          ></Skeleton>
          <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
        </div>
      </div>
    </div>
  );
};
