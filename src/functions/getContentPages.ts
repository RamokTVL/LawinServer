import { Context } from 'koa';
import { seasonData } from '../interfaces/seasonData';
module.exports = (ctx:Context):any => {
    const seasonChecker = require("./seasonChecker");
    const seasondata:seasonData = require("../../season.json");
    seasonChecker(ctx, seasondata);

    const contentpages = require("../../responses/contentpages.json");
    var Language = "en";

    if(ctx.request.headers["accept-language"]) {
        if (ctx.request.headers["accept-language"].includes("-") && ctx.request.headers["accept-language"] != "es-419") {
            Language = ctx.request.headers["accept-language"].split("-")[0];
        } else {
            Language = ctx.request.headers["accept-language"];
        }
    }

    const modes:string[] = ["saveTheWorldUnowned", "battleRoyale", "creative", "saveTheWorld"];
    const news:string[] = ["savetheworldnews", "battleroyalenews"];

    try {
        modes.forEach(mode => {
            contentpages.subgameselectdata[mode].message.title = contentpages.subgameselectdata[mode].message.title[Language]
            contentpages.subgameselectdata[mode].message.body = contentpages.subgameselectdata[mode].message.body[Language]
        })
    } catch (err) {}

    try {
        if (seasondata.season < 5 || (seasondata.season == 5 && Number(seasondata.build.toString().split(".")[1]) < 30)) { 
            news.forEach(mode => {
                contentpages[mode].news.messages[0].image = "https://i.imgur.com/Az6kyrk.png";
                contentpages[mode].news.messages[1].image = "https://i.imgur.com/Wf8wQQy.png";
            })
        }
    } catch (err) {}

    try {
        contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = `season${seasondata.season}`;
        contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = `season${seasondata.season}`;

        if (seasondata.season == 10) {
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "seasonx";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "seasonx";
        }

        if (seasondata.build == 11.31 || seasondata.build == 11.40) {
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "Winter19";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "Winter19";
        }

        if (seasondata.build == 19.01) {
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "winter2021";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/t-bp19-lobby-xmas-2048x1024-f85d2684b4af.png";
            contentpages.subgameinfo.battleroyale.image = "https://cdn2.unrealengine.com/19br-wf-subgame-select-512x1024-16d8bb0f218f.jpg";
            contentpages.specialoffervideo.bSpecialOfferEnabled = "true";
        }
    } catch (err) {}

    return contentpages;
}