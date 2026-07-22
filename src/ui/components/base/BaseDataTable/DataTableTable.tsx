import { BaseTable as Table } from "../BaseTable";

export interface DataTableTableProps extends Table.ContentProps {}

export const DataTableTable = (props: DataTableTableProps) => {
  return <Table.Content {...props} />;
};
