import { Module, forwardRef } from '@nestjs/common'

import { PostModule } from '../post/post.module'
import { OrganizationController } from './organization.controller'
import { OrganizationService } from './organization.service'

@Module({
  controllers: [OrganizationController],
  providers: [OrganizationService],
  imports: [forwardRef(() => PostModule)],
  exports: [OrganizationService],
})
export class OrganizationModule {}
