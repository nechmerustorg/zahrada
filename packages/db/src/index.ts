import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema/index.js';

export * from './schema/index.js';
export { schema };

export type DbClient = ReturnType<typeof createDbClient>;

export function createDbClient(connectionString: string) {
  const client = postgres(connectionString, { prepare: false });
  return drizzle(client, { schema });
}
