import Spinner from "../_components/Spinner";

function loading() {
  return (
    <div className="flex items-center justify-center h-[80vh] bg-white">
      <Spinner />
    </div>
  );
}

export default loading;
