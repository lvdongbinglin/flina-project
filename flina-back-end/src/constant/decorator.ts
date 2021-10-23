import { SetMetadata } from '@nestjs/common';

const role_enum = {
  admin: "admin",
  user: "user"
}

const level_enum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
export const Level = (level: number) => SetMetadata('level', level);