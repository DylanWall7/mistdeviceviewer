import React from "react";
import { useState, useEffect } from "react";

import { useMsal } from "@azure/msal-react";
import { GizmoRequest } from "../authConfig";

import {
  Card,
  CardBody,
  Checkbox,
  Tooltip,
  Accordion,
  AccordionItem,
  extendVariants,
  Divider,
  Chip,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";

import { CopperPortUp } from "./PortTypes";
import { CopperPortDown } from "./PortTypes";
import { VcpPortUp } from "./PortTypes";
import { FiberPortUp } from "./PortTypes";
import { FiberPortDown } from "./PortTypes";
import { CopperPortErr } from "./PortTypes";
import { FiberPortErr } from "./PortTypes";

import LoadingModal from "./LoadingModal";

export const Switch48p = ({ DeviceSummary }) => {
  const MyCheckBox = extendVariants(Checkbox, {
    variants: {
      // <- modify/add variants

      isDisabled: {
        true: {
          wrapper: "before:border-gray-500",
          label: "text-danger",
        },
        false: {
          wrapper: "before:border-success",
          label: "text-success",
        },
      },
      isInvalid: {
        true: {
          wrapper: "before:border-danger",
          label: "text-danger",
        },
      },
    },
    defaultVariants: {
      // <- modify/add default variants
      isDisabled: true,
    },
    compoundVariants: [
      // <- modify/add compound variants
      {
        isDisabled: true,
      },
    ],
  });

  const { instance, accounts } = useMsal();
  const request = {
    ...GizmoRequest,
    account: accounts[0],
  };

  const DisplayPorts = ({ ports, pic_id, memberid }) => {
    return (
      <>
        <div className="flex flex-row ">
          {ports
            .filter((port) => port.id % 2 === 0)

            .map((port) => (
              <div key={port.id} className="m-1">
                {port.up &&
                port.media_type === "copper" &&
                !port.port_id.includes("vcp") ? (
                  <CopperPortUp />
                ) : (
                  ""
                )}

                {!port.up &&
                port.media_type === "copper" &&
                port.stp_state !== "blocking" &&
                !port.port_id.includes("vcp") ? (
                  <CopperPortDown />
                ) : (
                  ""
                )}

                {port && port.up && port.port_id.includes("vcp") ? (
                  <VcpPortUp />
                ) : (
                  ""
                )}

                {port &&
                port.stp_state !== "blocking" &&
                !port.up &&
                !port.media_type ? (
                  <FiberPortDown />
                ) : (
                  ""
                )}

                {port &&
                port.stp_state !== "blocking" &&
                !port.up &&
                port.media_type === "fiber" ? (
                  <FiberPortDown />
                ) : (
                  ""
                )}

                {port && port.media_type === "fiber" && port.up ? (
                  <FiberPortUp />
                ) : (
                  ""
                )}

                {!port.up &&
                port.media_type === "copper" &&
                port.stp_state === "blocking" ? (
                  <CopperPortErr />
                ) : (
                  ""
                )}
                {!port.up &&
                port.media_type !== "copper" &&
                port.stp_state === "blocking" ? (
                  <FiberPortErr />
                ) : (
                  ""
                )}

                {!port.up ? (
                  <Tooltip
                    content={
                      <div className="px-1 py-2">
                        <div className="text-small font-bold"></div>
                        <div className="text-tiny">
                          <div className="text-tiny">
                            {port.port_id}
                            <br />
                          </div>
                        </div>
                      </div>
                    }
                  >
                    {/* <p key={port.port_id}>{`${memberid}/${pic_id}/${port.id}`}</p> */}
                    <p key={port.port_id}>{`${port.id}`}</p>
                  </Tooltip>
                ) : (
                  //break into seperate component and pass props
                  <Tooltip
                    content={
                      <Card className="max-w-[410px]">
                        <CardHeader className=" flex justify-around gap-3">
                          <div className="flex justify-start">
                            <dt className="font-medium text-gray-900">
                              {port.port_id}
                            </dt>
                          </div>
                          <div className="flex justify-end">
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/material-outlined/24/network-cable.png"
                              alt="network-cable"
                            />
                            <p className="text-md m-1 text-center ">
                              Wired Client
                            </p>
                          </div>
                        </CardHeader>
                        <Divider />

                        <CardBody>
                          <div className="flow-root">
                            <dl className="-my-3 divide-y divide-gray-100 text-sm">
                              <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">
                                  Port Mode
                                </dt>
                                <dd className="text-gray-700 sm:col-span-2">
                                  {port.port_mode}
                                </dd>
                              </div>

                              <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">
                                  Port Profile
                                </dt>
                                <dd className="text-gray-700 sm:col-span-2">
                                  {port.port_usage}
                                </dd>
                              </div>

                              <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">
                                  Poe Draw
                                </dt>
                                <dd className="text-gray-700 sm:col-span-2">
                                  {port.power_draw}
                                </dd>
                              </div>
                              <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">
                                  Port Speed
                                </dt>
                                <dd className="text-gray-700 sm:col-span-2">
                                  {port.speed}
                                </dd>
                              </div>
                              <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">
                                  Port State
                                </dt>
                                <dd className="text-gray-700 sm:col-span-2">
                                  {port.stp_state}
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </CardBody>
                        <Divider />
                        <CardFooter className="flex flex-col justify-center">
                          <dt className="font-medium text-gray-900">
                            Other Detail
                          </dt>
                          <CardBody>
                            <div className="flow-root">
                              <dl className="-my-3 divide-y divide-gray-100 text-sm">
                                <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                                  <dt className="font-medium text-gray-900">
                                    Neighbor Mac
                                  </dt>
                                  <dd className="text-gray-700 sm:col-span-2">
                                    {port.neighbor_mac}
                                  </dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                                  <dt className="font-medium text-gray-900">
                                    Neighbor Port
                                  </dt>
                                  <dd className="text-gray-700 sm:col-span-2">
                                    {port.neighbor_port_desc}
                                  </dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                                  <dt className="font-medium text-gray-900">
                                    Neighbor Name
                                  </dt>
                                  <dd className="text-gray-700 sm:col-span-2">
                                    {port.neighbor_system_name}
                                  </dd>
                                </div>
                              </dl>
                            </div>
                          </CardBody>
                        </CardFooter>
                      </Card>
                    }
                  >
                    <p key={port.port_id}>{`${port.id}`}</p>
                  </Tooltip>
                )}
              </div>
            ))}
        </div>
        <Divider className="my-1" />
        <div className="flex flex-row ">
          {ports
            .filter((port) => port.id % 2 !== 0)
            .map((port) => (
              <div key={port.id} className="m-1">
                {port.up &&
                port.media_type === "copper" &&
                !port.port_id.includes("vcp") ? (
                  <CopperPortUp />
                ) : (
                  ""
                )}

                {!port.up &&
                port.media_type === "copper" &&
                port.stp_state !== "blocking" &&
                !port.port_id.includes("vcp") ? (
                  <CopperPortDown />
                ) : (
                  ""
                )}

                {port && port.up && port.port_id.includes("vcp") ? (
                  <VcpPortUp />
                ) : (
                  ""
                )}

                {port &&
                port.stp_state !== "blocking" &&
                !port.up &&
                !port.media_type ? (
                  <FiberPortDown />
                ) : (
                  ""
                )}
                {port &&
                port.stp_state !== "blocking" &&
                !port.up &&
                port.media_type === "fiber" ? (
                  <FiberPortDown />
                ) : (
                  ""
                )}

                {port && port.media_type === "fiber" && port.up ? (
                  <FiberPortUp />
                ) : (
                  ""
                )}

                {!port.up &&
                port.media_type === "copper" &&
                port.stp_state === "blocking" ? (
                  <CopperPortErr />
                ) : (
                  ""
                )}
                {!port.up &&
                port.media_type !== "copper" &&
                port.stp_state === "blocking" ? (
                  <FiberPortErr />
                ) : (
                  ""
                )}

                {!port.up ? (
                  <Tooltip
                    content={
                      <div className="px-1 py-2">
                        <div className="text-small font-bold"></div>
                        <div className="text-tiny">
                          <div className="text-tiny">
                            {port.port_id}
                            <br />
                          </div>
                        </div>
                      </div>
                    }
                  >
                    {/* <p key={port.port_id}>{`${memberid}/${pic_id}/${port.id}`}</p> */}
                    <p key={port.port_id}>{`${port.id}`}</p>
                  </Tooltip>
                ) : (
                  //break into seperate component and pass props
                  <Tooltip
                    content={
                      <Card className="max-w-[410px]">
                        <CardHeader className=" flex justify-around gap-3">
                          <div className="flex justify-start">
                            <dt className="font-medium text-gray-900">
                              {port.port_id}
                            </dt>
                          </div>
                          <div class="flex justify-end">
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/material-outlined/24/network-cable.png"
                              alt="network-cable"
                            />
                            <p className="text-md m-1 text-center ">
                              Wired Client
                            </p>
                          </div>
                        </CardHeader>
                        <Divider />

                        <CardBody>
                          <div className="flow-root">
                            <dl className="-my-3 divide-y divide-gray-100 text-sm">
                              <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">
                                  Port Mode
                                </dt>
                                <dd className="text-gray-700 sm:col-span-2">
                                  {port.port_mode}
                                </dd>
                              </div>

                              <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">
                                  Port Profile
                                </dt>
                                <dd className="text-gray-700 sm:col-span-2">
                                  {port.port_usage}
                                </dd>
                              </div>

                              <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">
                                  Poe Draw
                                </dt>
                                <dd className="text-gray-700 sm:col-span-2">
                                  {port.power_draw}
                                </dd>
                              </div>
                              <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">
                                  Port Speed
                                </dt>
                                <dd className="text-gray-700 sm:col-span-2">
                                  {port.speed}
                                </dd>
                              </div>
                              <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">
                                  Port State
                                </dt>
                                <dd className="text-gray-700 sm:col-span-2">
                                  {port.stp_state}
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </CardBody>
                        <Divider />
                        <CardFooter className="flex flex-col justify-center">
                          <dt className="font-medium text-gray-900">
                            Other Detail
                          </dt>
                          <CardBody>
                            <div className="flow-root">
                              <dl className="-my-3 divide-y divide-gray-100 text-sm">
                                <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                                  <dt className="font-medium text-gray-900">
                                    Neighbor Mac
                                  </dt>
                                  <dd className="text-gray-700 sm:col-span-2">
                                    {port.neighbor_mac}
                                  </dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                                  <dt className="font-medium text-gray-900">
                                    Neighbor Port
                                  </dt>
                                  <dd className="text-gray-700 sm:col-span-2">
                                    {port.neighbor_port_desc}
                                  </dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                                  <dt className="font-medium text-gray-900">
                                    Neighbor Name
                                  </dt>
                                  <dd className="text-gray-700 sm:col-span-2">
                                    {port.neighbor_system_name}
                                  </dd>
                                </div>
                              </dl>
                            </div>
                          </CardBody>
                        </CardFooter>
                      </Card>
                    }
                  >
                    <p key={port.port_id}>{`${port.id}`}</p>
                  </Tooltip>
                )}
              </div>
            ))}
        </div>
      </>
    );
  };

  const LadningPage = () => {
    return (
      <div className="grid mt-40 px-4 place-content-center">
        <h1 className="tracking-widest text-gray-500 uppercase">
          No Site Selected | SELECT A SITE TO VIEW Switches
        </h1>
      </div>
    );
  };

  const SwitchBox = () => {
    // Check if data already exists in deviceDetails array
    const [deviceDetails, setDeviceDetails] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
      <>
        {DeviceSummary.length === 0 && <LadningPage />}
        {loading && <LoadingModal loading={loading} />}
        {DeviceSummary.map((data) =>
          data.type === "switch" ? (
            <Accordion
              selectionMode="multiple"
              variant="splitted"
              className="mt-2 mb-2"
              key={data.id}
            >
              <AccordionItem
                className=""
                isDisabled={data.status === "disconnected" ? true : false}
                key={data.id}
                onPress={() => {
                  // Check if data already exists in deviceDetails Object

                  async function onGet(e) {
                    const dataExists = deviceDetails.some(
                      (detail) => detail.id === data.id
                    );

                    if (!dataExists) {
                      setLoading(true);
                      const detailurl = `https://netman2test.kiewitplaza.com/api/mist/site/${data.site_id}/device/${data.id}/details`;

                      async function GetSwitchDetails({ token }) {
                        const headers = new Headers();
                        const bearer = `Bearer ${token}`;

                        headers.append("Authorization", bearer);
                        headers.append("Content-Type", "application/json");

                        const options = {
                          method: "GET",
                          headers: headers,
                        };

                        return fetch(detailurl, options)
                          .then(async (response) => response.json())
                          .then((deviceDetails) => {
                            // Add device details to an array
                            setLoading(false);

                            setDeviceDetails((prevDeviceDetails) => [
                              ...prevDeviceDetails,
                              { ...deviceDetails, id: data.id },
                            ]);
                          })
                          .catch((error) => console.error(error));
                      }

                      GetSwitchDetails({
                        token: await instance
                          .acquireTokenSilent(request)
                          .then((response) => {
                            return response.accessToken;
                          }),
                      });
                    }
                  }

                  onGet();
                }}
                aria-label={data.name}
                startContent={
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/ios/50/AEAEAE/switch.png"
                    alt="switch"
                  />
                }
                subtitle={
                  <>
                    <Chip
                      size="md"
                      radius="sm"
                      variant="bordered"
                      className="capitalize m-1 "
                    >
                      IP: {data.ip}
                    </Chip>
                    <Chip
                      size="md"
                      radius="sm"
                      variant="bordered"
                      className="capitalize m-1 "
                    >
                      Serial: {data.serial}
                    </Chip>
                    <Chip
                      size="md"
                      variant="bordered"
                      radius="sm"
                      className="capitalize m-1 "
                    >
                      Mac: {data.mac}
                    </Chip>
                    {data.version ? (
                      <Chip
                        size="md"
                        variant="bordered"
                        radius="sm"
                        className="capitalize m-1 "
                      >
                        Version: {data.version}
                      </Chip>
                    ) : (
                      ""
                    )}
                  </>
                }
                title={
                  <Chip
                    size="md"
                    variant="flat"
                    radius="sm"
                    className="capitalize"
                    color={data.status === "connected" ? "success" : "danger"}
                  >
                    {data.name}
                  </Chip>
                }
              >
                {deviceDetails?.map((data1) =>
                  data1.custom?.vc_members?.map((member) =>
                    data.id === data1.id ? (
                      <Card key={member.id} className="m-3 bg-slate-800">
                        <CardBody className="text-center flex flex-row ">
                          <div className="mt-14 mr-1">
                            <Chip
                              size="md"
                              variant="flat"
                              className="capitalize"
                            >
                              {member.id}
                            </Chip>
                          </div>

                          {member.pics.map((pic) => (
                            <div key={pic.id} className="m-3 ">
                              <div key={pic.id} className="text-center">
                                {/* <p key={pic.pic_id}>{pic.id}</p> */}

                                <DisplayPorts
                                  key={pic.id}
                                  memberid={member.id}
                                  pic_id={pic.id}
                                  ports={pic.ports}
                                ></DisplayPorts>
                              </div>
                            </div>
                          ))}

                          <div className="flex flex-col ml-12 mt-6">
                            <Chip
                              size="md"
                              radius="sm"
                              variant="dot"
                              className="capitalize m-1"
                            >
                              Serial: {member.serial}
                            </Chip>
                            <Chip
                              size="md"
                              variant="dot"
                              radius="sm"
                              className="capitalize m-1"
                            >
                              Mac: {member.mac}
                            </Chip>
                            <Chip
                              size="md"
                              variant="dot"
                              radius="sm"
                              className="capitalize m-1"
                            >
                              Model: {member.model}
                            </Chip>
                          </div>
                        </CardBody>
                      </Card>
                    ) : (
                      ""
                    )
                  )
                )}
              </AccordionItem>
            </Accordion>
          ) : (
            ""
          )
        )}
      </>
    );
  };

  return (
    <>
      {/* <button onClick={onCreate}>Get Device List</button> */}

      <SwitchBox />
    </>
  );
};

export default Switch48p;
