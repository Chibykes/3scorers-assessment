import { SetStateAction, useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { TbSearch } from "react-icons/tb";
import ListItem from "./ListItem";
import { Profile } from "utils/createFakeProfile";

export default function Table({ users }: { users: Profile[] }) {
  const [showDropdown, setShowDropdown] = useState<Boolean>(false);
  const [filteredUsers, setFilteredUsers] = useState<Profile[]>(users);
  const [filter, setFilter] = useState({
    search: "",
    status: "All",
  });

  useEffect(() => {
    window.addEventListener("click", (e: any) => {
      let isInDropdown: Element | undefined = Array.from(
        document.querySelectorAll("[data-dropdown]")
      ).find((el) => el.contains(e.target) || el === e.target);

      if (!isInDropdown) {
        setShowDropdown(false);
      }
    });
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users
        .filter((user: Profile) =>
          new RegExp(filter.search.toLowerCase()).test(
            `${user.firstName} ${user.lastName}`.toLocaleLowerCase()
          )
        )
        .filter((user: Profile) =>
          filter.status === "All" ? true : filter.status === user.status
        )
    );
  }, [users, filter]);

  return (
    <div className="">
      <div className="flex justify-between p-4 bg-[--primary-color]">
        <div
          className="
                w-1/3 px-2 flex justify-between items-center gap-2 
                bg-white rounded-md
              "
        >
          <TbSearch className="shrink-0" />
          <input
            className="block w-full px-3 py-2"
            type="text"
            placeholder="Search for Users"
            onChange={(e) => {
              setFilter({ ...filter, search: e.target.value });
              setShowDropdown(false);
            }}
            value={filter.search}
          />
        </div>

        <div className="w-1/5 relative" data-dropdown="true">
          <div
            className="flex justify-between items-center p-2 gap-2 bg-white rounded-md shrink-0"
            onClick={() => setShowDropdown((n: SetStateAction<Boolean>) => !n)}
          >
            <p className="">{filter.status}</p>
            <MdArrowDropDown className="text-lg" />
          </div>

          <div
            className={`
                  mt-1 absolute top-full left-0 bg-white w-full min-w-[200px]
                  rounded-md overflow-hidden shadow-md
                  ${showDropdown ? "block" : "hidden"}
                `}
            onBlur={() => setShowDropdown(false)}
          >
            {["All", "Active", "Inactive"].map((option: string) => (
              <p
                key={option}
                className="px-3 py-4 hover:bg-neutral-200 border-b"
                onClick={() => {
                  setFilter({ ...filter, status: option });
                  setShowDropdown(false);
                }}
              >
                {option}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm">
        <div className="grid grid-cols-12 items-center p-5 min-h-[54px] border-b">
          <h1 className="col-span-10 text-xl font-semibold">
            User&apos;s Name
          </h1>
        </div>

        {filteredUsers.map(({ _id, firstName, lastName, img }: Profile) => (
          <ListItem
            key={_id}
            img={img}
            firstName={firstName}
            lastName={lastName}
            button
            border
          />
        ))}
      </div>
    </div>
  );
}
