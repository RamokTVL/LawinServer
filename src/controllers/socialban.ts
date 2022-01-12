import { Context } from "koa";
import Router = require("koa-router")
const router = new Router({
    prefix: "/socialban"
});

router.get("/api/public/v1/:random", (ctx:Context) => {
    ctx.body = {
        bans: [],
        warnings: []
    }
})

module.exports = router;