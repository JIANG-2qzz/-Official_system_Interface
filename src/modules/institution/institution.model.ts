import { IsString } from 'class-validator'
import { Document } from 'mongoose'

import { Prop, Schema } from '@nestjs/mongoose'

@Schema({
  collection: 'institution',
  toObject: { virtuals: true, getters: true },
  timestamps: {
    createdAt: 'created',
    updatedAt: false,
  },
  versionKey: false,
})
export class institutionModel extends Document {
  @Prop({ unique: true })
  @IsString({ message: '真机构名称' })
  institutionName: string

  @Prop({ unique: true })
  @IsString({ message: '真机构标识' })
  institutionCode: string

  @Prop({ select: true })
  @IsString({ message: '机构分类' })
  institutionNameDown: string[]
}
