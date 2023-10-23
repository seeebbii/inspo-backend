import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Concept extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    auth_id: number;
}
