import {
  Dashboard,
  ProductionQuantityLimits,
  Spellcheck,
} from "@mui/icons-material";
import { AdminPage } from "./libs/admin-page";
import { ContentBox } from "./libs/content-box";
import { Table } from "./libs/table";

export const App = () => {
  return (
    <AdminPage
      contents={[
        {
          id: "dashboard",
          element: () => (
            <ContentBox label="Dashboard">
              <Table
                columns={[
                  {
                    field: "no",
                    headerName: "No.",
                    width: 50,
                    align: "center",
                    headerAlign: "center",
                  },
                  { field: "title_en", headerName: "Title [en]", flex: 1 },
                  { field: "title_th", headerName: "Title [th]", flex: 1 },
                  {
                    field: "description_en",
                    headerName: "Description [en]",
                    flex: 1,
                  },
                  {
                    field: "description_th",
                    headerName: "Description [th]",
                    flex: 1,
                  },
                  { field: "updated_at", headerName: "Updated At", flex: 1 },
                  { field: "actions", headerName: "" },
                ]}
                rows={[
                  {
                    no: 1,
                    title_en: "test1",
                    title_th: "เทส 1",
                    description_en: "this is description",
                    description_th: "นี่คือ description",
                    updated_at: "22/11/2012",
                  },
                ]}
                getRowId={(row) => row.no}
              />
            </ContentBox>
          ),
          label: "Dashboard",
          icon: <Dashboard />,
          type: "item",
        },
        {
          id: "products",
          element: () => <>products</>,
          label: "Products",
          icon: <ProductionQuantityLimits />,
          type: "item",
        },
        {
          id: "specification",
          label: "Specification",
          icon: <Spellcheck />,
          type: "group",
          subItems: [
            {
              id: "test1",
              label: "Test 1",
              element: () => <>test 1</>,
              type: "item",
            },
            {
              id: "test2",
              label: "Test 2",
              element: () => <>test 2</>,
              type: "item",
            },
          ],
        },
        {
          id: "translation",
          label: "Dashboard",
          icon: <Dashboard />,
          type: "group",
          subItems: [
            {
              id: "thai",
              label: "Thai Translation",
              element: () => <>thai translation</>,
              type: "item",
            },
            {
              id: "english",
              label: "English Translation",
              element: () => <>english translation</>,
              type: "item",
            },
          ],
        },
      ]}
    />
  );
};
