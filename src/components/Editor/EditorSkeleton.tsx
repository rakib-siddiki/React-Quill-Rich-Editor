export const SkeletonLoader = () => {
  return (
    <div className="flex flex-col py-3 w-full md:w-[525px] max-w-[525px] h-96  rounded-md bg-gray-100 dark:bg-gray-700">
      {/* Text Formatting Options Skeleton */}
      <div className="flex flex-wrap gap-5 px-6 ">
        <div className="w-14 h-5 bg-gray-200 dark:bg-gray-400 rounded animate-pulse" />
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="size-5 bg-gray-200 dark:bg-gray-400 rounded animate-pulse"
          />
        ))}
      </div>
      {/* divider */}
      <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-400 mt-3 " />
    </div>
  );
};
