import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
