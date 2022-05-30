import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xe4BDd9Faa58585eD5c1B2fB335c456891F95C961",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Fitted Boston Celtics Cap with no brim",
        description: "This NFT will give you access to CelticDAO!",
        image: readFileSync("scripts/assets/hat.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()