import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';

const LeftToggle = ({ state, setState }) => {
    const toggleDrawer = (open) => () => {
        setState(open);
    };

    const list = () => (
        <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Avatar sx={{ width: 30, height: 30 }} />
                        </ListItemIcon>
                        <ListItemText primary="User" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Home sx={{ color: "blue" }} />
                        </ListItemIcon>
                        <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <ArticleIcon sx={{ color: "rgb(242, 182, 17)" }} />
                        </ListItemIcon>
                        <ListItemText primary="Pages" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <GroupsIcon sx={{ color: "rgb(237, 113, 5)" }} />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <PersonIcon sx={{ color: "rgb(4, 191, 4)" }} />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <SettingsIcon sx={{ color: "rgb(219, 63, 24)" }} />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <LogoutIcon sx={{ color: "rgb(176, 19, 11)" }} />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
    return (
        <Drawer
            anchor="left"
            open={state}
            onClose={toggleDrawer(false)}
        >
            {list("Left")}
        </Drawer>
  )
}

export default LeftToggle
