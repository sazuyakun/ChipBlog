export default function Loader() {
  return (
    <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 text-4xl p-10">
      <div className="flex items-center justify-center w-full">
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-white border-opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute w-12 h-12 border-4 border-white border-opacity-80 rounded-full border-t-transparent animate-spin"></div>
          <div className="absolute w-6 h-6 bg-white bg-opacity-10 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  );
}
