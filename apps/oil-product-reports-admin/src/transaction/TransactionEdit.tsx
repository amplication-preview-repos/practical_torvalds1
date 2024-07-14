import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
