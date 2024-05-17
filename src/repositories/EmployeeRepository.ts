import { ICreateRepository, IDeleteRepository, IFetchRepository, IGetRepository, IUpdateRepository } from "../Interfaces";
import Employee, { IEmployeeModel } from "../models/EmployeeModel";


export type EmployeeCreation = Omit<IEmployeeModel, "id">; 

export type EmployeeExclusion = Pick<IEmployeeModel, "id">;

export type EmployeeUpdate = IEmployeeModel;

export type EmployeeGetting = Pick<IEmployeeModel, "id">;

export type EmployeeFetching = Pick<IEmployeeModel, "name" | "office">;


export default class EmployeeRepository 
    implements  ICreateRepository<EmployeeCreation, void>, 
                IUpdateRepository<EmployeeUpdate, void>,
                IDeleteRepository<EmployeeExclusion, void>,
                IGetRepository<EmployeeGetting, IEmployeeModel | null>,
                IFetchRepository<EmployeeFetching, IEmployeeModel>
    
{
    async fetch(params: EmployeeFetching): Promise<IEmployeeModel[]> {
        let filter: any = {};

        if(params.name)
            filter = {...filter, name: {$regex: params.name, $i: true}};

        if(params.office)
            filter = {...filter, office: {$regex: params.office, $i: true}};

        return await Employee.find(filter);
    }

    async get({ id : _id }: EmployeeGetting): Promise<IEmployeeModel | null> {
        return await Employee.findOne({ _id });
    }

    async delete({ id: _id }: EmployeeExclusion): Promise<void> {
        await Employee.deleteOne({ _id });
    }

    async update({ id: _id, ...params }: EmployeeUpdate): Promise<void> {
        await Employee.updateOne({ _id }, {$set: {...params}});
    }

    async create(params: EmployeeCreation): Promise<void> {
        const employee = new Employee({...params});

        await employee.save();
    }
} 