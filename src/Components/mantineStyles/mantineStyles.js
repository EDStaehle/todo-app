import { createStyles } from '@mantine/core';
const useStyles = createStyles((theme) => ({
  listCards: {
    // subscribe to color scheme changes right in your styles
    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

    width: 600,
    maxHeight: 100,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    borderRadius: theme.radius.sm,


  },

  child: {
    // assign ref to element
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));
export default useStyles;