import { useDispatch } from "react-redux";
import { getSuperheroTeam } from "../actions/superheroActions";
import { 
    Button,
    Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const LargeButton = () => {
    const classes = useStyles();
	const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getSuperheroTeam());
    }

    return (
        <Button
            className={classes.button}
            onClick={handleClick}
        >
            <Typography 
                className={classes.text}
                align="center"    
            >
                Generate Team!
            </Typography>
        </Button>
    );
}

const useStyles = makeStyles(theme => ({
    button: {
        backgroundColor: '#ed1d24',
        display: 'block',
        margin: '0 auto',
        transition: '0.5s',
        '&:hover': {
            backgroundColor: '#009EEB',
            transition: '0.5s',

        }
    },
    text: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 20
        },
        color: 'whitesmoke',
        fontFamily: 'Architects Daughter, cursive',
        fontSize: 40,
        fontWeight: 600
    }
}));

export default LargeButton;