import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from '../users/entities/user.entity';
import { Role } from '../users/entities/user.entity';
// import { Role } from 'src/user/role.enum';
import { InstanceType } from 'typegoose';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly _reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this._reflector.get<Role[]>('roles', context.getHandler());

    if (!roles || roles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    // console.log(request);

    const user: InstanceType<User> = request.user;
    // console.log(user);

    const hasRole = () => roles.indexOf(user.role) >= 0;

    if (user && user.role && hasRole()) {
      return true;
    }

    throw new HttpException(
      'You do not have permission (Roles)',
      HttpStatus.UNAUTHORIZED,
    );
  }
}
