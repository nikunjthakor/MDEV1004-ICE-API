let remoteURI = (process.env.Mongo_uri) as string;
let secret = (process.env.APP_SECRET) as string;

export default {
    remoteURI : remoteURI,
    secret: secret

}