import { ApiProperty, ApiTags } from "@nestjs/swagger";
<<<<<<< HEAD
import { tag } from "src/constant/main.const";
=======
import { tag } from "src/main.const";
>>>>>>> 24004e3 (1)
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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