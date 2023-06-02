export default function Table({ data, config }) {
  const renderedRows = data.map((rowData, index) => {
    const renderedCells = config.map(column => {
      return (
        <td className='p-4' key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className='border-b' key={index}>
        {renderedCells}
      </tr>
    );
  });

  const renderedHeaders = config.map(column => {
    if (column.header) {
      return column.header();
    }

    return (
      <th className='p-2' key={column.label}>
        {column.label}
      </th>
    );
  });

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}
