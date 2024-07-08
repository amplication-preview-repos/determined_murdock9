import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VenueList } from "./venue/VenueList";
import { VenueCreate } from "./venue/VenueCreate";
import { VenueEdit } from "./venue/VenueEdit";
import { VenueShow } from "./venue/VenueShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { ParticipantList } from "./participant/ParticipantList";
import { ParticipantCreate } from "./participant/ParticipantCreate";
import { ParticipantEdit } from "./participant/ParticipantEdit";
import { ParticipantShow } from "./participant/ParticipantShow";
import { OrganizerList } from "./organizer/OrganizerList";
import { OrganizerCreate } from "./organizer/OrganizerCreate";
import { OrganizerEdit } from "./organizer/OrganizerEdit";
import { OrganizerShow } from "./organizer/OrganizerShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"EventManagementService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Venue"
          list={VenueList}
          edit={VenueEdit}
          create={VenueCreate}
          show={VenueShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="Participant"
          list={ParticipantList}
          edit={ParticipantEdit}
          create={ParticipantCreate}
          show={ParticipantShow}
        />
        <Resource
          name="Organizer"
          list={OrganizerList}
          edit={OrganizerEdit}
          create={OrganizerCreate}
          show={OrganizerShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
