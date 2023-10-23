import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Concept } from "./entities/concept.entity";

@Injectable()
export class ConceptRepository extends Repository<Concept>{
    constructor(private dataSource: DataSource){
        super(Concept, dataSource.createEntityManager() );
    }
}