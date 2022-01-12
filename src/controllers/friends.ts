import { Context } from "koa";
import Router = require("koa-router");
const friendslist = require("../../responses/friendslist.json");
const friendslist2 = require("../../responses/friendslist2.json");
const router = new Router({
    prefix: "/friends"
});

router.get("/api/v1/:friend/settings", (ctx:Context) => {
    ctx.body = {}
});

router.get("/api/v1/:friend/blocklist", (ctx:Context) => {
    ctx.body = []
});

router.get("/api/public/list/fortnite/:a/recentPlayers", (ctx:Context) => {
    ctx.body = [];
})
router.get("/api/public/friends/:a", (ctx:Context) => {
    ctx.body = friendslist;
})
router.get("/api/v1/:a/summary", (ctx:Context) => {
    ctx.body = friendslist2;
});

router.get("/api/public/blocklist/:wtf",  (ctx:Context) => {
    ctx.body = ({
        "blockedUsers": []
    })
})
module.exports = router;