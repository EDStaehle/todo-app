import { useContext, useState } from 'react';
import {
  Pagination,
  Card,
  Text,
  Badge,
  Button,
  Group,
  Popover,
} from '@mantine/core';
import { When } from 'react-if';
import { SettingsContext } from '../../context/settings/setting';
import useStyles from '../mantineStyles/mantineStyles';
import Auth from '../Login_or_out/Auth';
import { AuthContext } from '../../context/Auth';
const List = (props) => {
  const { classes } = useStyles();
  const { list, toggleComplete, deleteItem } = props;
  let { itemsDisplayed, showComplete } = useContext(SettingsContext);
  const { user } = useContext(AuthContext);

  const [page, onChange] = useState(1);
  const listToShow = showComplete
    ? list
    : list.filter((item) => !item.complete);
  const startIndex = (page - 1) * itemsDisplayed;
  const endIndex = startIndex + itemsDisplayed;
  const pageList = listToShow.slice(startIndex, endIndex);
  console.log(list);
  if (user.capabilities.includes('update')) {
    console.log('user caps');
  }
  // setItemsDisplayed(list);
  return (
    <>
      {pageList.map((item) => (
        <div key={item.id}>
          <Card p='xs' radius='md' mb='md' withBorder width='80%'>
            <Card.Section withBorder>
              <Group position='apart' mt={0.01} withBorder>
                <Group>
                  {user.capabilities.includes('update') ? (
                    <>
                      <When condition={item.complete}>
                        <Badge
                          variant='light'
                          color='green'
                          size='xs'
                          width='10%'
                          radius='md'
                          onClick={() => toggleComplete(item.id)}
                        >
                          complete
                        </Badge>
                      </When>
                      <When condition={!item.complete}>
                        <Badge
                          variant='light'
                          color='red'
                          size='xs'
                          width='10%'
                          radius='md'
                          onClick={() => toggleComplete(item.id)}
                        >
                          Pending
                        </Badge>
                      </When>
                    </>
                  ) : (
                    <Popover
                      width={200}
                      position='bottom'
                      withArrow
                      shadow='md'
                    >
                      <Popover.Target>
                        <Badge>Complete: {item.complete.toString()}</Badge>
                      </Popover.Target>
                      <Popover.Dropdown>
                        <Text size='sm'>
                          Attention user you do not have the access to update.
                        </Text>
                      </Popover.Dropdown>
                    </Popover>
                  )}
                  <Text size='sm' color='dimmed'>
                    {item.assignee}
                  </Text>
                </Group>
                <Auth capability='delete'>
                  <Button
                    styles={(theme) => ({
                      root: {
                        backgroundColor: '#00acee',
                        height: 15,
                        paddingLeft: 5,
                        paddingRight: 5,
                        fontSize: theme.fontSizes.xs,
                      },
                    })}
                    onClick={() => deleteItem(item.id)}
                  >
                    X
                  </Button>
                </Auth>
              </Group>
            </Card.Section>
            <Group position='apart'>
              <Text size='xs' color='dimmed'>
                {item.details}
              </Text>
              <Text size='sm' color='dimmed'>
                Difficulty: {item.difficulty}
              </Text>
            </Group>
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
