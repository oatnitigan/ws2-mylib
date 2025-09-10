import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from "typeorm";
import { LendingRecord } from "./LendingRecord";

export type BookStatus = 'owned' | 'lent' | 'wishlist';

@Entity()
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column({ nullable: true })
    isbn: string;

    @Column({ nullable: true })
    genre: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ nullable: true })
    coverImage: string;

    @Column({ nullable: true })
    pdfFile: string;

    @Column({
        type: 'text',
        enum: ['owned', 'lent', 'wishlist'],
        default: 'owned'
    })
    status: BookStatus;

    @CreateDateColumn()
    dateAdded: Date;

    @OneToMany(() => LendingRecord, record => record.book)
    lendingRecords: LendingRecord[];
}
