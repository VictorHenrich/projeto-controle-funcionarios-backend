import mongoose from "mongoose";


export interface IEmployeeModel{
    id: string,
    name: string,
    wage: number,
    office: string,
    entryDate: Date | string,
    birthday?: Date | string,
    departureDate?: Date
}

const employeeSchema: mongoose.Schema = new mongoose.Schema({
    name: String,
    wage: Number,
    office: String,
    birthday: Date,
    entryDate: Date,
    departureDate: Date
});

export default mongoose.model("employee", employeeSchema);