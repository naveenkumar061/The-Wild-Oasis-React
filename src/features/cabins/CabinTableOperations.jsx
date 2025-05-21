import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },

          {
            value: "maxCapacity-asc",
            label: "Sort by maxCapacity (low to high)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort by maxCapacity (high to low)",
          },
          { value: "regularPrice-asc", label: "Sort by price (low to high)" },
          { value: "regularPrice-desc", label: "Sort by price (high to low)" },
          { value: "discount-asc", label: "Sort by discount (low to high)" },
          { value: "discount-desc", label: "Sort by discount (high to low)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
