import { Context } from 'koa';
import { seasonData } from '../interfaces/seasonData';
module.exports = (ctx:Context, seasondata: seasonData):void => {
    if(ctx.request.headers['user-agent']) {
        var netcl:string = "";
        try {
            var BuildID = ctx.request.headers["user-agent"].split("-")[3].split(",")[0]
            if (!Number.isNaN(Number(BuildID))) {
                netcl = BuildID;
            }

            if (Number.isNaN(Number(BuildID))) {
                var BuildID = ctx.request.headers["user-agent"].split("-")[3].split(" ")[0]
                if (!Number.isNaN(Number(BuildID))) {
                    netcl = BuildID;
                }
            }
        } catch (err) {
            try {
                var BuildID = ctx.request.headers["user-agent"].split("-")[1].split("+")[0]
                if (!Number.isNaN(Number(BuildID))) {
                    netcl = BuildID;
                }
            } catch (err) {}
        }

        try {
            var Build = ctx.request.headers["user-agent"].split("Release-")[1].split("-")[0];
            let Value:string[];
            if (Build.split(".").length == 3) {
                Value = Build.split(".");
                Build = Value[0] + "." + Value[1] + Value[2];
            }
            
            seasondata.season = Number(Build.split(".")[0]);
            seasondata.build = Number(Build);
            seasondata.CL = netcl;
            seasondata.lobby = `LobbySeason${seasondata.season}`;

            if (Number.isNaN(seasondata.season)) {
                throw new Error();
            }
        } catch (err) {
            seasondata.season = 2;
            seasondata.build = 2.0;
            seasondata.CL = netcl;
            seasondata.lobby = "LobbyWinterDecor";
        }
    }
} 