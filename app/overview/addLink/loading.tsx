import SpinnerMini from "@/app/_components/SpinnerMini";

function loading() {
  return (
    <div className="flex items-center justify-center h-[80vh] bg-white">
      <SpinnerMini />
    </div>
  );
}

export default loading;
