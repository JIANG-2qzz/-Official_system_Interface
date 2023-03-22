import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'

import { InstitutionService } from './institution.service'

@Controller('institution')
export class InstitutionController {
  constructor(private readonly InstitutionService: InstitutionService) {}

  @Get('/all')
  @ApiOperation({ summary: '机构查找所有' })
  findAll() {
    return this.InstitutionService.findAll()
  }

  @Get()
  @ApiOperation({ summary: '机构查找' })
  findOne(@Body('institutionCode') Code) {
    return this.InstitutionService.findOne(Code)
  }

  @Post()
  @ApiOperation({ summary: '机构查找' })
  update(@Body() Code) {
    return this.InstitutionService.updateIns(Code)
  }

  @Post('/add')
  @ApiOperation({ summary: '机构增加' })
  add(@Body() Code) {
    console.log(Code, 'Code')
    return this.InstitutionService.addIns(Code)
  }

  @Delete('/:id')
  @ApiOperation({ summary: '广告删除' })
  async remove(@Param('id') id: string) {
    await this.InstitutionService.remove(id)
  }
}
