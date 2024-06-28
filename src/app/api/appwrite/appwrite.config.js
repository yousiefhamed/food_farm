import { Client, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

export const database = new Databases(client);
export { ID } from "appwrite";
