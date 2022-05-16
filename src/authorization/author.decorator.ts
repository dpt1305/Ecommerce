import { Role } from './../users/entities/user.entity';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UseGuards, applyDecorators, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from './../authorization/roles.guard';

export function Author(...roles: Role[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(AuthGuard(), RolesGuard),
    ApiBearerAuth(),
    // ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
}