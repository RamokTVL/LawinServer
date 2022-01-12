import { Context } from "koa";
import Router = require("koa-router")
const router = new Router({
    prefix: "/catalog"
});

router.get("/api/shared/bulk/offers", (ctx:Context) => {
    ctx.body = {}
});



module.exports = router;