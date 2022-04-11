import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0x44FA921016715CCA312a04AC029470d9174EA5F4"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "ChocoDAO Membership Cookie",
        description: "This cookie NFT will give you access to ChocoDAO!",
        image: readFileSync("scripts/assets/cookie.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
