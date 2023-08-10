import Table from "components/Table";
import UserLayout from "layouts/UserLayout";
import createFakeProfile from "utils/createFakeProfile";

export default function Users() {
  return (
    <UserLayout pageTitle="Users">
      <Table users={createFakeProfile(10)} />
    </UserLayout>
  );
}
