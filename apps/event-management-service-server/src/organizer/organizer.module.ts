import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrganizerModuleBase } from "./base/organizer.module.base";
import { OrganizerService } from "./organizer.service";
import { OrganizerController } from "./organizer.controller";
import { OrganizerResolver } from "./organizer.resolver";

@Module({
  imports: [OrganizerModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrganizerController],
  providers: [OrganizerService, OrganizerResolver],
  exports: [OrganizerService],
})
export class OrganizerModule {}
