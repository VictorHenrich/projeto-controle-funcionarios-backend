
export interface IService<T>{
    execute(): T | void | Promise<T> | Promise<void>
}

export interface ICreateRepository<TP, TR>{
    create(params: TP): TR | void | Promise<TR> | Promise<void>
}

export interface IUpdateRepository<TP, TR>{
    update(params: TP): TR | void | Promise<TR> | Promise<void>
}

export interface IDeleteRepository<TP, TR>{
    delete(params: TP): TR | void | Promise<TR> | Promise<void>
}

export interface IGetRepository<TP, TR>{
    get(params: TP): TR | null | Promise<TR> | Promise<null>
}

export interface IFetchRepository<TP, TR>{
    fetch(params: TP): TR[] | Promise<TR[]>
}