import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Address } from "./entities/address.entity";

@Injectable()
export class AddressRepository extends Repository<Address>{
    constructor(private dataSrouce: DataSource){
        super(Address, dataSrouce.createEntityManager());
    }
}