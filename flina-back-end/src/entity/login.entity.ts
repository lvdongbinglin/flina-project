import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { tag } from "src/constant/main.const";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from './role.entity';


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
  username: string;

  @ApiProperty({
    description: "登陆密码"
  })
  @Column()
  password: string;

  @ApiProperty({
    description: "验证码"
  })
  @Column()
  code: number;

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


  //对应Role实体中的@OneToMany修饰的字段（不可以单独存在）
  @ManyToOne(type => Role)
  //指定本表中的外键（JoinColumn只存在于多端，因为外键只会存在于多端）
  @JoinColumn({ name: 'role_id' })
  role: Role;

}