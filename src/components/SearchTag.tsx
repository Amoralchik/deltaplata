import { Chip } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function SearchTag({ title }: { title: string }) {
  return (
    <Link to={'/search/' + title}>
      <Chip color='#777F86'>#{title}</Chip>
    </Link>
  );
}
