import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Madico from "../../../assets/Medico.jpg";
import { Divider } from "@mui/material";

interface ServiceLocationsProps {
  value: string;
}

export default function ServiceCard({ value }: ServiceLocationsProps) {
  return (
    <Card className="sm:max-w-[334px] min-w-[280px]">
      <CardContent className="flex flex-col gap-5">
        <Typography className="text-center font-bold">
          Agendamento de consulta
        </Typography>
        <Image
          src={Madico}
          alt=""
          height={100}
          className="m-auto rounded-full"
        />
        <div>
          <Typography className="text-center font-bold">
            Dr. Leonardo Borges
          </Typography>
          <Typography className="text-center text-sm">Urologista</Typography>
        </div>
        <Divider />
        <div>
          <div>
            <Typography className="font-bold">Detalhes</Typography>
          </div>
          <div className="flex justify-between">
            <Typography className="text-sm">Consulta</Typography>
            <Typography className="text-sm">R$ 250,00</Typography>
          </div>
          {value && (
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <Typography className="text-sm">
                  Local de atendimento:
                </Typography>
                <Typography className="text-sm">{value}</Typography>
              </div>
              <Divider />
              <div className="flex justify-between">
                <Typography className="font-bold">Detalhes</Typography>
                <Typography className="font-bold">R$ 250,00</Typography>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
