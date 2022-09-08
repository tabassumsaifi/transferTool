
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";





const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#f1f2f6",
      color: "#333",
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
      border: "1px solid rgba(224, 224, 224, 1)",
    },
  });
  
  // const StyledTableRow = withStyles((theme) => ({
  //   root: {
  //     "&:nth-of-type(odd)": {
  //       backgroundColor: theme.palette.action.hover,
  //     },
  //   },
  // }))(TableRow);

const PricingTable = ({priceDetail}) =>{
    const classes = useStyles();

    return(
        <>
         <Grid
                item
                xs={12}
                sm={12}
                md={12}
                style={{ marginTop: "40px", marginBotton: "10px" }}
              >
                <TableContainer>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>
                          Total record(To be migrated)
                        </StyledTableCell>
                        <StyledTableCell>rate per record</StyledTableCell>
                        <StyledTableCell>Total Amount</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow key={"row.name"}>
                        <TableCell align="left" style={{ width: "20%" }}>
                          {priceDetail.records}
                        </TableCell>
                        <TableCell align="left" style={{ width: "15%" }}>
                          {priceDetail.amountPerProduct}
                        </TableCell>
                        <TableCell align="left" style={{ width: "15%" }}>
                          {priceDetail.totalAmount}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              
        </>
    )
}

export default PricingTable