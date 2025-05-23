const FullRecipeLoading = () => {
  return (
    <figure className="w-full h-full p-2 rounded-md sm:rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-2 dark:bg-[#1a1a1a] bg-[#f0f3f5]">
      <div className="md:h-130 w-full h-90 rounded-md sm:rounded-xl lg:h-[72vh] animate-shimmer dark:bg-[#2a2e32] bg-[#d8dee2]"></div>
      <div className="overflow-auto noScrollBar h-full lg:h-[72vh]">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col rounded-md sm:rounded-xl animate-shimmer dark:bg-[#2a2e32] bg-[#d8dee2]">
            <div className="w-full mt-2 h-40"></div>
          </div>
          <div className="flex flex-col rounded-md sm:rounded-xl animate-shimmer dark:bg-[#2a2e32] bg-[#d8dee2]">
            <div className="w-full mt-2 h-70"></div>
          </div>
          <div className="flex flex-col rounded-md sm:rounded-xl animate-shimmer dark:bg-[#2a2e32] bg-[#d8dee2]">
            <div className="w-full mt-2 h-100"></div>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default FullRecipeLoading;
