import { Client, Account, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.kayla.aora",
  projectId: "664d3a0d0008581ef29f",
  databaseId: "664d3b780015a591adb4",
  userCollectionId: "664d3bab003e4edeb51f",
  videoCollectionId: "664d3bdb00358b2d6403",
  storageId: "664d42e0002786446e78",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectid) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
    // Register User
account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
}


