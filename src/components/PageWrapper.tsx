import { ReactNode } from "react";
import { Grid } from "@material-ui/core";

interface IProps {
    children: ReactNode
}

const PageWrapper = ({ children }: IProps) => {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
        >
            <Grid
                item
                md={8}
                xs={11}
            >
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                >
                    {children}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PageWrapper;
