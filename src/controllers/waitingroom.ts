import { Context } from "koa";
import Router = require("koa-router")
const router = new Router({
    prefix: "/waitingroom"
});

router.get("/api/waitingroom", (ctx: Context) => {
    ctx.status = 204;
});

module.exports = router;