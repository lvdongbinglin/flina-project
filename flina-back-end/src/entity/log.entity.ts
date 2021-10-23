import { ApiProperty, ApiTags } from "@nestjs/swagger";
<<<<<<< HEAD
import { tag } from "src/constant/main.const";
=======
import { tag } from "src/main.const";
>>>>>>> 24004e3 (1)
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@ApiTags(tag.core)
@Entity("core_login_log")
export class LoginLog {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: "ip"
  })
  @Column()
  ip: string;

  @ApiProperty({
    description: "路由"
  })
  @Column()
  url: string;

  @ApiProperty({
    description: "请求"
  })
  @Column()
  request: string;

  @ApiProperty({
    description: "响应"
  })
  @Column()
  response: string;

}