import React from "react";
import BlackJack from "./blackJack";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Robot from "./robot";
export default function Games(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //<BlackJack />
  const tabList = [
    { icon: "Black-Jack", title: "Black-Jack", label: "BlackJack" },
    { icon: "Robot", title: "Robot", label: "Robot" },
  ];
  const panelList = [
    {
      cardComponent: <BlackJack />,
      value: "item BlackJack",
    },

    { cardComponent: <Robot />, value: "item Robot" },
  ];
  return (
    <div className="row">
      <AppBar position="static">
        <Tabs
          className="mediumaquamarine"
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
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
      {/* <div className="col-lg-2">
          <Button className="btn mb-4">Black Jack</Button>
          <Button className="btn">Robot</Button>
        </div> */}
    </div>
  );
}

//export default Games;
//   ReactDOM.render(<App />, document.getElementById('main'));

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
