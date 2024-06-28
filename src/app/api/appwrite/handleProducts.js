import { database, ID } from "./appwrite.config";

const createDoc = (data) => {
  return database
    .createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_COLLECTION_ID,
      ID.unique(),
      data
    )
    .then(
      (response) => {
        return [200, response];
      },
      (error) => {
        return [400, error];
      }
    );
};

export { createDoc };
