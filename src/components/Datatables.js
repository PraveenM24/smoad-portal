import React from 'react';
import styled from 'styled-components';
import DataTable from 'react-data-table-component';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const Container = styled.div`
    height: 100vh;
`
const Wrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    overflow: hidden;
    background: #fff;
    padding: 30px 40px;
`
const TableWrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 50px;
`
const Title = styled.h2`
    color: #5f5f5f;
    margin-bottom: 20px;
`

const columns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Username',
        selector: row => row.username,
        sortable: true,
    },
    {
        name: 'Access',
        selector: row => row.access,
        sortable: true,
    },
    {
        cell: () => <Button variant="outlined" onClick={() => console.log("Details")}>Details</Button>,
				ignoreRowClick: true,
				allowOverflow: true,
				button: true,
    },
    {
        cell: () => <Button style={{width:'fit-content'}}variant="outlined" onClick={() => console.log("Access Log")}>Log</Button>,
				ignoreRowClick: true,
				allowOverflow: true,
				button: true,
    },
    {
        cell: () => <IconButton aria-label="delete" color="error" onClick={() => console.log("Delete")}>
                        <DeleteIcon />
                    </IconButton>,
				ignoreRowClick: true,
				allowOverflow: false,
				button: true,
    }
];

const data = [
    {
        id: 778,
        name: 'Srinivasan',
        username: 'srini98',
        area: 'Chennai',
        access: 'Admin',
    },
    {
        id: 777,
        name: 'Kiran',
        username: 'kiran23',
        area: 'Bangalore',
        access: 'Limited',
    },
]

const customStyles = {
    rows: {
        style: {
            minHeight: '60px',
        },
    },
    headCells: {
        style: {
            padding: '20px',
            background: '#0C2D48',
            color: '#fff',
            fontSize: '15px',
        },
    },
    cells: {
        style: {
            padding: '20px',
        },
    },
};

function Datatables() {
    return (
        <Container>
            <Wrapper>
                <Title>Users</Title>
                <TableWrapper>               
                    <DataTable 
                        columns={columns} 
                        data={data} 
                        pagination 
                        customStyles={customStyles}
                    />
                </TableWrapper>
            </Wrapper>
        </Container>
    )
}

export default Datatables
