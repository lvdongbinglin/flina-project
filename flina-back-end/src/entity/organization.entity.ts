import { ApiProperty, ApiTags } from "@nestjs/swagger";
<<<<<<< HEAD
import { tag } from "src/constant/main.const";
=======
import { tag } from "src/main.const";
>>>>>>> 24004e3 (1)
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * 邻接表设计，使用递归设计，类似的设计还有闭包表、路径枚举、嵌套集
 */
@ApiTags(tag.core)
@Entity("core_organization")
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: "名称"
  })
  @Column()
  name: string;

  // 具有唯一性
  @ApiProperty({
    description: "统一社会信用代码 ｜ 组织内部代码"
  })
  @Column()
  id_card: string;

  // 具有唯一性
  @ApiProperty({
    description: "电话"
  })
  @Column()
  concat: string;

  @ApiProperty({
    description: "递归"
  })
  @Column()
  is_recursion: boolean;

  @ApiProperty({
    description: "递归父级"
  })
  @Column()
  recursion_parent_id: number;


}