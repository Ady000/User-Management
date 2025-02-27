// src/auth/auth.service.ts
import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username);
    
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    const isPasswordValid = await this.userService.validatePassword(
      password,
      user.password,
    );
    
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    const { password: _, ...result } = user.toObject();
    return result;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user._id };
    
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(createUserDto: CreateUserDto) {
    // Check if username already exists
    const existingUsername = await this.userService.findByUsername(createUserDto.username);
    if (existingUsername) {
      throw new BadRequestException('Username already exists');
    }
    
    // Check if email already exists
    const existingEmail = await this.userService.findByEmail(createUserDto.email);
    if (existingEmail) {
      throw new BadRequestException('Email already exists');
    }
    
    const user = await this.userService.create(createUserDto);
    const { password: _, ...result } = user.toObject();
    
    return result;
  }
}