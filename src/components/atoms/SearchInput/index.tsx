import {createStyles, Divider, IconButton, InputBase, makeStyles, Paper, Theme} from "@material-ui/core";
import {Clear as ClearIcon, Search as SearchIcon} from "@material-ui/icons";
import React, {CSSProperties} from "react";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        divider: {
            height: 28,
            margin: 4,
        },
        iconButton: {
            padding: 10,
        },
        input: {
            flex: 1,
            marginLeft: theme.spacing(1),
        },
        root: {
            alignItems: 'center',
            display: 'flex',
            padding: '2px 4px',
        },
    }),
);

interface ISearchInputProps {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    onSearch: (value: string) => void;
    style?: CSSProperties;
}

const SearchInput = ({ label, onChange, onSearch, value, style}: ISearchInputProps) => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (<Paper component="form" className={classes.root} style={style}>
        <InputBase
            className={classes.input}
            placeholder={label}
            inputProps={{ 'aria-label': label }}
            value={value}
            onChange={(event) => onChange(event.target.value)}
        />
        <IconButton color="secondary"
                    className={classes.iconButton}
                    aria-label={t("clear")}
                    onClick={onChange.bind(null, "")}
        >
            <ClearIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton className={classes.iconButton}
                    aria-label={t("search")}
                    onClick={onSearch.bind(null, value)}
        >
            <SearchIcon />
        </IconButton>
    </Paper>);
};

export default SearchInput