import { SuperheroType } from "../actions/superheroActionTypes";

import {
    Paper,
    Typography
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const Superhero = ({ id, name, biography, image: { url }}: SuperheroType) => {
    const classes = useStyles();

    return (
        <Paper
            className={classes.root}
            elevation={5}
        >
            <img
                className={classes.img}
                alt={name}
                src={url}
            />
            <br/>
            <h1>{name}</h1>
            <h3>Full name: {biography['full-name'] ? biography['full-name'] : <>???</>}</h3>
            <h3>Publisher: {biography.publisher ? biography.publisher : <>???</>}</h3>
            <h4>ID: {id}</h4>
        </Paper>
    );
}

const useStyles = makeStyles(theme => ({
    img: {
        width: '100%',
        aspectRatio: '1 / 1.2'
    },
    root: {
        textAlign: 'center',
        marginBottom: '10px',
        borderRadius: 15
    }
}));

export default Superhero;