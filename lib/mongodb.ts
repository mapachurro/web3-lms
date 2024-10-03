import { MongoClient } from "mongodb";

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

client = new MongoClient(MONGODB_URI);
clientPromise = client.connect();

clientPromise.then(() => "Connected to mongodb atlas");

export default clientPromise;
