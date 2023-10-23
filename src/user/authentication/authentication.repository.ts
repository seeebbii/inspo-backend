import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Authentication } from "./entities/authentication.entity";

@Injectable()
export class AuthenticationRepository extends Repository<Authentication>{
    constructor(private dataSource: DataSource){
        super(Authentication, dataSource.createEntityManager());
    }
}