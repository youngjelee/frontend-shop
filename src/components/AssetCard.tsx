interface AssetCardProps {
  title: string;
  description: string;
  value: number | string;
}

const AssetCard = ({ title, description, value }: AssetCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-blue-500 text-lg">{value}</p>
    </div>
  )
}

export default AssetCard
