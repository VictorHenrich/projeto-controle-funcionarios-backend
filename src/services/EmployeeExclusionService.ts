import {IService} from "../Interfaces";
import EmployeeRepository, { EmployeeExclusion } from "../repositories/EmployeeRepository";



export default class EmployeeExclusionService implements IService<void>{
    constructor(
        private employeeExclusionProps: EmployeeExclusion
    ){

    }

    async execute(): Promise<void>{
        const employeeRepository = new EmployeeRepository();

        await employeeRepository.delete(this.employeeExclusionProps);
    }


}