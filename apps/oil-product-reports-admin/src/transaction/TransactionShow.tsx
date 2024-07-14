import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="OilName" source="oilName" />
        <TextField label="LiterPrice" source="literPrice" />
        <TextField label="LiterDeliv" source="literDeliv" />
        <TextField label="AmountDeliv" source="amountDeliv" />
        <TextField label="AmountLast" source="amountLast" />
        <TextField label="OilLongName" source="oilLongName" />
        <TextField label="Type" source="typeField" />
        <TextField label="Source" source="source" />
        <TextField label="LiterLast" source="literLast" />
      </SimpleShowLayout>
    </Show>
  );
};
