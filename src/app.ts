import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema, Model } from 'mongoose';


const app: Application = express();

// using cors /
app.use(cors());


// pars data 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req: Request, res: Response, next: NextFunction) => {

    /**inserting a test data into mongodb*/
    /**
     * step1:Interface
     * step2:Schema
     * step3:Model
     * step4:Database Query
     */

    // res.send('Hello World!')
    // next();


    /** 1. Create an interface representing a document in MongoDB. */
    interface IUser {
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        };
        dateOfBirth?: string;
        gender: "male" | "Female";
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
    };
    // 2. Create a Schema user to the IUser interface.

    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            required: true,
            unique: true,
        },
        role: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            firstName: {
                type: String,
                required: true,
            },
            middleName: {
                type: String
            },
            lastName: {
                type: String,
                required: true,
            },
        },
        dateOfBirth: {
            type: String,
        },
        gender: {
            type: String,
            enum: ['male', 'female']
        },
        email: {
            type: String,
        },
        contactNo: {
            type: String,
            required: true,
        },
        emergencyContactNo: {
            type: String,
            required: true,
        },
        presentAddress: {
            type: String,
            required: true,
        },
        permanentAddress: {
            type: String,
            required: true,
        },
    });
})

export default app;