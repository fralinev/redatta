import { ReactNode } from 'react';

export interface ColumnDef<T extends object> {
    name: string;
    header: ReactNode | string;
    accessor?: keyof T;
    sortable?: boolean;
    cell?: (row: T) => ReactNode;
    width?: string | number;
    align?: 'left' | 'center' | 'right';
}

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

export type SortDirection = 'asc' | 'desc' | null;

export interface UseSortingResult<T extends object> {
    sortedData: T[];
    sortBy: string | null;
    direction: SortDirection;
    toggleSort: (columnId: string) => void;
}
