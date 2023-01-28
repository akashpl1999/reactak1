import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Paper from '@material-ui/core/Paper';
import { Avatar, Container, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({

    table: {
        minWidth: 550,


    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },

    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));



const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),

];


export default function Table1() {
    const classes = useStyles();



    const [currency1, setcurrency1] = useState("INR")


    

    const [yearsel,setyearsel]=useState("1999");
   

    const [year, setyear] = useState(["1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007",  "2019", "2020", "2021", "2022", "2023"])

    const monthdata = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];



    const curency = ["INR",
        "IDR",
        "ILS",
        "MXN",
        "USD",
        "ZAR",

        "NZD",
        " NOK",

        " CNY",
        "BGN",
        "TRY",
        "PLN",
        "SGD",
        "CHF",
        "THB",
        "JPY",
        "HRK",
        "RUB",
        "BRL",
        "CAD",
        "HKD",
        "ISK",
        " PHP",
        "DKK",
        "HUF",
        "CZK",
        "RON",
        "SEK",
        "AUD",
        "EUR",
        "MYR",
        "KRW",
        "GBP"
    ]
    const handleChange1 = (e) => { setcurrency1(e.target.value) }
 
    const handleChange = (e) => {
        setyearsel(e.target.value)
    }
   

    return (


        <Container maxWidth="md" style={{ marginTop: '20px', }} >
            <Avatar>
                < PersonPinCircleIcon style={{ backgroundColor: 'black', color: 'white' }} />
            </Avatar>
            <Typography variant='h5' align='left'>Payslip</Typography>

            <TableContainer component={Paper} >
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: '25%' }}>


                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Year</InputLabel>


                                    <Select
                                        variant='outlined'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={yearsel}
                                        onChange={handleChange}
                                    >

                                        {

                                            year.map((elm) => {

                                                <option value={elm} >{elm}</option>

                                            })
                                        }
                                        </Select>
                                </FormControl>
                                    
                                
                            </TableCell>

                            <TableCell style={{ width: '25%' }} align="right">

                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Month</InputLabel>
                                    <Select
                                        variant='outlined'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={year}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>


                            </TableCell>
                            <TableCell style={{ width: '25%' }} align="right">

                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">weekly</InputLabel>
                                    <Select
                                        variant='outlined'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={currency1}
                                        onChange={handleChange1}
                                    >


                                        {

                                        curency.map((elm)=>{
                                            <option value={elm}>{elm}</option>

                                        })
                                     
                                        }
                                       </Select>
                                </FormControl>

                            </TableCell>


                            <TableCell style={{ width: '25%' }} align="right">

                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Curreny</InputLabel>
                                    <Select
                                        variant='outlined'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={year}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                            </TableCell>



                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow   >

                            <StyledTableCell style={{ color: "white"  }}>Dessert (100g serving)</StyledTableCell>
                            <StyledTableCell style={{ color: "white" }} align="right">Calories</StyledTableCell>
                            <StyledTableCell style={{ color: "white" }} align="right">Fat&nbsp;(g)</StyledTableCell>
                            <StyledTableCell style={{ color: "white" }} align="right">Carbs&nbsp;(g)</StyledTableCell>
                            <StyledTableCell style={{ color: "white" }} align="right">Protein&nbsp;(g)</StyledTableCell>

                        </TableRow>
                    </TableHead>




                    <TableBody style={{ overflow: "scroll" }}>
                        {rows.map((row) => (
                            <StyledTableRow orientation="vertical"
                                variant="scrollable" key={row.name}>

                                <StyledTableCell component="th" scope="row">
                                    {row.name}

                                </StyledTableCell>

                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell>


                            </StyledTableRow>
                        ))}
                    </TableBody>




                    <TableHead>
                        <TableRow>
                            <TableCell >Earings</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody style={{ overflow: "scroll" }}>
                        {rows.map((row) => (
                            <StyledTableRow orientation="vertical"
                                variant="scrollable" key={row.name}>

                                <StyledTableCell component="th" scope="row">
                                    {row.name}

                                </StyledTableCell>

                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell>


                            </StyledTableRow>
                        ))}
                    </TableBody>




                    <TableHead>
                        <TableRow>
                            <TableCell >Earings</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody style={{ overflow: "scroll" }}>
                        {rows.map((row) => (
                            <StyledTableRow orientation="vertical"
                                variant="scrollable" key={row.name}>

                                <StyledTableCell component="th" scope="row">
                                    {row.name}

                                </StyledTableCell>

                                <StyledTableCell  align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell>


                            </StyledTableRow>
                        ))}
                    </TableBody>





                    <TableBody style={{ overflow: "scroll" }}>

                        <StyledTableRow orientation="vertical"
                            variant="scrollable"  >


                            <TableCell ><CloudDownloadIcon /></TableCell>
                            <TableCell align="right"><CloudDownloadIcon />&nbsp;<VisibilityIcon /></TableCell>
                            <TableCell align="right"><CloudDownloadIcon />&nbsp;<VisibilityIcon /></TableCell>
                            <TableCell align="right"><CloudDownloadIcon />&nbsp;<VisibilityIcon /></TableCell>
                            <TableCell align="right"><CloudDownloadIcon />&nbsp;<VisibilityIcon /></TableCell>


                        </StyledTableRow>

                    </TableBody>











                </Table>


            </TableContainer>












        </Container>


    );
}
