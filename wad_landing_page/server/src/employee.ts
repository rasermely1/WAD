import * as mongodb from "mongodb";

export interface Employee {
    name: string;
    email: string;
    position: "president" | "vice-president" | "vp-of-outreach" | "secretary" | "architect" | "product-manager" | "member";
    _id?: mongodb.ObjectId;
}