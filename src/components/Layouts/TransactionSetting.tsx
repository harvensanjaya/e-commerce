import Ordered from "../Fragments/Ordered";
function TransactionSetting() {
  return (
    <div className="bg-white col-span-9 rounded-lg">
      <div className="flex flex-col w-full mb-5 transition-all bg-white p-6 rounded-md gap-2">
        <h1 className="sm:text-lg text-base font-semibold transition-all transition-discrete text-gray-500">
          My Order
        </h1>
        <Ordered />
      </div>
    </div>
  );
}

export default TransactionSetting;
