import { Group, Stack, Table, Text } from '@mantine/core';
import FilterHeader from '../components/FilterHeader';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../icons';

export default function History() {
  const elements = [
    { Keyword: 'Nora Frey Draeger', Type: 'Companies', Number: 321, Time: 'Carbon' },
    { Keyword: 'Donald Trump', Type: 'Person', Number: 114, Time: 'Nitrogen' },
    { Keyword: 'Diclekent Mahallesi', Type: 'Address', Number: 226, Time: 'Yttrium' },
    {
      Keyword: '0x776198CCF446DFa16833252352fdsgsdf325235235321eqwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww3',
      Type: 'Cryptocurrency Wallet',
      Number: 321,
      Time: 'Barium',
    },
    { Keyword: 'Nora Frey Draeger', Type: 'Companies', Number: 12, Time: 'Cerium' },
  ];

  const rows = elements.map((element) => (
    <Table.Tr key={element.Keyword}>
      <Table.Td maw={200} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {element.Keyword}
      </Table.Td>
      <Table.Td>{element.Type}</Table.Td>
      <Table.Td>{element.Number}</Table.Td>
      <Table.Td>{element.Time}</Table.Td>
      <Table.Td>
        <Link to={`/search/${element.Keyword}`}>
          <Group gap='xs'>
            Search again <ArrowRightIcon />
          </Group>
        </Link>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack>
      <FilterHeader title='Search History' />
      <Stack gap='xl'>
        <Stack gap='xs'>
          <Text> 25 July, 2023 </Text>
          <Table striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Keyword</Table.Th>
                <Table.Th>Type</Table.Th>
                <Table.Th>Number of Results</Table.Th>
                <Table.Th>Time</Table.Th>
                <Table.Th>Link</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Stack>
        <Stack gap='xs'>
          <Text> 24 July, 2023 </Text>
          <Table striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Keyword</Table.Th>
                <Table.Th>Type</Table.Th>
                <Table.Th>Number of Results</Table.Th>
                <Table.Th>Time</Table.Th>
                <Table.Th>Link</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Stack>
      </Stack>
    </Stack>
  );
}
