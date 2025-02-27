import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  birthDate: Date;

  @Prop({ required: true, enum: ['male', 'female', 'other'] })
  gender: string;

  @Prop()
  description: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Add unique validator plugin
UserSchema.plugin(uniqueValidator);