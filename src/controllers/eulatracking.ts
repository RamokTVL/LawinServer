import { Context } from "koa";
import Router = require("koa-router")
const router = new Router({
    prefix: "/eulatracking"
});


router.get("/api/shared/agreements/:a", (ctx:Context) => {
    ctx.body = {}
})


module.exports = router;