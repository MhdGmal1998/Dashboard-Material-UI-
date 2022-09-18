import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { useDispatch, useSelector } from 'react-redux'
import FetchUserApi from '../../Redux/AsyncThunkApi/FetchUserApi';
import { useEffect, useState, useMemo } from 'react'
import Loading from './../../Components/Loading'
import {
    Collapse, TableSortLabel,
    TablePagination, TableRow,
    TableContainer, TableHead,
    TableCell, TableBody,
    Table, Box, Switch,
    FormControlLabel,
    Tooltip, IconButton,
    Checkbox, Paper,
    Typography, Toolbar
} from '@mui/material';

import {
    KeyboardArrowDown as KeyboardArrowDownIcon,
    KeyboardArrowUp as KeyboardArrowUpIcon
} from '@mui/icons-material/';

import Swal from 'sweetalert2'
function createData(id, name, email, governorate, district, neighporhood, phone) {
    return {
        id,
        name,
        email,
        governorate,
        district,
        neighporhood,
        phone
    };
}



function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'index',
        numeric: false,
        disablePadding: true,
        label: 'Index'
    },
    {
        id: 'id',
        numeric: false,
        disablePadding: true,
        label: 'User ID '
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'user Name',
    },
    {
        id: 'email',
        numeric: false,
        disablePadding: true,
        label: 'user Emial',
    },
    {
        id: 'governorate',
        numeric: false,
        disablePadding: true,
        label: 'user governorate'
    },
    {
        id: 'district',
        numeric: false,
        disablePadding: true,
        label: 'user district'
    },
    {
        id: 'neighporhood',
        numeric: false,
        disablePadding: true,
        label: 'user neighporhood'
    },
    {
        id: 'phone',
        numeric: false,
        disablePadding: true,
        label: 'user phone'
    }
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell />
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Users
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const Row = (props) => {
    const { row, index, isItemSelected, labelId, handleClick } = props
    const [open, setOpen] = useState(false)
    const [deviceData, setDeviceData] = useState([])
    const data = []
    
    useEffect(() => {
        row.deviceInfo.then((d) => {
            d.forEach(element => {
                data.push(element)
            });
        })
        setDeviceData(data)
        console.log("the row id " + row.id)
    }, [])

    return (
        <React.Fragment>
            <TableRow
                hover
                key={row.id}
                selected={isItemSelected}
            >
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell padding="checkbox"
                    onClick={(event) => handleClick(event, row.id)}
                >
                    <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                            'aria-labelledby': labelId,
                        }}
                    />
                </TableCell>
                <TableCell align="left">{index}</TableCell>
                <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                >
                    {row.id}
                </TableCell>
                <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                >
                    {row.name}
                </TableCell>

                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.governorate}</TableCell>
                <TableCell align="center">{row.district}</TableCell>
                <TableCell align="center">{row.neighporhood}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>

            </TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                            Devices
                        </Typography>
                        <Table size="small" >
                            <TableHead>
                                <TableRow>
                                    <TableCell>IMEI</TableCell>
                                    <TableCell>Model</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    deviceData && deviceData.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                {item.imei}
                                            </TableCell>
                                            <TableCell>
                                                {item.model}
                                            </TableCell>
                                            <TableCell>
                                                {item.name}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        </React.Fragment>
    )
}

export default function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }
    const [windowSize, setWindowSize] = useState(getWindowSize());

    const rows = useSelector(state => state.users.users)

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
       
        dispatch(FetchUserApi())
            .then(() => {
                setIsLoading(false)

            })
            .catch((er) => {
                setIsLoading(false)
            })

        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };

        
    }, [])


    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const ShowSwl = (id) => {
        Swal.fire(
            'The Internet?',
            'That thing is still around?',
            'info'
        )

    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (

        <Box sx={{ width: '100%' }}>
            {
                !isLoading ?
                    <Box>
                        <Paper sx={{ width: '100%', mb: 2 }}>
                            <EnhancedTableToolbar numSelected={selected.length} />
                            <TableContainer>
                                <Table
                                    sx={{ minWidth: 750 }}
                                    aria-labelledby="tableTitle"
                                    size={dense ? 'small' : 'medium'}
                                >
                                    <EnhancedTableHead
                                        numSelected={selected.length}
                                        order={order}
                                        orderBy={orderBy}
                                        onSelectAllClick={handleSelectAllClick}
                                        onRequestSort={handleRequestSort}
                                        rowCount={rows.length}
                                    />
                                    <TableBody>
                                        {/* if you don't need to support IE11, you can replace the `stableSort` call with:
             rows.slice().sort(getComparator(order, orderBy)) */}
                                        {stableSort(rows, getComparator(order, orderBy))
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row, index) => {
                                                const isItemSelected = isSelected(row.id);
                                                const labelId = `enhanced-table-checkbox-${index}`;
                                                
                                                return (
                                                    <Row row={row} index={index} labelId={labelId}
                                                        isItemSelected={isItemSelected}
                                                        handleClick={handleClick}
                                                    />
                                                );
                                            })}
                                        {emptyRows > 0 && (
                                            <TableRow
                                                style={{
                                                    height: (dense ? 33 : 53) * emptyRows,
                                                }}
                                            >
                                                <TableCell colSpan={6} />
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                        <FormControlLabel
                            control={<Switch checked={dense} onChange={handleChangeDense} />}
                            label="Dense padding"
                        />
                    </Box> :
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: windowSize.innerHeight - 100,

                    }}>
                        <Loading />
                    </Box>
            }
        </Box>

    );
}