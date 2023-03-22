import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'

import { ApiName } from '~/common/decorator/openapi.decorator'

import { OrganizationService } from './organization.service'

@Controller('organization')
@ApiName
export class OrganizationController {
  constructor(private readonly OrganizationService: OrganizationService) {}

  @Get('/all')
  @ApiOperation({ summary: '机构查找所有' })
  findAll() {
    const result = this.OrganizationService.findOrg()
    return result
  }

  @Get('/:id')
  @ApiOperation({ summary: '机构查找' })
  find(@Param('id') permission) {
    console.log(permission, 'permission')
    const result = this.OrganizationService.findOne(permission)
    return result
  }
}
