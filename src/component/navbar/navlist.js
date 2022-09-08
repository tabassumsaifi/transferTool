import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";

function ListItemLink(props) {
    console.log(props)
    return <ListItem component="a" {...props} style={{ color: "white", paddingRight: "0px" }} />;
}



const NavLisItems = () => {

    
    return (
        <List component="nav" aria-label="secondary mailbox folders" style={{ display: "inherit", paddingLeft: "20px", color: "white" }}>
            <ListItemLink to={"/paymentSection"}>
                <ListItemText primary={"PaymentSection"} />
            </ListItemLink>
           
              <ListItem button component={Link} to="/PaymentSection" >
                  Payhere
              </ListItem>
              <ListItem button component={Link} to="/solution" >
                  GetSolutions
              </ListItem>
              <ListItem button component={Link} to="/instance" >
                  Instance
              </ListItem>
            {/* </ListItemLink> */}

        </List>
    )
}

export default NavLisItems