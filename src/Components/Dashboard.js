import React from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'
import { TableContainer,Paper,Table,TableHead,TableRow,TableCell,TableBody } from '@material-ui/core'
function Dashboard() {
    const handleChange = () => {

    }
    function createData(category,categorydescription) {
        return { category,categorydescription };
      }
      
      const rows = [
        createData('Frozen yoghurt', "category"),
        createData('Ice cream sandwich', "category "),
      ];
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <TextField
                        type="text"
                        placeholder="Category"
                        label="Category"
                        name="category"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange
                        }
                        required
                        autoFocus
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        type="text"
                        label="Category Description"
                        placeholder="Category Description"

                        name="categorydescription"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange
                        }
                        required

                    />
                </Grid>
                <Grid item xs={4} style={{ padding: "26px" }}>

                    <Button
                        variant="contained"
                        color="primary"
                        type="button"
                        className="button-block"

                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
            <h1>Categories</h1>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell >Sno.</TableCell>
            <TableCell >Category</TableCell>
            <TableCell >Category Description</TableCell>
            <TableCell >Action</TableCell>
                      </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >   <TableCell >{index+1}</TableCell>
              <TableCell >{row.category}</TableCell>
              <TableCell >{row.categorydescription}</TableCell>
              <TableCell ><Button
                        variant="contained"
                        style={{backgroundColor:"orange"}}
                        type="button"
                        className="button-block"
                        id={index}
                    >
                        Update
                    </Button>
                    </TableCell>
             
                    <TableCell ><Button
                        variant="contained"
                        style={{backgroundColor:"red"}}
                        type="button"
                        className="button-block"
                        id={index}
                    >
                        delete
                    </Button>
                    </TableCell>
             </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>

    )
}

export default Dashboard
