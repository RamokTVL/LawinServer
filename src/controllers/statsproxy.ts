import { Context } from "koa";
import Router = require("koa-router")
const router = new Router({
    prefix: "/statsproxy"
});

router.get("/statsproxy/api/statsv2/account/:accountId", (ctx:Context) => {
    ctx.body = {
        "startTime": 0,
        "endTime": 0,
        "stats": {},
        "accountId": ctx.params.accountId
    }
});

router.post("/statsproxy/api/statsv2/query", (ctx:Context) => {
    ctx.body = []
});
module.exports = router;