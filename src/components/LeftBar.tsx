import { Button, Checkbox, Select, Stack, Text, Badge } from '@mantine/core';
import { useState } from 'react';
import BasicCard from './BasicCard';

export default function LeftBar() {
  const [checkboxes, setCheckboxes] = useState([
    { label: 'Checkbox', checked: false, key: 1 },
    { label: 'Checkbox', checked: false, key: 2 },
    { label: 'Checkbox', checked: false, key: 3 },
    { label: 'Checkbox', checked: false, key: 4 },
    { label: 'Checkbox', checked: false, key: 5 },
    { label: 'Checkbox', checked: false, key: 6 },
    { label: 'Checkbox', checked: false, key: 7 },
    { label: 'Checkbox', checked: false, key: 8 },
    { label: 'Checkbox', checked: false, key: 9 },
    { label: 'Checkbox', checked: false, key: 10 },
  ]);
  const [activesCheckboxes, setActivesCheckboxes] = useState(0);

  const onChange = (boxes: any) => {
    const updatedBoxes = checkboxes.map((box) => {
      if (boxes.key === box.key) {
        setActivesCheckboxes(!boxes.checked ? activesCheckboxes + 1 : activesCheckboxes - 1);
        return { ...box, checked: !box.checked };
      }
      return box;
    });
    setCheckboxes(updatedBoxes);
  };

  const onClick = () => {
    const updatedBoxes = checkboxes.map((box) => ({ ...box, checked: false }));
    setCheckboxes(updatedBoxes);
    setActivesCheckboxes(0);
  };

  return (
    <BasicCard title='Special Filter' titleChildren={<Badge miw={50}>{activesCheckboxes || '0'}</Badge>}>
      <Stack>
        <Stack style={{ maxHeight: '350px', minWidth: '100%', margin: '0px 4px', overflowY: 'scroll' }}>
          {checkboxes.map((box) => (
            <Checkbox onChange={() => onChange(box)} checked={box.checked} label='Checkbox' key={box.key} />
          ))}
        </Stack>
        <Button radius='xl' onClick={onClick}>
          Remove all filter
        </Button>
        <Stack>
          <Text> Country Filter </Text>
          <Select data={['React', 'Angular', 'Vue', 'Svelte']} />
        </Stack>
      </Stack>
    </BasicCard>
  );
}
