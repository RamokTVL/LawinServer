import crypto from "crypto";

module.exports = ():string => {
    let CurrentDate = (new Date()).valueOf().toString();
    let RandomFloat = Math.random().toString();
    let ID = crypto.createHash('md5').update(CurrentDate + RandomFloat).digest('hex');
    let FinishedID = ID.slice(0, 8) + "-" + ID.slice(8, 12) + "-" + ID.slice(12, 16) + "-" + ID.slice(16, 20) + "-" + ID.slice(20, 32);
    return FinishedID;
}