import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PLAYER_TITLE_FIELD } from "./PlayerTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const PlayerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Age" source="age" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Performance"
          target="PlayerId"
          label="Performances"
        >
          <Datagrid rowClick="show">
            <TextField label="Assists" source="assists" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="DayOfTheLeague" source="dayOfTheLeague" />
            <TextField label="Goals" source="goals" />
            <TextField label="ID" source="id" />
            <TextField label="PenaltiesFailed" source="penaltiesFailed" />
            <ReferenceField
              label="Player"
              source="player.id"
              reference="Player"
            >
              <TextField source={PLAYER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="RedCards" source="redCards" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Vote" source="vote" />
            <TextField label="YellowCards" source="yellowCards" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
