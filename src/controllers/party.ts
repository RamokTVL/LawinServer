import { Context } from "koa";
import Router = require("koa-router")
const router = new Router({
    prefix: "/party"
});

router.get("/party/api/v1/Fortnite/user/:user", (ctx: Context) => {
    ctx.body = {
        "current": [],
        "pending": [],
        "invites": [],
        "pings": []
    }
});

router.post("/party/api/v1/Fortnite/user/:user/current/:lol", (ctx: Context) => {
    ctx.body = {}
});

router.post("/party/api/v1/Fortnite/user/:user/pending/:lol", (ctx: Context) => {
    ctx.body = {}
});

router.post("/party/api/v1/Fortnite/user/:user/invites/:lol", (ctx: Context) => {
    ctx.body = {}
});

router.post("/party/api/v1/Fortnite/user/:user/pings/:lol", (ctx: Context) => {
    ctx.body = {}
});



module.exports = router;