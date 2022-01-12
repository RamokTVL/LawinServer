import { Context } from "koa";
import Router = require("koa-router")
const router = new Router({
    prefix: "/datarouter"
});


router.post("/datarouter/api/v1/public/data", (ctx:Context) => {
    ctx.status = 204;
})

module.exports = router;