export declare function makeSalt(): string;
export declare function encryptPassword(password: string, salt: string): string;
export declare function hashPassword(password: string): string;
export declare function getHashCode(str: string): number;
