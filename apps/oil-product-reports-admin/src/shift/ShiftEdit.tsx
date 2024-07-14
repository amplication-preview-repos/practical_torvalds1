import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const ShiftEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="DateTime" source="dateTime" />
        <NumberInput step={1} label="Sm_Key" source="smKey" />
      </SimpleForm>
    </Edit>
  );
};
