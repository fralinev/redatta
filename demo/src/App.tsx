import { DataTable } from '../../src';
import type { ColumnDef } from '../../src';
import { useEffect, useState } from 'react';

type User = { userId: number; id: number; title: string; completed: boolean };
export default function App() {
  const [rows, setRows] = useState<User[]>([])
  const columns: ColumnDef<User>[] = [
  { name: 'userId', header: 'userId', accessor: 'userId' },
  { name: 'id', header: 'id', accessor: 'id' },
  { name: 'title', header: 'title', accessor: 'title' },
  { name: 'completed', header: 'completed', accessor: 'completed' },
]
 useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
      .then(response => response.json())
      .then(json => setRows(json))
  }, [])
  return (
    <DataTable
      data={rows}
      columns={columns}
/>
  );
}