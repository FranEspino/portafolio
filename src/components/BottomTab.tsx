import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import styles from "../../styles/Home.module.css";
import { Itemsnavbar } from "../assets/Itemsnavbar";
import Link from "next/link";
const BottomTab = () => {
  const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });
  
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={styles.ButtomNavigation}
    >
      {Itemsnavbar.map((item, index) => {
        <Link href={item.path}/>

        return (
            <BottomNavigationAction
              key={index}
              label={item.title}
              value={item.title}
              icon={item.icon}
            />
         );
      })}
    </BottomNavigation>
  );
};
export default BottomTab;
