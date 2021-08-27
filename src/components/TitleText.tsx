import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const TitleText = () => {
    const classes = useStyles();

    return (
        <Typography 
            className={classes.title}
            align="center"    
        >
            Discover Your Superhero Dream Team
        </Typography>
    )
}

const useStyles = makeStyles(theme => ({
    title: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 30
        },
        fontSize: 50,
        fontWeight: 600,
        color: '#ed1d24',
        fontFamily: 'Architects Daughter, cursive'
    }
}));

export default TitleText
