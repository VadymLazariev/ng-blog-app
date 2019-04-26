export interface User {
    mail: {
        type: string,
        unique: boolean,
        required: boolean
    };
    hash: string;
    salt: string;
}
