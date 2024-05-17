import {IService} from "../Interfaces";
import EmployeeRepository, { EmployeeUpdate } from "../repositories/EmployeeRepository";



export default class EmployeeUpdateService implements IService<void>{
    constructor(
        private employeeUpdateProps: EmployeeUpdate
    ){

    }

    async execute(): Promise<void>{
        const employeeRepository = new EmployeeRepository();

        await employeeRepository.update(this.employeeUpdateProps);
    }


}