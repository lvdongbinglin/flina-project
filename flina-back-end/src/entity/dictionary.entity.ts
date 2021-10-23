import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { tag } from "../constant/main.const";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
/**
 * 邻接表设计，使用递归设计，类似的设计还有闭包表、路径枚举、嵌套集
 */
@ApiTags(tag.core)
@Entity("core_dictionary")
export class Dictionary {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: "概念"
  })
  @Column()
  definition: string;

  @ApiProperty({
    description: "领域"
  })
  @Column()
  domain: string;

  @ApiProperty({
    description: "种属"
  })
  @Column()
  species: string;

  @ApiProperty({
    description: "种差"
  })
  @Column()
  different: string;

  @ApiProperty({
    description: "递归｜分类"
  })
  @Column()
  is_recursion: boolean;

  @ApiProperty({
    description: "递归父级｜种属父级"
  })
  @Column()
  recursion_parent_id: number;


}