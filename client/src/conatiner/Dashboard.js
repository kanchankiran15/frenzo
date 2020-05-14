import React from "react";
import MyProfile from "../components/myProfile";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import NotesIcon from "@material-ui/icons/Notes";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import GamesIcon from "@material-ui/icons/Games";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import MyGallery from "../components/myGallary";
import Games from "../components/games";
import Notes from "../components/notes";
import Upload from "../components/upload";

//  import { tabList, panelList } from "../constants";

export default function Dashboard(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabList = [
    { icon: <PersonIcon />, title: "My Profile", label: "person" },
    { icon: <NotesIcon />, title: "Notes", label: "notes" },
    { icon: <PhotoAlbumIcon />, title: "Album", label: "album" },
    { icon: <CloudUploadIcon />, title: "Upload", label: "upload" },
    { icon: <GamesIcon />, title: "Games", label: "games" },
  ];

  const panelList = [
    {
      cardComponent: <MyProfile userProp={props.userProp} />,
      value: "item One",
    },

    { cardComponent: <Notes />, value: "item three" },
    { cardComponent: <MyGallery />, value: "item four" },
    { cardComponent: <Upload />, value: "item five" },
    { cardComponent: <Games />, value: "item six" },
  ];
  return (
    <div className="col-sm-9">
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            className="seaLightGreen"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="off"
            aria-label="scrollable prevent tabs example"
          >
            {tabList.map((x, index) => (
              <Tooltip title={x.title} placement="right">
                <Tab icon={x.icon} aria-label={x.label} {...a11yProps(index)} />
              </Tooltip>
            ))}
          </Tabs>
        </AppBar>
        {panelList.map((lst, index) => (
          <TabPanel value={value} index={index}>
            {lst.cardComponent}
          </TabPanel>
        ))}
      </div>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));
