import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrganizerService } from "./organizer.service";
import { OrganizerControllerBase } from "./base/organizer.controller.base";

@swagger.ApiTags("organizers")
@common.Controller("organizers")
export class OrganizerController extends OrganizerControllerBase {
  constructor(
    protected readonly service: OrganizerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
