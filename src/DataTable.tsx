import React, { useState, useMemo } from 'react';
import type { DataTableProps, SortDirection, ColumnDef } from './types';
import './styles.css'
export function DataTable<T extends object>({
  data,
  columns,
  pageSize = 0, // 0 = no pagination in this minimal starter
  enableSorting = true,
  onSortChange,
  className,
  style,
  emptyState = 'No data.'
}: DataTableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => {
            return <th>{col.header}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return <tr>
            {columns.map((col) => {
              if (col.accessor) {
                const value = row[col.accessor] as React.ReactNode;
              return <td>{typeof value == 'boolean' ? String(value): value}</td>
              }
            })}
          </tr>
        })}
      </tbody>
    </table>
  )
}