import { makeStyles } from "@material-ui/core/styles";

const Break = () => {
    const classes = useStyles();

    return (
        <hr className={classes.break}/>
    );
}

const useStyles = makeStyles(theme => ({
    break: {
        height: 2,
        backgroundColor: '#009EEB'
    }
}));

export default Break;