declare module Models {
    export interface IBaseStorageModel<T> {
        id: string;
        data: T;
    }

    export interface IUserSettings {
        id: string;
        // add extra fields here
    }

    export interface ILoginCredentials {
        email: string;
        password: string;
    }
}