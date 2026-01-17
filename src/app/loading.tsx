import { Spinner } from "@/components/ui/spinner";

const Loading = () => {
  return (
    <div className=" flex flex-col justify-center items-center">

      <div>Loading.....</div>
      <Spinner />
    </div>
);
};

export default Loading;
