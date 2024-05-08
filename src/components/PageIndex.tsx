interface PageIndexProps {
  index: number;
  total: number;
}

const PageIndex = ({ index, total }: PageIndexProps) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex gap-2">
      {pages.map((pageNumber) => (
        <div
          key={pageNumber}
          className={`w-4 h-4 rounded-full border btn-border ${
            pageNumber <= index ? "bg-white" : ""
          }`}
        />
      ))}
    </div>
  );
};
export default PageIndex;