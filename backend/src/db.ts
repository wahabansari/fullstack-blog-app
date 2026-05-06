// import chalk from "chalk";
// import pg from "pg";
// const { Pool } = pg;

// import { drizzle } from 'drizzle-orm/neon-http';

// export const db = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// try {
//   await db.connect();
//   console.log(
//     chalk.bgGreen(
//       chalk.white.underline.bold("Database Connected Successfully !"),
//     ),
//   );
// } catch (error) {
//   console.log(chalk.bgRed(chalk.white.underline.bold(error)));
// }

import { drizzle } from "drizzle-orm/neon-http";

const db = drizzle(process.env.DATABASE_URL!);
export default db;
