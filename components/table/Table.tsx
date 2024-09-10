import React from 'react'
type IColumn<T> = {
  key: string,
  label: string;
  render?: (item: T) => React.ReactNode;
};
type TableProps<T> = {
  columns: IColumn<T>[];
  data: T[];
};
const Table = <T extends Record<string, any>>({
  columns,
  data,
}: TableProps<T>) => {

  return (
    <div className="flex-grow bg-[#132842] text-white rounded-lg text-sm font-normal md:text-md md:font-medium  overflow-x-scroll md:overflow-x-auto">
      <table className="w-full rounded-lg ">
        <thead>
          <tr className="border-b border-gray-600">
            {columns.map((col) => (
              <th
                key={col.key}
                className="py-4 px-4 text-left cursor-pointer group"
              >
                {col.label}

              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => (
              <tr key={index} className="border-b border-gray-600">
                {columns.map((col) => (
                  <td key={col.key} className="py-3 px-4">
                    {col.render ? col.render(item) : item[col.key]}
                  </td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table