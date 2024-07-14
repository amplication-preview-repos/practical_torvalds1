import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const ShiftCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="DateTime" source="dateTime" />
        <NumberInput step={1} label="Sm_Key" source="smKey" />
      </SimpleForm>
    </Create>
  );
};
