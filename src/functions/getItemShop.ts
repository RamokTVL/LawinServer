module.exports = ():any => {
    const catalog = require("../../responses/catalog.json");
    const CatalogConfig = require("../../catalog_config.json");
    try {
        for (var value in CatalogConfig) {
            if (typeof CatalogConfig[value] == "string") {
                if (CatalogConfig[value].length != 0) {
                    const CatalogEntry = {"devName":"","offerId":"","fulfillmentIds":[],"dailyLimit":-1,"weeklyLimit":-1,"monthlyLimit":-1,"categories":[],"prices":[{"currencyType":"MtxCurrency","currencySubType":"","regularPrice":0,"finalPrice":0,"saleExpiration":"9999-12-02T01:12:00Z","basePrice":0}],"matchFilter":"","filterWeight":0,"appStoreId":[],"requirements":[{"requirementType":"DenyOnItemOwnership","requiredId":"","minQuantity":1}],"offerType":"StaticPrice","giftInfo":{"bIsEnabled":false,"forcedGiftBoxTemplateId":"","purchaseRequirements":[],"giftRecordIds":[]},"refundable":true,"metaInfo":[],"displayAssetPath":"","itemGrants":[{"templateId":"","quantity":1}],"sortPriority":0,"catalogGroupPriority":0};

                    if (value.toLowerCase().startsWith("daily")) {
                        catalog.storefronts.forEach((storefront:any, i:string) => {
                            if (storefront.name == "BRDailyStorefront") {
                                CatalogEntry.devName = CatalogConfig[value]
                                CatalogEntry.offerId = CatalogConfig[value]
                                CatalogEntry.requirements[0].requiredId = CatalogConfig[value]
                                CatalogEntry.itemGrants[0].templateId = CatalogConfig[value]

                                catalog.storefronts[i].catalogEntries.push(CatalogEntry);
                            }
                        })
                    }

                    if (value.toLowerCase().startsWith("featured")) {
                        catalog.storefronts.forEach((storefront:any, i:string) => {
                            if (storefront.name == "BRWeeklyStorefront") {
                                CatalogEntry.devName = CatalogConfig[value]
                                CatalogEntry.offerId = CatalogConfig[value]
                                CatalogEntry.requirements[0].requiredId = CatalogConfig[value]
                                CatalogEntry.itemGrants[0].templateId = CatalogConfig[value]

                                catalog.storefronts[i].catalogEntries.push(CatalogEntry);
                            }
                        })
                    }

                }
            }
        }
    } catch (err) {}

    return catalog;
}