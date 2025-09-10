import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { Book } from "./Book";
import { User } from "./User";

export type LendingStatus = 'active' | 'returned' | 'overdue';

@Entity()
export class LendingRecord {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Book, book => book.lendingRecords)
    book: Book;

    @ManyToOne(() => User, user => user.lendingRecords)
    user: User;

    @CreateDateColumn()
    dateLent: Date;

    @Column()
    expectedReturn: Date;

    @Column({ nullable: true })
    dateReturned: Date;

    @Column({
        type: 'text',
        enum: ['active', 'returned', 'overdue'],
        default: 'active'
    })
    status: LendingStatus;
}
