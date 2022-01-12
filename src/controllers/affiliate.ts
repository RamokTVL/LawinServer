import { Context } from "koa";
import Router = require("koa-router")
const router = new Router({
    prefix: "/affiliate"
});

router.get("/api/public/affiliates/slug/:slug", (ctx: Context) => {
    const supportedCodes:string[] = require("../../responses/SAC.json");
    if(supportedCodes.some((code:string) => code.toLowerCase() == ctx.params.slug)) {
        ctx.body = {
            "id": ctx.params.slug,
            "slug": ctx.params.slug,
            "displayName": ctx.params.slug,
            "status": "ACTIVE",
            "verified": false
        };
    }
});

module.exports = router;