import Image from "next/image";

export const EmptySearch = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image
        src="/empty-search.svg"
        alt="Empty search"
        width={140}
        height={140}
      />
      <h2 className="text-2xl font-semibold mt-6">No Results found</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try seaching for something else
      </p>
    </div>
  );
};
