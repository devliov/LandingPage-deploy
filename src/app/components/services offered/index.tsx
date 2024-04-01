"use cliente";

import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Add, HorizontalRule } from "@mui/icons-material";
import Arrow from "../../assets/arrowright.svg";

import { Typography } from "@mui/material";
import Image from "next/image";

interface Service {
  id: string;
  kind: string;
  about?: string;
}

export default function ServicesOffered() {
  const [openItems, setOpenItems] = React.useState<string | null>(null);
  const items: Service[] = [
    {
      id: "item1",
      kind: "Consulta Médica",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "item2",
      kind: "Procedimentos",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    // Adicione mais itens conforme necessário
  ];

  const handleClick = (itemId: string) => {
    setOpenItems(openItems === itemId ? null : itemId);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 798, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <Typography className="font-bold">Serviços Oferecidos</Typography>
      }
    >
      {items.map((item) => (
        <div className="max-w-[798px] border border-[#f4f6f9]" key={item.id}>
          <ListItemButton onClick={() => handleClick(item.id)}>
            <ListItemIcon>
              <Image src={Arrow} alt="" />
            </ListItemIcon>
            <ListItemText primary={item.kind} />
            {openItems === item.id ? <HorizontalRule /> : <Add />}
          </ListItemButton>
          <Collapse in={openItems === item.id} timeout="auto" unmountOnExit>
            <List
              className=" pl-11 bg-[#f4f6f9]"
              component="div"
              disablePadding
            >
              <ListItemButton>
                <ListItemText className="" primary={item.about} />
              </ListItemButton>
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
}
