import { IsString } from 'class-validator'
import { Document } from 'mongoose'

import { Prop, Schema } from '@nestjs/mongoose'

@Schema({
  collection: 'organizations',
  toObject: { virtuals: true, getters: true },
  timestamps: {
    createdAt: 'created',
    updatedAt: false,
  },
  versionKey: false,
})
export class OrgModel extends Document {
  @Prop({ unique: true })
  @IsString({ message: '机构名称' })
  organizationName: string

  @Prop({ select: true })
  @IsString({ message: '机构标识' })
  organizationCode: string
}
