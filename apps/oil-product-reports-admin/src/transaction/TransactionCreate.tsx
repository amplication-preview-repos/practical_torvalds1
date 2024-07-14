import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="OilName" source="oilName" />
        <NumberInput label="LiterPrice" source="literPrice" />
        <NumberInput label="LiterDeliv" source="literDeliv" />
        <NumberInput label="AmountDeliv" source="amountDeliv" />
        <NumberInput label="AmountLast" source="amountLast" />
        <TextInput label="OilLongName" source="oilLongName" />
        <SelectInput
          source="typeField"
          label="Type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Source" source="source" />
        <NumberInput label="LiterLast" source="literLast" />
      </SimpleForm>
    </Create>
  );
};
