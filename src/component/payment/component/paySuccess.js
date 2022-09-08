
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



const PaySuccess = () => {

    return (<>

        <h2>
            
        </h2>

        <TableContainer >
            <Table className={''} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product_id</TableCell>
                        <TableCell align="right">Products_Name</TableCell>

                        <TableCell align="right">Pay_Type</TableCell>
                        <TableCell align="right">Price </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableCell align="right">{'123'}</TableCell>
                    <TableCell align="right">{'Data migration'}</TableCell>
                    <TableCell align="right">{'Debit card'}</TableCell>
                    <TableCell align="right">{'100$'}</TableCell>
                </TableBody>
            </Table>
        </TableContainer >
    </>
    )

}

export default PaySuccess