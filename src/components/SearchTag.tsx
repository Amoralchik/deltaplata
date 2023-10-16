import { Tag } from 'antd';
import { Link } from 'react-router-dom';

export default function SearchTag({ title }: { title: string }) {
  return (
    <Link to={'/search/' + title}>
      <Tag color='#777F86'>#{title}</Tag>
    </Link>
  );
}
