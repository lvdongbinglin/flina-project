
export class WorksConverter {
  
  static translateStyle(style: string): any {
    switch(style) {
      case 'ancient': 
        style = "古典诗词"
        break
      case 'modern':
        style = "现代诗"
        break
      case 'article':
        style = "文章";
        break;
      case 'special':
        style = "其他（特色征稿）";
        break;
      case '古典诗词': 
        style = "ancient"
        break
      case '现代诗':
        style = "modern"
        break
      case '文章':
        style = "article";
        break;
        case '其他（特色征稿）':
          style = "special";
          break;
    }
    return style;
  }
  static fromForm(works: any){

  }
}