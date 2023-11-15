import React from "react";

import {
  Card,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

const uptimetodhm = (uptime) => {
  let days = Math.floor(uptime / 86400);
  let hours = Math.floor((uptime % 86400) / 3600);
  let minutes = Math.floor(((uptime % 86400) % 3600) / 60);

  let uptimeString = `${days}d ${hours}h ${minutes}m`;
  return uptimeString;
};

const statusColorMap = {
  connected: "success",
  disconnected: "danger",
};

const renderCell = (cellValue, columnKey) => {
  if (columnKey === "status") {
    return (
      <TableCell>
        <Chip
          size="md"
          variant="flat"
          className="capitalize"
          color={statusColorMap[cellValue]}
        >
          {cellValue}
        </Chip>
      </TableCell>
    );
  }
  return <TableCell>{cellValue}</TableCell>;
};
const renderMistCell = (cellValue, columnKey) => {
  if (
    columnKey === "config_status" &&
    cellValue !== "" &&
    cellValue !== null &&
    cellValue !== undefined
  ) {
    return (
      <TableCell>
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/30/377DE3/foggy-night-1.png"
          alt="foggy-night-1"
        />
      </TableCell>
    );
  }

  return <TableCell>{cellValue}</TableCell>;
};

const RouterSummary = ({ DeviceSummary }) => {
  const NumGateways = DeviceSummary.filter(
    (item) => item.type === "gateway"
  ).length;

  return (
    <>
      {NumGateways > 0 ? (
        <Card shadow className="m-3">
          <CardBody>
            <Table aria-label="router list" data={DeviceSummary}>
              <TableHeader>
                <TableColumn span={2}>Status</TableColumn>
                <TableColumn span={2}>Name</TableColumn>
                <TableColumn span={2}>IP</TableColumn>

                <TableColumn span={2}>Mac</TableColumn>
                <TableColumn span={2}>Model</TableColumn>
                <TableColumn span={2}>Serial</TableColumn>
                <TableColumn span={2}>Uptime</TableColumn>
                <TableColumn span={2}>Version</TableColumn>
                <TableColumn span={2}></TableColumn>
              </TableHeader>
              <TableBody>
                {DeviceSummary.map(
                  (DeviceSummary) =>
                    DeviceSummary.type === "gateway" && (
                      <TableRow key={DeviceSummary?.id}>
                        {renderCell(DeviceSummary?.status, "status")}
                        <TableCell span={2}>{DeviceSummary?.name}</TableCell>
                        <TableCell span={2}>{DeviceSummary?.ip}</TableCell>
                        <TableCell span={2}>{DeviceSummary?.mac}</TableCell>
                        <TableCell span={2}>{DeviceSummary?.model}</TableCell>
                        <TableCell span={2}>{DeviceSummary?.serial}</TableCell>

                        <TableCell span={2}>
                          {!DeviceSummary?.uptime
                            ? ""
                            : uptimetodhm(DeviceSummary?.uptime)}
                        </TableCell>
                        <TableCell span={2}>{DeviceSummary?.version}</TableCell>

                        {renderMistCell(
                          DeviceSummary?.config_status,
                          "config_status"
                        )}
                      </TableRow>
                    )
                )}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      ) : (
        ""
      )}
    </>
  );
};

const LadningPage = () => {
  return (
    <div className="grid mt-40 px-4 place-content-center">
      <h1 className="tracking-widest text-gray-500 uppercase">
        No Site Selected | Select a Site to View Routers
      </h1>
    </div>
  );
};
const NoRouters = () => {
  return (
    <div className="grid mt-40 px-4 place-content-center">
      <h1 className="tracking-widest text-gray-500 uppercase">
        No Router Found for Selected Site
      </h1>
    </div>
  );
};

export const Routers = ({ DeviceSummary }) => {
  const NumRouters = DeviceSummary.filter(
    (item) => item.type === "gateway"
  ).length;

  return (
    <>
      {NumRouters === 0 && DeviceSummary.length !== 0 ? <NoRouters /> : ""}

      {DeviceSummary.length === 0 ? (
        <LadningPage />
      ) : (
        <RouterSummary DeviceSummary={DeviceSummary} />
      )}
    </>
  );
};

export default Routers;
