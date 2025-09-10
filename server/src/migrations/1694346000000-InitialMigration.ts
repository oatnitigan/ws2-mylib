import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1694346000000 implements MigrationInterface {
    name = 'InitialMigration1694346000000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "book" (
                "id" varchar PRIMARY KEY NOT NULL,
                "title" varchar NOT NULL,
                "author" varchar NOT NULL,
                "isbn" varchar,
                "genre" varchar,
                "description" text,
                "coverImage" varchar,
                "pdfFile" varchar,
                "status" text NOT NULL DEFAULT ('owned'),
                "dateAdded" datetime NOT NULL DEFAULT (datetime('now'))
            )
        `);

        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" varchar PRIMARY KEY NOT NULL,
                "username" varchar NOT NULL UNIQUE,
                "email" varchar NOT NULL UNIQUE,
                "password" varchar NOT NULL,
                "role" text NOT NULL DEFAULT ('user'),
                "createdAt" datetime NOT NULL DEFAULT (datetime('now'))
            )
        `);

        await queryRunner.query(`
            CREATE TABLE "lending_record" (
                "id" varchar PRIMARY KEY NOT NULL,
                "dateLent" datetime NOT NULL DEFAULT (datetime('now')),
                "expectedReturn" datetime NOT NULL,
                "dateReturned" datetime,
                "status" text NOT NULL DEFAULT ('active'),
                "bookId" varchar,
                "userId" varchar,
                CONSTRAINT "FK_book_lending" FOREIGN KEY ("bookId") REFERENCES "book" ("id"),
                CONSTRAINT "FK_user_lending" FOREIGN KEY ("userId") REFERENCES "user" ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "lending_record"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "book"`);
    }
}
