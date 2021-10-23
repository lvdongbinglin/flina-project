import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { tag } from "src/main.const";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@ApiTags(tag.core)
@Entity("core_login")
export class Login {
  @PrimaryGeneratedColumn()
  id: number;

  // 每个应用，具有唯一性
  @ApiProperty({
    description: "登陆名称"
  })
  @Column()
  login_name: string;

  @ApiProperty({
    description: "登陆密码"
  })
  @Column()
  password: string;

  @ApiProperty({
    description: "验证码"
  })
  @Column()
  code: Date;

  @ApiProperty({
    description: "更新时间"
  })
  @Column()
  up_time: Date;

  // 具有唯一性
  @ApiProperty({
    description: "电子邮件"
  })
  @Column()
  email: string;

}