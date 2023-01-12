import { createStyles } from '@mantine/core';
const useStyles = createStyles((theme) => ({
  listCards: {
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

  navbar: {
    backgroundColor: theme.colors.blue[6],
    color: theme.colors.gray[0],
    display: 'flex',
    alignItems: 'apart',
    justifyContent: 'center',
  },
  navbarLink: {
    color: theme.colors.gray[0]
  },
  settingsHeader: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.lg
  },
  homeHeader: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.lg
  }
}));
export default useStyles;