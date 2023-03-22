import { Model } from 'mongoose'

import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { OrgModel } from './organization.model'

@Injectable()
export class OrganizationService {
  constructor(
    @InjectModel(OrgModel.name)
    private readonly OrgModel: Model<OrgModel>,
  ) {}
  async findOrg() {
    return await this.OrgModel.find()
  }

  async findOne(permission) {
    console.log(permission, 'findOne')
    return await this.OrgModel.findOne({ _id: permission })
  }
}
