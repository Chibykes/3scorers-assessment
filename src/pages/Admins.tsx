import Table from "components/Table";
import UserLayout from "layouts/UserLayout";
import createFakeProfile from "utils/createFakeProfile";

export default function Admins() {
  return (
    <UserLayout pageTitle="Admins">
      <Table users={createFakeProfile(10)} />
    </UserLayout>
  );
}
