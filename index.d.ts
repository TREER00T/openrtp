type RTPObject = {
    fileLocation: string,
    port?: number,
    host?: string,
    route?: string
}

declare module 'openrtp' {
    export function setup(data: RTPObject): void;

}