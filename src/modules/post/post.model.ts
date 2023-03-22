import mongoose, { Document } from 'mongoose'

import { Prop, Schema } from '@nestjs/mongoose'
import { PartialType } from '@nestjs/swagger'

import { CategoryModel } from '../category/category.model'
import { OrgModel } from '../organization/organization.model'
import { UserModel } from '../user/user.model'

@Schema({
  collection: 'posts',
  toObject: { virtuals: true, getters: true },
  timestamps: {
    createdAt: 'created',
    updatedAt: true,
  },
  versionKey: false,
})
export class PostModel extends Document {
  @Prop()
  title: string

  @Prop()
  content: string

  @Prop()
  cover?: string

  @Prop([String])
  tags?: string[]

  @Prop({ default: false })
  ad: boolean

  @Prop({ default: 0 })
  read: number

  @Prop({
    type: () => mongoose.Schema.Types.ObjectId,
    ref: CategoryModel.name,
  })
  category: CategoryModel

  @Prop({
    type: () => mongoose.Schema.Types.ObjectId,
    ref: UserModel.name,
  })
  user: UserModel

  @Prop({
    type: () => mongoose.Schema.Types.ObjectId,
    ref: OrgModel.name,
  })
  permission: OrgModel

  @Prop()
  backAdvise?: string

  @Prop()
  GWstatus?: string

  @Prop()
  institutionCode?: string

  @Prop()
  institutionNameDown?: string
}

export class PartialPostModel extends PartialType(PostModel) {}
