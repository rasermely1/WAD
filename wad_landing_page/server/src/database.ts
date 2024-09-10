import * as mongodb from "mongodb";
import { Employee } from "./employee";

export const collections: {
    employees?:mongodb.Collection<Employee>;
} = {};

export async function connectToDatabase(uri: string){
    const client = new mongodb.MongoClient(uri);
    await client.connect();

    const db = client.db("wadLandingPage");
    await applySchemaValidation(db);

    const employeesCollection = db.collection<Employee>("employees");
    collections.employees = employeesCollection;
}


async function applySchemaValidation(db: mongodb.Db){
    const jsonSchema = {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "position", "level"],
            additionalProperties: false,
            properties: {
                _id: {},
                name: {
                    bsonType: "string",
                    description: "'name' is required and is a string"
                },
                email: {
                    bsonType: "string",
                    description: "'position' is required and is a string",
                    minLength: 10
                },
                position: {
                    bsonType: "string",
                    description: "'level' is required and is one of 'president', 'vice preseident', 'secretary', 'vp of outreach', 'architect', 'product manager', 'member'",
                    enum: ["president", "vice president", "secretary", "vp of outreach", "architect", "product manager", "member"],
                },
            },
        },
    };
}