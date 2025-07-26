import levels from "./levels";
import sentiment from "./sentiment";

async function main() {
  const testAddress = "0x07aF52033A6BE1B80Aa559b63f0c64E5c1d27794";
  const sentimentAddress = "0x6d7823cd5c3d9dcd63e6a8021b475e0c7c94b291";

  try {
    //  levels
    const apiData: any = await levels.fetch(testAddress);

    const totalXP = levels.total({ balance: apiData.balance });
    console.log("Levels XP:", totalXP);
    console.log("\n" + "=".repeat(50) + "\n");

    console.log("Levels Total:");
    console.log(
      `   • Total earned: ${parseInt(apiData.balance.accrued).toLocaleString()}`
    );
    console.log(
      `   • Total: ${parseInt(apiData.balance.total).toLocaleString()}`
    );
    console.log(`   • Grants: ${apiData.grants.length}`);
    console.log(`   • Data is actual on: ${apiData.balance.asOf}`);

    // sentiment
    console.log(`Sentiment: ${sentimentAddress}`);
    console.log("\n" + "=".repeat(50) + "\n");
    const points = await sentiment.getUserPoints(sentimentAddress);

    console.log("Sentiment Points:");
    console.log(`   • User: ${sentimentAddress}`);
    console.log(`   • Total Points: ${points.toLocaleString()}`);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

main().catch(console.error);
