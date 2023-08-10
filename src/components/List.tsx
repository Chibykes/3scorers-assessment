import { Profile } from "utils/createFakeProfile";
import ListItem from "./ListItem";

type ListType = {
  heading: string;
  items: Profile[];
};

export default function List({ heading, items }: ListType) {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold">{heading}</h1>
      <div
        className="
                bg-white shadow-md rounded-xl h-96 overflow-auto
                scrollbar-thin scrollbar-track-transparent 
                scrollbar-thumb-[--primary-color] py-5
              "
      >
        {items.map(({ _id, firstName, lastName, img }:Profile) => (
          <ListItem 
              key={_id}
              img={img}
              firstName={firstName}
              lastName={lastName}
          />
        ))}
      </div>
    </div>
  );
}
