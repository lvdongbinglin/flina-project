import { ApiProperty, ApiTags } from "@nestjs/swagger";
<<<<<<< HEAD
import { tag } from "src/constant/main.const";
=======
import { tag } from "src/main.const";
>>>>>>> 24004e3 (1)
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@ApiTags(tag.core)
@Entity("core_person")
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: "姓名"
  })
  @Column()
  name: string;

  // 18位身份证，具有唯一性
  @ApiProperty({
    description: "身份证"
  })
  @Column()
  id_card: string;

  @ApiProperty({
    description: "性别"
  })
  @Column()
  gender: string;

  // 11位联系方式，具有唯一性
  @ApiProperty({
    description: "电话"
  })
  @Column()
  concat: string;

  // 具有唯一性
  @ApiProperty({
    description: "邮箱"
  })
  @Column()
  email: string;
}