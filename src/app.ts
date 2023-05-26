import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema, Model, model } from 'mongoose';


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
     * step4:Database Query on Model Done
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
    // making Model
    const User = model<IUser>('User', userSchema);

    // connecting mongodb // Database Query
    const createUserToDB = async () => {
        const user = new User({
            id: "8448",
            role: "student",
            password: "mdriyad33333",
            name: {
                firstName: "Moha4444mx",
                middleName: "Riyad",
                lastName: "Hossain",
            },
            dateOfBirth: "11th August 2003",
            gender: "male",
            email: "abc@gmail.com",
            contactNo: "011111111111",
            emergencyContactNo: "999",
            presentAddress: "madhabpur, Hobigonj",
            permanentAddress: "chandpur"
        });
        await user.save();

        console.log(user)
    }
    createUserToDB()

})

export default app;