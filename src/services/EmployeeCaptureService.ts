import {IService } from "../Interfaces";
import { IEmployeeModel } from "../models/EmployeeModel";
import EmployeeRepository, { EmployeeGetting } from "../repositories/EmployeeRepository";



export default class EmployeeCaptureService implements IService<IEmployeeModel | null>{
    constructor(
        private employeeCaptureProps: EmployeeGetting
    ){

    }

    async execute(): Promise<IEmployeeModel | null>{
        const employeeRepository = new EmployeeRepository();

        return await employeeRepository.get(this.employeeCaptureProps);
    }


}