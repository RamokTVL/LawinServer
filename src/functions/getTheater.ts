import { Context } from "koa";
import { seasonData } from '../interfaces/seasonData';

module.exports = (ctx:Context) => {
    const seasonChecker = require("./seasonChecker.js");
    const seasondata:seasonData = require("../../season.json");
    seasonChecker(ctx, seasondata);

    let theater = JSON.stringify(require("../../responses/worldstw.json"));
    try {
        if (seasondata.season >= 16 || seasondata.build == 15.30 || seasondata.build == 15.40 || seasondata.build == 15.50) {
            theater = theater.replace(/\/Game\//ig, "\/SaveTheWorld\/");
        }
    } catch (err) {}

    theater = JSON.parse(theater)

    return theater;
}