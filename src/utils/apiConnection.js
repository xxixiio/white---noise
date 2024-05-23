import Disconnect from "disconnect";

let Discogs = Disconnect.Client;
let dis = new Discogs("MyDiscogsClient/1.0", {
  consumerKey: "zBrwFMQCpSOKvftzYmqu",
  consumerSecret: "jjvSRndPhZqQRRRskOnVyhXZrbiojVUp",
});
let db = dis.database();

export {
    Disconnect,
    Discogs,
    dis,
    db
}