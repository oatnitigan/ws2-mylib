import { DataSource } from "typeorm"
import dotenv from 'dotenv'

dotenv.config()

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: process.env.DB_PATH || "database.sqlite",
    synchronize: process.env.NODE_ENV === "development",
    logging: process.env.NODE_ENV === "development",
    entities: ["src/entities/**/*.ts"],
    migrations: ["src/migrations/**/*.ts"],
    subscribers: ["src/subscribers/**/*.ts"],
})
