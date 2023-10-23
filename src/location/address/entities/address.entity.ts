import { Authentication } from "src/user/authentication/entities/authentication.entity";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique, OneToMany, ManyToOne } from "typeorm";

Entity()
export class Address extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    block: string;

    @Column()
    street: string;

    @Column()
    address_type: string;

    @Column()
    house_number: string;

    @Column()
    name_of_address: string;

    @Column()
    complete_number: string;

    @ManyToOne(() => Authentication, authentication => authentication.address, { eager: false })
    user: Authentication;


    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}