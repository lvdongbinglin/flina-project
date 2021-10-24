import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { tag } from "src/constant/main.const";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Login } from 'src/entity/login.entity';


@ApiTags(tag.core)
@Entity("core_role")
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: "角色名"
  })
  @Column()
  name: string;

  @ApiProperty({
    description: "等级"
  })
  @Column()
  level: number;



}