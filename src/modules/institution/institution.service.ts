import { Model } from 'mongoose'

import { ForbiddenException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { institutionModel } from './institution.model'

@Injectable()
export class InstitutionService {
  constructor(
    @InjectModel(institutionModel.name)
    private readonly InstitutionService: Model<institutionModel>,
  ) {}

  async findAll() {
    return await this.InstitutionService.find()
  }

  async findOne(Code) {
    return await this.InstitutionService.findOne({ institutionCode: Code })
  }

  async updateIns(code) {
    const result = await this.InstitutionService.findOne({
      institutionCode: code.institutionCode,
    })
    await this.InstitutionService.updateOne({ _id: result.id }, code)
  }

  async addIns(code) {
    return await this.InstitutionService.create({
      ...code,
    })
  }

  async remove(id) {
    const ad = await this.InstitutionService.findById(id)
    if (!ad) {
      throw new ForbiddenException('删除失败')
    }
    return await this.InstitutionService.deleteOne({
      _id: id,
    })
  }
}
