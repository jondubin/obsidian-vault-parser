import path from "path";
import { readVault } from "../src/index";

describe("vault", () => {
  it("parse vault", async () => {
    const vaultPath = path.resolve(__dirname, "../test-vault");
    const vault = await readVault(vaultPath);

    console.log(vault);
  });
});
