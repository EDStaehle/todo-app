import { useContext, useState } from 'react';
import { Pagination, Card, Text, Badge, Button, Group } from '@mantine/core';
import { SettingsContext } from '../../context/settings/setting';
import useStyles from '../mantineStyles/mantineStyles';
const List = (props) => {
  const { classes } = useStyles();
  const { list, toggleComplete, deleteItem } = props;
  let { itemsDisplayed, showComplete } = useContext(SettingsContext);
  const [page, onChange] = useState(1);
  const listToShow = showComplete
    ? list
    : list.filter((item) => !item.complete);
  console.log(list);
  const startIndex = (page - 1) * itemsDisplayed;
  const endIndex = startIndex + itemsDisplayed;
  const pageList = listToShow.slice(startIndex, endIndex);
  // setItemsDisplayed(list);
  return (
    <>
      {pageList.map((item) => (
        <div key={item.id}>
          <Card shadow='sm' p='xs' radius='md' withBorder width='sm'>
            <Group position='apart' mt='xs' mb='xs'>
              <Text size='sm' color='dimmed'>
                Assigned to: {item.assignee}
              </Text>
              <Button
                position={{ top: 10, right: 0 }}
                onClick={() => deleteItem(item.id)}
              >
                X
              </Button>
            </Group>
            <Text size='sm' color='dimmed'>
              Difficulty: {item.difficulty}
            </Text>
            <Text size='sm' color='dimmed'>
              {item.details}
            </Text>
            <Button
              variant='light'
              color='blue'
              fullWidth
              mt='md'
              radius='md'
              onClick={() => toggleComplete(item.id)}
            >
              Complete: {item.complete.toString()}
            </Button>
          </Card>
        </div>
      ))}
      <Pagination
        page={page}
        initialPage={1}
        onChange={onChange}
        total={Math.ceil(listToShow.length / itemsDisplayed)}
      />
    </>
  );
};
export default List;
