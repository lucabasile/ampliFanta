import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";

export const PerformanceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Assists" source="assists" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DayOfTheLeague" source="dayOfTheLeague" />
        <TextField label="Goals" source="goals" />
        <TextField label="ID" source="id" />
        <TextField label="PenaltiesFailed" source="penaltiesFailed" />
        <ReferenceField label="Player" source="player.id" reference="Player">
          <TextField source={PLAYER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="RedCards" source="redCards" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Vote" source="vote" />
        <TextField label="YellowCards" source="yellowCards" />
      </SimpleShowLayout>
    </Show>
  );
};
