import path from "path";
import crypto from "crypto";
import fs, { Dirent } from "fs";
import koa from "koa";
import { Context } from 'koa';
import koaBody from 'koa-body';
import Router from "koa-router";

const app = new koa();

app.use(koaBody({
    multipart: true
}));

fs.readdirSync("dist/controllers", {withFileTypes: true}).filter((dirent:Dirent) => dirent.isFile() && dirent.name.endsWith(".js")).map(file => file.name).forEach((filename:string) => {
    const router:Router = require(`./controllers/${filename}`);
    app.use(router.routes());
});

app.use((ctx:Context) => {
    var XEpicErrorName = "errors.com.lawinserver.common.not_found";
    var XEpicErrorCode = 1004;

    ctx.set('X-Epic-Error-Name', XEpicErrorName);
    ctx.set('X-Epic-Error-Code', XEpicErrorCode.toString());
    ctx.response.status = 404;
    ctx.body = {
        "errorCode": XEpicErrorName,
        "errorMessage": "Sorry the resource you were trying to find could not be found",
        "numericErrorCode": XEpicErrorCode,
        "originatingService": "any",
        "intent": "prod"
    };
});

app.listen(3551, () => {
    console.log(`Lawin is listening on port 3551 !`);
});