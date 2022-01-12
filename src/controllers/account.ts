import { Context } from "koa";
import Router = require("koa-router")
const router = new Router({
    prefix: "/account"
});

router.get("/api/public/account", (ctx:Context) => {
    ctx.body = 
        [
            {
                "id": ctx.query.accountId,
                "displayName": ctx.query.accountId,
                "externalAuths": {}
            },
            {
                "id": "SubtoLawin_LOL123",
                "displayName": "Subscribe to Lawin on YouTube!",
                "externalAuths": {
                    "xbl": {
                        "type": "xbl",
                        "externalAuthIdType": "xuid",
                        "accountId": "SubtoLawin_LOL123",
                        "externalDisplayName": "YouTube-Lawin",
                        "authIds": [{
                            "id": "0",
                            "type": "xuid"
                        }]
                    },
                    "psn": {
                        "type": "psn",
                        "externalAuthId": "0",
                        "externalAuthIdType": "psn_user_id",
                        "accountId": "SubtoLawin_LOL123",
                        "externalDisplayName": "YouTube-Lawin",
                        "authIds": [{
                            "id": "0",
                            "type": "psn_user_id"
                        }]
                    }
                }
            },
            {
                "id": "Followlawin_LOL123",
                "displayName": "Follow @lawin_010 on twitter!",
                "externalAuths": {
                    "xbl": {
                        "type": "xbl",
                        "externalAuthIdType": "xuid",
                        "accountId": "Followlawin_LOL123",
                        "externalDisplayName": "Twitter-lawin_010",
                        "authIds": [{
                            "id": "0",
                            "type": "xuid"
                        }]
                    },
                    "psn": {
                        "type": "psn",
                        "externalAuthId": "0",
                        "externalAuthIdType": "psn_user_id",
                        "accountId": "Followlawin_LOL123",
                        "externalDisplayName": "Twitter-lawin_010",
                        "authIds": [{
                            "id": "0",
                            "type": "psn_user_id"
                        }]
                    }
                }
            },
            {
                "id": "NINJALOL_1238",
                "displayName": "Ninja",
                "externalAuths": {
                    "xbl": {
                        "type": "xbl",
                        "externalAuthIdType": "xuid",
                        "accountId": "NINJALOL_1238",
                        "externalDisplayName": "Ninja",
                        "authIds": [{
                            "id": "0",
                            "type": "xuid"
                        }]
                    },
                    "psn": {
                        "type": "psn",
                        "externalAuthId": "0",
                        "externalAuthIdType": "psn_user_id",
                        "accountId": "NINJALOL_1238",
                        "externalDisplayName": "Ninja",
                        "authIds": [{
                            "id": "0",
                            "type": "psn_user_id"
                        }]
                    }
                }
            },
            {
                "id": "TFUELOL_1238",
                "displayName": "Tfue",
                "externalAuths": {
                    "xbl": {
                        "type": "xbl",
                        "externalAuthIdType": "xuid",
                        "accountId": "TFUELOL_1238",
                        "externalDisplayName": "Tfue",
                        "authIds": [{
                            "id": "0",
                            "type": "xuid"
                        }]
                    },
                    "psn": {
                        "type": "psn",
                        "externalAuthId": "0",
                        "externalAuthIdType": "psn_user_id",
                        "accountId": "TFUELOL_1238",
                        "externalDisplayName": "Tfue",
                        "authIds": [{
                            "id": "0",
                            "type": "psn_user_id"
                        }]
                    }
                }
            },
            {
                "id": "ALIALOL_1238",
                "displayName": "Ali-A",
                "externalAuths": {
                    "xbl": {
                        "type": "xbl",
                        "externalAuthIdType": "xuid",
                        "accountId": "ALIALOL_1238",
                        "externalDisplayName": "Ali-A",
                        "authIds": [{
                            "id": "0",
                            "type": "xuid"
                        }]
                    },
                    "psn": {
                        "type": "psn",
                        "externalAuthId": "0",
                        "externalAuthIdType": "psn_user_id",
                        "accountId": "ALIALOL_1238",
                        "externalDisplayName": "Ali-A",
                        "authIds": [{
                            "id": "0",
                            "type": "psn_user_id"
                        }]
                    }
                }
            },
            {
                "id": "DAKOTAZLOL_1238",
                "displayName": "Dark",
                "externalAuths": {
                    "xbl": {
                        "type": "xbl",
                        "externalAuthIdType": "xuid",
                        "accountId": "DAKOTAZLOL_1238",
                        "externalDisplayName": "Dark",
                        "authIds": [{
                            "id": "0",
                            "type": "xuid"
                        }]
                    },
                    "psn": {
                        "type": "psn",
                        "externalAuthId": "0",
                        "externalAuthIdType": "psn_user_id",
                        "accountId": "DAKOTAZLOL_1238",
                        "externalDisplayName": "Dark",
                        "authIds": [{
                            "id": "0",
                            "type": "psn_user_id"
                        }]
                    }
                }
            },
            {
                "id": "SYPHERPKLOL_1238",
                "displayName": "SypherPK",
                "externalAuths": {
                    "xbl": {
                        "type": "xbl",
                        "externalAuthIdType": "xuid",
                        "accountId": "SYPHERPKLOL_1238",
                        "externalDisplayName": "SypherPK",
                        "authIds": [{
                            "id": "0",
                            "type": "xuid"
                        }]
                    },
                    "psn": {
                        "type": "psn",
                        "externalAuthId": "0",
                        "externalAuthIdType": "psn_user_id",
                        "accountId": "SYPHERPKLOL_1238",
                        "externalDisplayName": "SypherPK",
                        "authIds": [{
                            "id": "0",
                            "type": "psn_user_id"
                        }]
                    }
                }
            },
            {
                "id": "NICKEH30LOLL_2897669",
                "displayName": "Nick Eh 30",
                "externalAuths": {
                    "xbl": {
                        "type": "xbl",
                        "externalAuthIdType": "xuid",
                        "accountId": "NICKEH30LOLL_2897669",
                        "externalDisplayName": "Nick Eh 30",
                        "authIds": [{
                            "id": "0",
                            "type": "xuid"
                        }]
                    },
                    "psn": {
                        "type": "psn",
                        "externalAuthId": "0",
                        "externalAuthIdType": "psn_user_id",
                        "accountId": "NICKEH30LOLL_2897669",
                        "externalDisplayName": "Nick Eh 30",
                        "authIds": [{
                            "id": "0",
                            "type": "psn_user_id"
                        }]
                    }
                }
            }
        ]
    
});

router.get("/api/public/account/:accountId", (ctx:Context) => {
     ctx.body = {
        "id": ctx.params.accountId,
        "displayName": ctx.params.accountId,
        "name": "Lawin",
        "email": ctx.params.accountId + "@lawin.com",
        "failedLoginAttempts": 0,
        "lastLogin": new Date().toISOString(),
        "numberOfDisplayNameChanges": 0,
        "ageGroup": "UNKNOWN",
        "headless": false,
        "country": "US",
        "lastName": "Server",
        "preferredLanguage": "en",
        "canUpdateDisplayName": false,
        "tfaEnabled": false,
        "emailVerified": true,
        "minorVerified": false,
        "minorExpected": false,
        "minorStatus": "UNKNOWN"
    }
});

router.get("/api/epicdomains/ssodomains", (ctx: Context) => {
    ctx.body = [
        "unrealengine.com",
        "unrealtournament.com",
        "fortnite.com",
        "epicgames.com"
    ]
});

module.exports = router;