
export interface Message<T> {
    content: String;
    status: Number;
    extra: T;
}