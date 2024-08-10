import SorteableTable from "../components/SorteableTable";

export default function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 2 },
    { name: "Lime", color: "bg-green-500", score: 1 },
  ];

  const config = [
    {
      label: "Fruits",
      render: fruit => fruit.name,
      sortValue: fruit => fruit.name,
    },
    {
      label: "Color",
      render: fruit => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: fruit => fruit.score,
      sortValue: fruit => fruit.score,
    },
    { label: "X2", render: fruit => fruit.score * 2 },
  ];

  return <SorteableTable data={data} config={config}></SorteableTable>;
}
