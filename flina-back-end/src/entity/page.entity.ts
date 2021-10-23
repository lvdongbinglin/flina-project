import { ApiProperty, ApiTags } from "@nestjs/swagger";
<<<<<<< HEAD
import { tag } from "src/constant/main.const";
=======
import { tag } from "src/main.const";
>>>>>>> 24004e3 (1)
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@ApiTags(tag.core)
@Entity("core_page")
export class Page {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: "名称"
  })
  @Column()
  name: string;

  // 每个应用的Rest Url， 具有唯一性
  @ApiProperty({
    description: "路径"
  })
  @Column()
  path: string;


}