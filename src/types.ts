import { ReactNode } from 'react';

// export type KeysOfType<T, V> = {
//     [K in keyof T]-?: T[K] extends V ? K : never
// }[keyof T];

export interface ColumnDef<
    T extends object
    // K extends KeysOfType<T, ReactNode> = KeysOfType<T, ReactNode>
> {
    name: string;
    // userId: string;
    header: ReactNode | string;
    accessor?: keyof T;
    sortable?: boolean;
    cell?: (row: T) => ReactNode;
    width?: string | number;
    align?: 'left' | 'center' | 'right';
}

/**
 * The props accepted by the DataTable component.
 * @template T - The type of each data row.
 */
export interface DataTableProps<T extends object> {
    data: T[];
    columns: ColumnDef<T>[];
    pageSize?: number;
    enableSorting?: boolean;
    onSortChange?: (columnId: string, direction: SortDirection) => void;
    onRowClick?: (row: T) => void;
    className?: string;
    style?: React.CSSProperties;
    emptyState?: ReactNode;
}

/**
 * Sorting direction type.
 */
export type SortDirection = 'asc' | 'desc' | null;

/**
 * Generic hook return type (optional)
 * if you have utilities like useSorting or usePagination.
 */
export interface UseSortingResult<T extends object> {
    sortedData: T[];
    sortBy: string | null;
    direction: SortDirection;
    toggleSort: (columnId: string) => void;
}
