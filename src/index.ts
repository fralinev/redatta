// Re-export your main component(s)
export { DataTable } from './DataTable';

// Optionally re-export other reusable components
// export { TableHeader } from './TableHeader';
// export { TableCell } from './TableCell';

// Export public types so consumers can use them
export type { DataTableProps, ColumnDef, SortDirection } from './types';

// Export any helpful utilities (optional)
export { useSorting } from './hooks/useSorting';

// If you ship CSS (and want users to import it automatically):
// import './styles.css';
