
import { EntityRepository, Repository } from 'typeorm';
import { Login } from 'src/entity/login.entity';
import { Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { Role } from '../entity/role.entity';

@Injectable()
@EntityRepository(Login)
export class LoginRepository extends Repository<Login> {

  findAll() {
    return this.find({
      order: {
        id: "ASC"
      },
      relations: ["role"]
    });
  }

  findOneByName(login_name: string) {
    return this.findOne({
      where: {
        username: login_name
      },
      relations: ["role"]
    })
  }


  findOneByEmail(email: string) {
    return this.findOne({
      where: {
        email: email
      },
      relations: ["role"]
    })
  }


}