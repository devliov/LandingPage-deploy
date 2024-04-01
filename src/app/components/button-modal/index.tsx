"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Calendar from "../calendar";
import { Typography } from "@mui/material";
import ServiceLocationsList from "../button-modal/servicelocations";
import ServiceCard from "./servicecard";
import { Close } from "@mui/icons-material";
import SchedulingList from "../calendar/schedulings";

export default function ButtonModal() {
  const [open, setOpen] = React.useState(false);
  const [selectedAddress, setSelectedAddress] = React.useState("");
  const [showCalendar, setShowCalendar] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowCalendar(false);
    setSelectedAddress("");
    setRadioValue("");
  };

  const handleAddressSelect = (address: string) => {
    setSelectedAddress(address);
  };

  const handleAdvance = () => {
    setShowCalendar(true);
  };

  const handleBack = () => {
    setShowCalendar(false);
    setRadioValue(selectedAddress);
  };

  const handleAppointment = () => {
    selectedAddress;
    handleClose();
  };

  const isButtonDisabled = selectedAddress === "";

  return (
    <React.Fragment>
      <Button
        className="text-white bg-greenS200 hover:bg-greenS300 text-xs font-extrabold p-3 px-10 shadow-none rounded-lg"
        onClick={handleClickOpen}
      >
        Agendar Consulta
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <div className="flex justify-between h-[60px] items-center p-4">
          <Typography className="font-bold">
            Confirme o local a data e o horário de atendimento
          </Typography>
          <Button className="" onClick={handleClose}>
            <Close className="text-grayS200 p-0" />
          </Button>
        </div>
        <DialogContent className="h-[500px] flex p-6 border-t gap-5 flex-wrap ">
          {!showCalendar && (
            <div className="flex flex-wrap">
              <div className="md:max-w-[724px]">
                <div className="flex flex-wrap">
                  <ServiceLocationsList
                    value={radioValue}
                    onAddressSelect={handleAddressSelect}
                  />
                </div>
                <div className="flex justify-end p-5">
                  <Button
                    className="text-white text-sm bg-greenS200 hover:bg-greenS300 font-bold"
                    onClick={handleAdvance}
                    disabled={isButtonDisabled}
                  >
                    Avançar
                  </Button>
                </div>
              </div>
            </div>
          )}
          {showCalendar && (
            <div className="flex flex-wrap">
              <div className="max-w-[724px]">
                <div className="flex flex-wrap gap-5">
                  <div className="max-w-[441px]">
                    <Calendar />
                  </div>
                  <div className="w-[283px]">
                    <SchedulingList />
                  </div>
                </div>
                <div className="flex justify-between md:max-w-[724px] ">
                  <Button
                    className="font-bold text-sm bg-[#ebc445] text-white hover:bg-[#ed6c02] "
                    onClick={handleBack}
                  >
                    Voltar
                  </Button>
                  <Button
                    className="text-white text-sm bg-greenS200 hover:bg-greenS300 font-bold"
                    onClick={handleAppointment}
                  >
                    Agendar
                  </Button>
                </div>
              </div>
            </div>
          )}
          <div>
            <ServiceCard value={selectedAddress} />
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
