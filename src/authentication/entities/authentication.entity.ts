import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique } from "typeorm";

@Entity()
@Unique(['email', 'contact_number', 'complete_number'])
export class Authentication extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    full_name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    contact_code: string;

    @Column()
    contact_number: string;

    @Column()
    complete_number: string;

    @Column()
    profile_picture: string;

    @Column()
    dob: Date;

    @Column()
    bio: string;

    @Column()
    is_verified: boolean;

    @Column()
    is_blocked: boolean;

    @Column()
    is_active: boolean;




    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}