import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import styles from './Header.module.css'

const Header = ({ query, setQuery, countries, continent, setContinent }) => {
    const [listContinent, setListContinent] = useState([])

    useEffect(() => {
        const kontynent = new Set()
        countries.forEach((e) => {
            kontynent.add(e.continents[0])
        })
        setListContinent(Array.from(kontynent).sort());
    }, [countries])

    const handleChange = (e) => {
        setContinent(e.target.value)
    }

    return (
        <div className={styles.root}>
            <div className={styles.inputmargin}>
                <TextField onChange={(e) => setQuery(e.target.value)} value={query} label='nazwa kraju '
                    InputLabelProps={{ style: { color: 'darkgrey' } }} InputProps={{ className: styles.input }} />
            </div>
            <span className={styles.text}>Countries of the world </span>
            <div>
                <FormControl fullWidth className={styles.select} >
                    <InputLabel className={styles.label} id="demo-simple-select-label" >Continent</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={continent}
                        label="continent"
                        onChange={handleChange}
                        sx={{
                            minWidth: 400,
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgb(136, 150, 150)',
                            }
                        }}>
                        <MenuItem value={""}>all</MenuItem>
                        {listContinent.map((e) => (
                            <MenuItem key={e} value={e}>{e}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default Header