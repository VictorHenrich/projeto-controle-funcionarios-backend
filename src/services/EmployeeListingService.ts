import {IService } from "../Interfaces";
import { IEmployeeModel } from "../models/EmployeeModel";
import EmployeeRepository, { EmployeeFetching } from "../repositories/EmployeeRepository";



export default class EmployeeListingService implements IService<IEmployeeModel | IEmployeeModel[]>{
    constructor(
        private employeeListingProps: EmployeeFetching
    ){

    }

    async execute(): Promise<IEmployeeModel[]>{
        const employeeRepository = new EmployeeRepository();

        return await employeeRepository.fetch(this.employeeListingProps);
    }


}