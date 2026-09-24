import { portfolioData as data } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer>
      &copy; {new Date().getFullYear()} {data.name}. Built with React.
    </footer>
  );
}
