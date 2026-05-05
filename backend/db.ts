import chalk from "chalk";
import pg from "pg";
const { Pool } = pg;

export const db = new Pool({
  connectionString: process.env.NEON_DB_URL,
});

try {
  await db.connect();
  console.log(
    chalk.bgGreen(
      chalk.white.underline.bold("Database Connected Successfully !"),
    ),
  );
} catch (error) {
  console.log(chalk.bgRed(chalk.white.underline.bold(error)));
}
