const BoilerplateClient = require("./src/util/client");
const ChalkAdvanced = require("chalk-advanced");

const client = new BoilerplateClient();

client.loginBot().then(() => {
  console.log(
    `${ChalkAdvanced.white("KuromiBot")} ${ChalkAdvanced.gray(
      ">"
    )} ${ChalkAdvanced.green("Bot sucessfully started. ")}`
  );
});
