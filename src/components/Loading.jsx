import { BarLoader, ClipLoader, RingLoader, SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-screen bg-orange-100 w-full flex flex-col text-orange-500 justify-center text-xl items-center">
      <RingLoader size={80} color="orange" />
    </div>
  );
};

export default Loading;
