import { Request, Response } from "express";
import EmployeeCreationService from "../services/EmployeeCreationService";
import { ResponseBadRequest, ResponseSuccess } from "../utils/Responses";
import EmployeeUpdateService from "../services/EmployeeUpdateService";
import EmployeeExclusionService from "../services/EmployeeExclusionService";
import EmployeeCaptureService from "../services/EmployeeCaptureService";
import EmployeeListingService from "../services/EmployeeListingService";



export default class EmployeeController{
    static async createEmployee(request: Request, response: Response){
        try{
            const employeeCreationService = new EmployeeCreationService(request.body);

            await employeeCreationService.execute();

            return response.status(200).json(new ResponseSuccess());

        }catch(error){
            return response
                        .status(500)
                        .json(new ResponseBadRequest("Failed to insert employee!"));
        }
    }

    static async updateEmployee(request: Request, response: Response){
        try{
            const employeeUpdateService = new EmployeeUpdateService({
                ...request.body,
                id: request.params.id
            });

            await employeeUpdateService.execute();

            return response.status(200).json(new ResponseSuccess());

        }catch(error){
            return response
                        .status(500)
                        .json(new ResponseBadRequest("Failed to update employee!"));
        }
    }

    static async deleteEmployee(request: Request, response: Response){
        try{
            const employeeExclusionService = new EmployeeExclusionService({
                id: request.params.id
            });

            await employeeExclusionService.execute();

            return response.status(200).json(new ResponseSuccess());

        }catch(error){
            return response
                        .status(500)
                        .json(new ResponseBadRequest("Failed to exclude employee!"));
        }
    }

    static async getEmployee(request: Request, response: Response){
        try{
            const employeeCaptureService = new EmployeeCaptureService({
                id: request.params.id
            });

            const employee = await employeeCaptureService.execute();

            return response.status(200).json(new ResponseSuccess(employee));

        }catch(error){
            return response
                        .status(500)
                        .json(new ResponseBadRequest("Failed to exclude employee!"));
        }
    }

    static async fetchEmployee(request: Request, response: Response){
        try{
            const employeeListingService = new EmployeeListingService();

            const employees = await employeeListingService.execute();

            return response.status(200).json(new ResponseSuccess(employees));

        }catch(error){
            return response
                        .status(500)
                        .json(new ResponseBadRequest("Failed to exclude employee!"));
        }
    }
}