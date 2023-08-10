import List from "components/List";
import UserLayout from "layouts/UserLayout";
import { TbUsers } from "react-icons/tb";
import createFakeProfile from "utils/createFakeProfile";

export default function Overview() {
  return (
    <UserLayout pageTitle="Overview">
      <div className="space-y-8">
        <div className="grid grid-cols-3 gap-8">
          <div className="flex justify-between items-center gap-3 bg-[--accent-color] p-5 rounded-3xl">
            <div className="text-white space-y-3 py-5">
              <p className="uppercase">
                TOTAL NUMBER OF <br /> USERS
              </p>
              <p className="font-semibold text-3xl">1,000,000</p>
            </div>

            <div className="w-12 h-12 shrink-0 grid place-content-center bg-white rounded-full">
              <TbUsers className="text-lg text-[--accent-color]" />
            </div>
          </div>

          <div className="flex justify-between items-center gap-3 bg-[--primary-color] p-5 rounded-3xl">
            <div className="text-white space-y-3 py-5">
              <p className="uppercase">
                TOTAL NUMBER OF <br /> ADMINS
              </p>
              <p className="font-semibold text-3xl">970</p>
            </div>

            <div className="w-12 h-12 shrink-0 grid place-content-center bg-white rounded-full">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M6.87576 6.9C6.87576 7 6.97576 7.1 7.07576 7.2L9.07576 9.2C9.27576 9.4 9.47576 9.5 9.77576 9.5C10.0758 9.5 10.2758 9.4 10.4758 9.2C10.8758 8.8 10.8758 8.2 10.4758 7.8L10.1758 7.5H14.3758L14.0758 7.8C13.8758 8 13.7758 8.2 13.7758 8.5C13.7758 9.1 14.1758 9.5 14.7758 9.5C15.0758 9.5 15.2758 9.4 15.4758 9.2L17.4758 7.2C17.5758 7.1 17.6758 7 17.6758 6.9C17.6758 6.8 17.7758 6.7 17.7758 6.5C17.7758 6.4 17.7758 6.2 17.6758 6.1C17.5758 6 17.5758 5.9 17.4758 5.8L15.4758 3.8C15.0758 3.4 14.4758 3.4 14.0758 3.8C13.6758 4.2 13.6758 4.8 14.0758 5.2L14.3758 5.5H10.1758L10.4758 5.2C10.8758 4.8 10.8758 4.2 10.4758 3.8C10.0758 3.4 9.47576 3.4 9.07576 3.8L7.07576 5.8C6.97576 5.9 6.87576 6 6.87576 6.1C6.87576 6.2 6.77576 6.3 6.77576 6.5C6.77576 6.6 6.77576 6.8 6.87576 6.9ZM6.27576 14.7C7.67576 14.7 8.87576 13.5 8.87576 12.1C8.87576 10.7 7.67576 9.5 6.27576 9.5C4.87576 9.5 3.67576 10.7 3.67576 12.1C3.67576 13.5 4.87576 14.7 6.27576 14.7ZM10.0758 17.4C7.47576 15.3 3.67576 15.7 1.57576 18.3C1.37576 18.6 1.27576 18.9 1.27576 19.2C1.27576 19.9 1.87576 20.5 2.57576 20.5H9.97576C10.4758 20.5 10.9758 20.2 11.1758 19.8C11.3758 19.4 11.3758 18.8 10.9758 18.4C10.6758 18 10.3758 17.7 10.0758 17.4ZM15.6758 12.1C15.6758 13.5 16.8758 14.7 18.2758 14.7C19.6758 14.7 20.8758 13.5 20.8758 12.1C20.8758 10.7 19.6758 9.5 18.2758 9.5C16.8758 9.5 15.6758 10.7 15.6758 12.1ZM22.9758 18.4C22.6758 18.1 22.3758 17.7 22.0758 17.5C19.4758 15.4 15.6758 15.8 13.5758 18.4C13.3758 18.6 13.2758 18.9 13.2758 19.2C13.2758 19.9 13.8758 20.5 14.5758 20.5H21.9758C22.4758 20.5 22.9758 20.2 23.1758 19.8C23.3758 19.3 23.2758 18.8 22.9758 18.4Z"
                  style={{ fill: "var(--primary-color)" }}
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <List heading="List of Users" items={createFakeProfile(5)} />
          <List heading="List of Admins" items={createFakeProfile(5)} />
        </div>
      </div>
    </UserLayout>
  );
}
