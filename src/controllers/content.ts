import { Context } from "koa";
import Router = require("koa-router")
const router = new Router({
    prefix: "/content"
});

const getContentPages = require("../functions/getContentPages");

router.get("/api/pages/*", (ctx:Context) => {
    const contentpages = getContentPages(ctx);

    ctx.body = (contentpages)
})

module.exports = router;