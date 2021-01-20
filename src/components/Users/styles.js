import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(196px, 1fr))',
    gridGap: '1em',
    margin: '1em',
    },
    selected: {
        backgroundColor: 'transparent',
        color: 'rgba(81, 203, 238, 1)',
    },
}))