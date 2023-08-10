type ListItemTypes = {
  img: string;
  firstName: string;
  lastName: string;
  button?: boolean;
  border?: boolean;
};

export default function ListItem({
  img,
  firstName,
  lastName,
  button,
  border,
}: ListItemTypes) {
  return (
    <div
      className={`flex justify-between items-center p-5 hover:bg-neutral-100 min-h-[54px] ${
        border && "border-b"
      }`}
    >
      <div className="flex items-center gap-2">
        <img
          className="w-12 h-12 rounded-md "
          src={img}
          alt={`${firstName} ${lastName}`}
          loading="lazy"
        />
        <p className="font-semibold">{`${firstName} ${lastName}`}</p>
      </div>

      <a
        href="/"
        className={`inline-block ml-auto p-1 px-3 ${
          button
            ? "bg-[--secondary-color] text-sm font-semibold text-[#1F1F1F] rounded-md"
            : "text-[--primary-color]"
        }`}
      >
        View Details
      </a>
    </div>
  );
}
