import "./portfolioList.scss";

export default function PortfolioList({ title }) {
  return (
    <div>
      <li className="portfolioList">{title}</li>
    </div>
  );
}
