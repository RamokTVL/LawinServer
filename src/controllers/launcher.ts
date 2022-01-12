import { Context } from "koa";
import Router = require("koa-router")
const router = new Router({
    prefix: "/launcher"
});

router.get("/launcher/api/public/distributionpoints/", (ctx: Context) => {
    ctx.body = {
        "distributions": [
            "https://download.epicgames.com/",
            "https://download2.epicgames.com/",
            "https://download3.epicgames.com/",
            "https://download4.epicgames.com/",
            "https://epicgames-download1.akamaized.net/"
        ]
    };
})

module.exports = router;