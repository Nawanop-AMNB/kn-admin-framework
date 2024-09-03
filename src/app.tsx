import {
  Dashboard,
  ProductionQuantityLimits,
  Spellcheck,
} from "@mui/icons-material";
import { AdminPage } from "./libs/admin-page";
import { ContentBox } from "./libs/content-box";
import { Table } from "./libs/table";
import { ProductContent } from "./modules/product-content";

export const App = () => {
  return (
    <AdminPage
      contents={[
        {
          id: "dashboard",
          element: () => <ProductContent />,
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
