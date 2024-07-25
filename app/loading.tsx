import Spinner from "./_components/Spinner";

function loading() {
  return (
    <div className="flex items-center justify-center mx-auto h-[100vh]">
      <Spinner />
    </div>
  );
}

export default loading;
