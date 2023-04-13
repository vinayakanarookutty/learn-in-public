

export interface IMongoDal{
    mongoUrl: string;
}

export interface  ICreateItem{
    data:any
    resource:string
    uniqueCheck?:any
}

export interface IAuthService{
    relativePath:string
}

export interface IGetItem{
resource:string
queryObj:any
}

export interface IBlog{
    title:string,
    userId:any,
    description:string,
    username:string
}