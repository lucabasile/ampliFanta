import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PlayerTitle } from "../player/PlayerTitle";

export const PerformanceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Assists" source="assists" />
        <NumberInput step={1} label="DayOfTheLeague" source="dayOfTheLeague" />
        <NumberInput step={1} label="Goals" source="goals" />
        <NumberInput
          step={1}
          label="PenaltiesFailed"
          source="penaltiesFailed"
        />
        <ReferenceInput source="player.id" reference="Player" label="Player">
          <SelectInput optionText={PlayerTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="RedCards" source="redCards" />
        <NumberInput label="Vote" source="vote" />
        <NumberInput step={1} label="YellowCards" source="yellowCards" />
      </SimpleForm>
    </Create>
  );
};
