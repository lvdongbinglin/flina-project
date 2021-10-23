export interface ReqInfo {
    ip: string;
    headers: string;
    ua: string;
    method: string;
    url: string;
    query: string;
    param: string;
    body: string;
}
export declare const reqresLogger: (req: any, res: any, next: any) => void;
