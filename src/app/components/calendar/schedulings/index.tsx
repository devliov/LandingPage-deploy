import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Scheduling {
  id: number;
  time: string;
}

export default function SchedulingList() {
  const schedules: Scheduling[] = [
    { id: 1, time: "08:00" },
    { id: 2, time: "09:00" },
    { id: 3, time: "10:00" },
    { id: 4, time: "11:00" },
    { id: 5, time: "13:00" },
    { id: 6, time: "14:00" },
    { id: 7, time: "15:00" },
    { id: 8, time: "16:00" },
  ];

  const [selectedSchedule, setSelectedSchedule] = useState<Scheduling | null>(
    null
  );

  const handleScheduleClick = (schedule: Scheduling) => {
    setSelectedSchedule(schedule);
  };

  return (
    <div className="p-5">
      <Typography className="text-center">Horários disponíveis</Typography>
      <div className="flex flex-wrap w-[283px] gap-5 justify-center p-5">
        {schedules.map((schedule) => (
          <Button
            key={schedule.id}
            onClick={() => handleScheduleClick(schedule)}
            className="text-grayS400 rounded-md w-[85px]"
            sx={{
              backgroundColor:
                selectedSchedule?.id === schedule.id
                  ? "#56B3B8 !important"
                  : "",
              color:
                selectedSchedule?.id === schedule.id
                  ? "#ffffff !important"
                  : "",
              border:
                selectedSchedule?.id === schedule.id
                  ? "0px solid !important"
                  : "1px solid #EBEEF2",
            }}
          >
            {schedule.time}
          </Button>
        ))}
      </div>
      {selectedSchedule && (
        <Typography>Horário selecionado: {selectedSchedule.time}</Typography>
      )}
    </div>
  );
}
