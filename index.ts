import levels from "./levels";

async function main() {
  const testAddress = "0x07aF52033A6BE1B80Aa559b63f0c64E5c1d27794";

  try {
    const apiData: any = await levels.fetch(testAddress);

    const totalXP = levels.total({ balance: apiData.balance });
    console.log("XP балик:", totalXP);
    console.log("\n" + "=".repeat(50) + "\n");

    console.log("Total:");
    console.log(
      `   • Total earned: ${parseInt(apiData.balance.accrued).toLocaleString()}`
    );
    console.log(
      `   • Total: ${parseInt(apiData.balance.total).toLocaleString()}`
    );
    console.log(`   • Grants: ${apiData.grants.length}`);
    console.log(`   • Data is actual on: ${apiData.balance.asOf}`);
  } catch (e) {
    console.error(e);
  }
}

main();
