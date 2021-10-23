import { MailerOptions } from "@nestjs-modules/mailer";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export declare const port = 4000;
export declare const tag: {
    core: string;
};
export declare const swaggerDocumentOption: Omit<import("@nestjs/swagger").OpenAPIObject, "components" | "paths">;
export declare const mysqlconf: TypeOrmModuleOptions;
export declare const emailconf: MailerOptions;
