import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

interface MongooseCache {
  conn: mongoose.Connection | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      // Important connection options
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "ubranka",
    };

    try {
      cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
        console.log("✅ MongoDB Connected Successfully");
        return mongoose;
      });
    } catch (error) {
      console.error("❌ MongoDB Connection Error:", error);
      cached.promise = Promise.reject(error);
    }
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    throw error;
  }
}

export default dbConnect;
