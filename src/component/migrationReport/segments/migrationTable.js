import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const MigrationTable = ({ migrationReport }) => {
  const classes = useStyles();
  return (
    <>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Objects</TableCell>
              <TableCell>Total</TableCell>
              {/* <TableCell>Filtered&nbsp;</TableCell>
              <TableCell>New&nbsp;</TableCell>
              <TableCell>Existing&nbsp;</TableCell>
              <TableCell>Completed&nbsp;</TableCell>
              <TableCell>Pending&nbsp;</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {migrationReport.map((row, index) => {
              return (
                <TableRow hover key={row.name}>
                  <TableCell align="left" style={{ width: "18%" }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="left" style={{ width: "12%" }}>
                    {row.total}
                  </TableCell>
                  {/* <TableCell align="left" style={{ width: "12%" }}>
                    {row.filtered}
                  </TableCell>
                  <TableCell align="left" style={{ width: "12%" }}>
                    {row.new}
                  </TableCell>
                  <TableCell align="left" style={{ width: "12%" }}>
                    {row.existing}
                  </TableCell>
                  <TableCell align="left" style={{ width: "12%" }}>
                    {row.completed}
                  </TableCell>
                  <TableCell align="left" style={{ width: "12%" }}>
                    {row.pending}
                  </TableCell> */}
                </TableRow>
              );
            })}
          </TableBody>

        </Table>
      </TableContainer>
    </>
  );
};

export default MigrationTable;
