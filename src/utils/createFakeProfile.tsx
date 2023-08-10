import { faker } from "@faker-js/faker";

export interface Profile {
  _id: string;
  img: string;
  email?: string;
  firstName: string;
  lastName: string;
  status?: "Active" | "Inactive";
}

export default function createFakeProfile(length: number): Profile[] {
  let profiles: Profile[] = [];

  for (let i = 0; i < length; i++) {
    profiles = [
      ...profiles,
      {
        _id: faker.string.uuid(),
        img: faker.image.avatar(),
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        status: faker.helpers.arrayElement(["Active", "Inactive"]),
      },
    ];
  }

  return profiles;
}
