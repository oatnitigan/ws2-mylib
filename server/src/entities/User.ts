import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from "typeorm";
import { LendingRecord } from "./LendingRecord";

export type UserRole = 'user' | 'admin';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'text',
        enum: ['user', 'admin'],
        default: 'user'
    })
    role: UserRole;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => LendingRecord, record => record.user)
    lendingRecords: LendingRecord[];
}
