type RTPObject = {
    fileLocation: string,
    port?: number,
    host?: string,
    route?: string
}

declare module 'openrtp' {

    export default function (data: RTPObject): void;

}