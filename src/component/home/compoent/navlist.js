import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ListItemLink(props) {
    return <ListItem component="a" {...props} style={{ color: "white", paddingRight: "0px" }} />;
}



const NavLisItems = () => {

    
    return (
        <List component="nav" aria-label="secondary mailbox folders" style={{ display: "inherit", paddingLeft: "20px", color: "white" }}>
            <ListItemLink href={"#"}>
                <ListItemText primary={"Home"} />
            </ListItemLink>

        </List>
    )
}

export default NavLisItems