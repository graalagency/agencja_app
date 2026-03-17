import sql, { type config as SqlConfig, type ConnectionPool } from 'mssql'

let poolPromise: Promise<ConnectionPool> | null = null

function getRequiredEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required SQL Server env var: ${name}`)
  }
  return value
}

function parseBoolean(value: string | undefined, defaultValue: boolean): boolean {
  if (value == null) return defaultValue
  return value.toLowerCase() === 'true'
}

function getSqlConfig(): SqlConfig {
  return {
    user: getRequiredEnv('SQLSERVER_USER'),
    password: getRequiredEnv('SQLSERVER_PASSWORD'),
    server: getRequiredEnv('SQLSERVER_HOST'),
    database: process.env.SQLSERVER_DATABASE || 'master',
    options: {
      instanceName: process.env.SQLSERVER_INSTANCE,
      encrypt: parseBoolean(process.env.SQLSERVER_ENCRYPT, false),
      trustServerCertificate: parseBoolean(process.env.SQLSERVER_TRUST_SERVER_CERTIFICATE, true),
    },
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
  }
}

export async function getSqlServerPool(): Promise<ConnectionPool> {
  if (!poolPromise) {
    const config = getSqlConfig()
    poolPromise = new sql.ConnectionPool(config).connect()
  }

  try {
    return await poolPromise
  } catch (error) {
    poolPromise = null
    throw error
  }
}

export { sql }
