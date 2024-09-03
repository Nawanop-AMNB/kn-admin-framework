import { DataGrid, DataGridProps, GridValidRowModel } from "@mui/x-data-grid";

export type TableProps<T extends GridValidRowModel> = DataGridProps<T>;

export const Table = <T extends GridValidRowModel>(props: TableProps<T>) => {
  return (
    <DataGrid
      disableColumnSorting
      disableColumnMenu
      disableColumnResize
      rowSelection={false}
      {...props}
    />
  );
};
