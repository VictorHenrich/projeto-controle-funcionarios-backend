import {IService } from "../Interfaces";
import EmployeeRepository, { EmployeeCreation } from "../repositories/EmployeeRepository";



export default class EmployeeCreationService implements IService<void>{
    constructor(
        private employeeCreationProps: EmployeeCreation
    ){

    }

    async execute(): Promise<void>{
        const employeeRepository = new EmployeeRepository();

        await employeeRepository.create(this.employeeCreationProps);
    }


}