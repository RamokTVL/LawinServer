import { Context } from "koa";
import Router = require("koa-router")
const router = new Router({
    prefix: "/api"
});

router.get("/v1/user/setting", (ctx: Context) => {
    ctx.body = []
});
router.get("/v1/events/Fortnite/download/:dl", (ctx: Context) => {
    ctx.body = {}
});

module.exports = router;