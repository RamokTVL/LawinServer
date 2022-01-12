import { Context } from 'koa';
import crypto from "crypto";
import Router = require("koa-router")
import fs from "fs";
import path from "path";
import { seasonData } from '../interfaces/seasonData';
import koaBody = require('koa-body');
const config = require("../../config.json");
const router = new Router({
    prefix: "/fortnite"
});
const makeid = require("../functions/makeId");


const catalog = require("../functions/getItemShop")();
const privacy = require("../../responses/privacy.json");



router.use((ctx:Context, next: any) => {
    if(ctx.originalUrl.includes("api/cloudstorage/user")) {
        ctx.rawBody = '';
        ctx.req.setEncoding("latin1");
        ctx.req.on("data", function(chunk) {
            ctx.rawBody += chunk;
        });

        ctx.req.on("end", () => {
            next();
        });
    }
});

router.use(koaBody());

router.get("/api/storefront/v2/catalog", (ctx: Context) => {
    if(ctx.request.headers["user-agent"]?.includes("2870186")) {
        ctx.status = 404;
    } else {
        ctx.status = 200;
    }

    ctx.body = catalog
});

router.get("/api/version", (ctx:Context) => {
    ctx.body = {
        "app": "fortnite",
        "serverDate": new Date().toISOString(),
        "overridePropertiesVersion": "unknown",
        "cln": "17951730",
        "build": "444",
        "moduleName": "Fortnite-Core",
        "buildDate": "2021-10-27T21:00:51.697Z",
        "version": "18.30",
        "branch": "Release-18.30",
        "modules": {
          "Epic-LightSwitch-AccessControlCore": {
            "cln": "17237679",
            "build": "b2130",
            "buildDate": "2021-08-19T18:56:08.144Z",
            "version": "1.0.0",
            "branch": "trunk"
          },
          "epic-xmpp-api-v1-base": {
            "cln": "5131a23c1470acbd9c94fae695ef7d899c1a41d6",
            "build": "b3595",
            "buildDate": "2019-07-30T09:11:06.587Z",
            "version": "0.0.1",
            "branch": "master"
          },
          "epic-common-core": {
            "cln": "17909521",
            "build": "3217",
            "buildDate": "2021-10-25T18:41:12.486Z",
            "version": "3.0",
            "branch": "TRUNK"
          }
        }
      }
});

router.get("/api/game/v2/tryPlayOnPlatform/account/:random", (ctx:Context) => {
    ctx.set("Content-Type", "text/plain");
    ctx.body = true;
});

router.get("/api/game/v2/grant_access/:random", (ctx:Context) => {
    
    ctx.status = 204;
});

router.get("/api/game/v2/events/tournamentandhistory/:tournament/EU/WindowsClient", (ctx: Context) => {
    ctx.body = {}
});

router.get("/api/game/v2/privacy/account/:accountId", (ctx:Context) => {
    privacy.accountId = ctx.params.accountId;

    ctx.body = privacy
});

router.get("/api/matchmaking/session/findPlayer/:player", (ctx:Context) => {
    ctx.status = 200;
});

router.post("/api/game/v2/privacy/account/:accountId", (ctx:Context) => {
    privacy.accountId = ctx.params.accountId;
    privacy.optOutOfPublicLeaderboards = ctx.requset.body.optOutOfPublicLeaderboards;

    fs.writeFileSync("./responses/privacy.json", JSON.stringify(privacy, null, 2));

    ctx.body = privacy
});

router.get("/api/statsv2/account/:accountId", (ctx:Context) => {
    ctx.body = {
        "startTime": 0,
        "endTime": 0,
        "stats": {},
        "accountId": ctx.params.accountId
    }
});
router.get("/api/feedback/:feed", (ctx:Context) => {
    ctx.status = 200;
});
router.get("/api/statsv2/query", (ctx:Context) => {
    ctx.body = []
});
router.get("/api/game/v2/enabled_features", (ctx:Context) => {
    ctx.body = []
});
router.get("/api/game/v2/events/v2/setSubgroup/:sub", (ctx:Context) => {
    ctx.status = 204;
});

router.get("/api/v2/versioncheck/:ver", (ctx:Context) => {
    ctx.body = {
        "type": "NO_UPDATE"
    }
});
router.get("/api/versioncheck/:ver", (ctx:Context) => {
    ctx.body = {
        "type": "NO_UPDATE"
    }
});
router.get("/api/game/v2/friendcodes/:a/epic", (ctx:Context) => {
    ctx.body = [];
})

router.get("/api/game/v2/matchmakingservice/ticket/player/:a", (ctx:Context) => {
    if(typeof ctx.query["bucketId"] == "string") {
        config.currentbuildUniqueId = ctx.query["bucketId"].split(":")[0];
        fs.writeFileSync("./config.json", JSON.stringify(config, null, 2));

        ctx.body = {
            "serviceUrl": "ws://127.0.0.1:443",
            "ticketType": "mms-player",
            "payload": "69=",
            "signature": "420="
        }
    }
});

router.get("/api/game/v2/matchmaking/account/:accountId/session/:sessionId", (ctx: Context) => {
    ctx.body = {
        accountId: ctx.params.accountId,
        sessionId: ctx.params.sessionId,
        key: "AOJEv8uTFmUh7XM2328kq9rlAzeQ5xzWzPIiyKn2s7s="
    };
});

router.get("/api/matchmaking/session/:session_id", (ctx:Context) => {
    ctx.body = {
        "id": ctx.params.session_id,
        "ownerId": crypto.createHash('md5').update(`1${Math.random().toString()}`).digest('hex').toUpperCase(),
        "ownerName": "[DS]fortnite-liveeugcec1c2e30ubrcore0a-z8hj-1968",
        "serverName": "[DS]fortnite-liveeugcec1c2e30ubrcore0a-z8hj-1968",
        "serverAddress": "127.0.0.1",
        "serverPort": 9015,
        "maxPublicPlayers": 220,
        "openPublicPlayers": 175,
        "maxPrivatePlayers": 0,
        "openPrivatePlayers": 0,
        "attributes": {
          "REGION_s": "EU",
          "GAMEMODE_s": "FORTATHENA",
          "ALLOWBROADCASTING_b": true,
          "SUBREGION_s": "GB",
          "DCID_s": "FORTNITE-LIVEEUGCEC1C2E30UBRCORE0A-14840880",
          "tenant_s": "Fortnite",
          "MATCHMAKINGPOOL_s": "Any",
          "STORMSHIELDDEFENSETYPE_i": 0,
          "HOTFIXVERSION_i": 0,
          "PLAYLISTNAME_s": "Playlist_DefaultSolo",
          "SESSIONKEY_s": crypto.createHash('md5').update(`2${Math.random().toString()}`).digest('hex').toUpperCase(),
          "TENANT_s": "Fortnite",
          "BEACONPORT_i": 15009
        },
        "publicPlayers": [],
        "privatePlayers": [],
        "totalPlayers": 45,
        "allowJoinInProgress": false,
        "shouldAdvertise": false,
        "isDedicated": false,
        "usesStats": false,
        "allowInvites": false,
        "usesPresence": false,
        "allowJoinViaPresence": true,
        "allowJoinViaPresenceFriendsOnly": false,
        "buildUniqueId": config.currentbuildUniqueId, // buildUniqueId is different for every build, this uses the netver of the version you're currently using
        "lastUpdated": new Date().toISOString(),
        "started": false
      }
});

router.post("/api/matchmaking/session/:session/join", (ctx:Context) => {
    ctx.status = 204;
});

router.post("/api/matchmaking/session/matchMakingRequest", (ctx:Context) => {
    ctx.body = [];
})
router.get("/api/public/account/*/externalAuths", (ctx:Context) => {
    ctx.body = [];
})
router.get("/api/game/v2/twitch/:twitch", (ctx:Context) => {
    ctx.status = 200;
});

router.get("/api/stats/accountId/:accountId/bulk/window/alltime", (ctx:Context) => {
    ctx.body = {
        "startTime": 0,
        "endTime": 0,
        "stats": {},
        "accountId": ctx.params.accountId
    }
});

router.delete("/api/oauth/sessions/kill", (ctx: Context) => {
    ctx.status = 204;
});
router.delete("/api/oauth/sessions/kill/:a", (ctx: Context) => {
    ctx.status = 204;
});

router.post("/api/game/v2/chat/:a/recommendGeneralChatRooms/pc", (ctx:Context) => {
    ctx.body = {};
});

router.get("/api/receipts/v1/account/:xd/receipts", (ctx:Context) => {
    ctx.body = [];
});

router.get("/api/cloudstorage/system", (ctx: Context) => {
    if(["7315705", "7463579", "7609292"].some((id:string) => ctx["headers"]["user-agent"]?.includes(id))) {
        ctx.status = 404;  
    }  else {
        const seasonChecker = require("../functions/seasonChecker");
        const seasondata:seasonData = require("../../season.json");
        seasonChecker(ctx, seasondata);
        if(seasondata.season == 10) {
            ctx.status = 404;  
        } else {
            const dir = path.join(__dirname, 'CloudStorage')
            var CloudFiles = [];
            fs.readdirSync(dir).forEach(name => {
                if (name.toLowerCase().endsWith(".ini")) {
                    const ParsedFile = fs.readFileSync(path.join(__dirname, 'CloudStorage', name));
                    const ParsedStats = fs.statSync(path.join(__dirname, 'CloudStorage', name));
        
                    CloudFiles.push({
                        "uniqueFilename": name,
                        "filename": name,
                        "hash": crypto.createHash('sha1').update(ParsedFile).digest('hex'),
                        "hash256": crypto.createHash('sha256').update(ParsedFile).digest('hex'),
                        "length": ParsedFile.length,
                        "contentType": "application/octet-stream",
                        "uploaded": ParsedStats.mtime,
                        "storageType": "S3",
                        "storageIds": {},
                        "doNotCache": true
                    })
                }
            });
        }
    }
});

router.get("/api/cloudstorage/system/:file", (ctx:Context) => {
    const file = path.join(__dirname, 'CloudStorage', ctx.params.file);
    ctx.status = 200;
    if (fs.existsSync(file)) {
        const ParsedFile = fs.readFileSync(file, 'utf-8');
     
        ctx.body = ParsedFile;
    }
});

router.get("/api/cloudstorage/user/:user/:file", (ctx:Context) => {
    ctx.set("Content-Type", "application/octet-stream")
    if (ctx.params.file.toLowerCase() != "clientsettings.sav") {
        ctx.status = 404;
        ctx.body = {
            error: "file not found"
        }
    } else {
        const seasonChecker = require("../functions/seasonChecker");
        const seasondata:seasonData = require("../../season.json");
        seasonChecker(ctx, seasondata);
        var currentBuildID = seasondata.CL;

        const file = path.join(__dirname, `./ClientSettings/ClientSettings-${currentBuildID}.Sav`);
    
        if (fs.existsSync(file)) {
            //return res.status(200).sendFile(file);
            ctx.status = 200;
            ctx.attachment(file);
        } else {
           ctx.status = 200;
        }
    }

});

router.get("/api/cloudstorage/user/:user", (ctx: Context) => {
    ctx.set("Content-Type", "application/json");
    const seasonChecker = require("../functions/seasonChecker");
    const seasondata:seasonData = require("../../season.json");
    seasonChecker(ctx, seasondata);
    var currentBuildID = seasondata.CL;
    const file = `./ClientSettings/ClientSettings-${currentBuildID}.Sav`;
    if (fs.existsSync(file)) {
        const utf8_file = fs.readFileSync(path.join(__dirname, file), 'utf-8');
        const file_stats = fs.statSync(path.join(__dirname, file));

        ctx.body = [{
            "uniqueFilename": "ClientSettings.Sav",
            "filename": "ClientSettings.Sav",
            "hash": crypto.createHash('sha1').update(utf8_file).digest('hex'),
            "hash256": crypto.createHash('sha256').update(utf8_file).digest('hex'),
            "length": Buffer.byteLength(utf8_file),
            "contentType": "application/octet-stream",
            "uploaded": file_stats.mtime,
            "storageType": "S3",
            "storageIds": {},
            "accountId": ctx.params.accountId,
            "doNotCache": true
        }];
    } else {
        ctx.body = {};
    }
});

router.put("/api/cloudstorage/user/:user/:file", (ctx:Context) => {
    const seasonChecker = require("../functions/seasonChecker");
    const seasondata:seasonData = require("../../season.json");
    seasonChecker(ctx, seasondata);
    var currentBuildID = seasondata.CL;
    fs.writeFileSync(`./ClientSettings/ClientSettings-${currentBuildID}.Sav`, ctx.rawBody, 'latin1');
    ctx.status = 204;
});

router.get("/api/game/v2/leaderboards/cohort/:xd", (ctx:Context) => {
    ctx.body = [];
});

router.get("/api/calendar/v1/timeline", (ctx:Context) => {
    const seasonChecker = require("../functions/seasonChecker");
    const seasondata:seasonData = require("../../season.json");
    seasonChecker(ctx, seasondata);
    var activeEvents = [
        {
            "eventType": `EventFlag.Season${seasondata.season}`,
            "activeUntil": "9999-01-01T00:00:00.000Z",
            "activeSince": "2020-01-01T00:00:00.000Z"
        },
        {
            "eventType": `EventFlag.${seasondata.lobby}`,
            "activeUntil": "9999-01-01T00:00:00.000Z",
            "activeSince": "2020-01-01T00:00:00.000Z"
        }];
    
        if (seasondata.season == 3) {
            activeEvents.push(
            {
                "eventType": "EventFlag.Spring2018Phase1",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.Spring2018Phase2",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.Spring2018Phase3",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.Spring2018Phase4",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            })
        }
    
        if (seasondata.season == 4) {
            activeEvents.push(
            {
                "eventType": "EventFlag.Blockbuster2018",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.Blockbuster2018Phase1",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.Blockbuster2018Phase2",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.Blockbuster2018Phase3",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.Blockbuster2018Phase4",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            })
        }
    
        if (seasondata.season == 5) {
            activeEvents.push(
            {
                "eventType": "EventFlag.RoadTrip2018",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.Horde",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            })
        }
        
        if (seasondata.build == 5.10) {
            activeEvents.push(
            {
                "eventType": "EventFlag.BirthdayBattleBus",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            })
        }
    
        if (seasondata.season == 6) {
            activeEvents.push(
            {
                "eventType": "EventFlag.Fortnitemares",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.FortnitemaresPhase1",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.FortnitemaresPhase2",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            })
        }
        
        if (seasondata.build == 6.20 || seasondata.build == 6.21) {
            activeEvents.push(
            {
                "eventType": "EventFlag.LobbySeason6Halloween",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.HalloweenBattleBus",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            })
        }
    
        if (seasondata.season == 7) {
            activeEvents.push(
            {
                "eventType": "EventFlag.Frostnite",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            })
        }
    
        if (seasondata.season == 8) {
            activeEvents.push(
            {
                "eventType": "EventFlag.Spring2019",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.Spring2019.Phase1",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.Spring2019.Phase2",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            })
        }
    
    
        if (seasondata.season == 9) {
            activeEvents.push(
            {
                "eventType": "EventFlag.Season9.Phase1",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.Season9.Phase2",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            })
        }
    
        if (seasondata.season == 10) {
            activeEvents.push(
            {
                "eventType": "EventFlag.Season10.Phase2",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.Season10.Phase3",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            })
        }
    
        // Credits to Silas for three of these event flags and credits to uni for testing on 11.31
        if (seasondata.build == 11.31 || seasondata.build == 11.40) {
            activeEvents.push(
            {
                "eventType": "EventFlag.Winterfest.Tree",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.LTE_WinterFest",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.LTE_WinterFest2019",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.HolidayDeco",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.Season11.Frostnite",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.Season11.WinterFest.Quests.Phase1",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "EventFlag.Season11.WinterFest.Quests.Phase2",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            })
        }
    
        if (seasondata.build == 19.01) {
            activeEvents.push(
            {
                "eventType": "EventFlag.LTE_WinterFest",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            },
            {
                "eventType": "WF_IG_AVAIL",
                "activeUntil": "9999-01-01T00:00:00.000Z",
                "activeSince": "2020-01-01T00:00:00.000Z"
            })
        }
    
        ctx.body = ({
            "channels": {
                "client-matchmaking": {
                    "states": [],
                    "cacheExpire": "9999-01-01T22:28:47.830Z"
                },
                "client-events": {
                    "states": [{
                        "validFrom": "2020-01-01T20:28:47.830Z",
                        "activeEvents": activeEvents,
                        "state": {
                            "activeStorefronts": [],
                            "eventNamedWeights": {},
                            "seasonNumber": seasondata.season,
                            "seasonTemplateId": `AthenaSeason:athenaseason${seasondata.season}`,
                            "matchXpBonusPoints": 0,
                            "seasonBegin": "2020-01-01T13:00:00Z",
                            "seasonEnd": "9999-01-01T14:00:00Z",
                            "seasonDisplayedEnd": "9999-01-01T07:30:00Z",
                            "weeklyStoreEnd": "9999-01-01T00:00:00Z",
                            "stwEventStoreEnd": "9999-01-01T00:00:00.000Z",
                            "stwWeeklyStoreEnd": "9999-01-01T00:00:00.000Z",
                            "dailyStoreEnd": "9999-01-01T00:00:00Z"
                        }
                    }],
                    "cacheExpire": "9999-01-01T22:28:47.830Z"
                }
            },
            "eventsTimeOffsetHrs": 0,
            "cacheIntervalMins": 10,
            "currentTime": new Date().toISOString()
        });

        ctx.status = 200;
});

router.get("/api/game/v2/world/info", (ctx:Context) => {
    const worldstw = require("../functions/getTheater")(ctx);
    ctx.body = worldstw;
});

router.get("/api/storefront/v2/keychain", (ctx:Context) => {
    const keychain = require("../../responses/keychain.json");
    ctx.body = keychain;
});

router.get("/api/oauth/verify", (ctx:Context) => {
    ctx.body = {
        "token": "lawinstokenlol",
        "session_id": "3c3662bcb661d6de679c636744c66b62",
        "token_type": "bearer",
        "client_id": "lawinsclientidlol",
        "internal_client": true,
        "client_service": "fortnite",
        "account_id": "LawinServer",
        "expires_in": 28800,
        "expires_at": "9999-12-02T01:12:01.100Z",
        "auth_method": "exchange_code",
        "display_name": "LawinServer",
        "app": "fortnite",
        "in_app_id": "LawinServer",
        "device_id": "lawinsdeviceidlol"
    }  
});



module.exports = router;