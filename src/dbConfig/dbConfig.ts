import mongoose from "mongoose";
import { ClientPageRoot } from "next/dist/client/components/client-page";

export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB connect successfully");
        });

        connection.on('error', (err) => {
            console.log("MongoDB connection error. Please make sure MongoDB is running." + err);
            process.exit();
        })

    } catch(error) {
        console.log("Something went wrong");
        console.log(error);
    }
}