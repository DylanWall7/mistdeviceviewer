import React from "react";

import {
  Card,
  CardBody,
  CheckboxGroup,
  Checkbox,
  Tooltip,
  cn,
  baseStyles,
  extendVariants,
  RadioGroup,
  Radio,
  CardFooter,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Switch,
  Button,
  Divider,
} from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { Switch48p } from "./Switch48p";

const switchData = [
  {
    id: "00000000-0000-0000-1000-d4996ca9873c",
    name: "KBMWASEASWA01",
    site_id: "3d6948e4-5773-428e-8703-cb1642a1b4ca",
    org_id: "7d3024bf-55a4-4964-8db1-d66ae92f85b9",
    created_time: 1674749483,
    modified_time: 1674749510,
    map_id: null,
    mac: "d4996ca9873c",
    serial: "NY3622511155",
    model: "EX3400-48P",
    hw_rev: "E",
    type: "switch",
    tag_uuid: "7d3024bf-55a4-4964-8db1-d66ae92f85b9",
    tag_id: 2874951,
    evpntopo_id: null,
    st_ip_base: "",
    deviceprofile_id: null,
    clients: [
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/29",
        mac: "a8537d83ed6e",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/21",
        mac: "58fcdb42e256",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/14",
        mac: "b4a4e32850b3",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/47",
        mac: "b8f01575b403",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/8",
        mac: "b4a4e3284e74",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/9",
        mac: "b4a4e329e7fe",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/0",
        mac: "6c504d5734a2",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/18",
        mac: "b4a4e32950ab",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/18",
        mac: "00249b48d62c",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/6",
        mac: "6c504d574ff1",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/11",
        mac: "b4a4e3d6724e",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/5",
        mac: "b4a4e3297149",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/19",
        mac: "fc9c984aabd4",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/26",
        mac: "a8537d83e79c",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/23",
        mac: "5838793f8984",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/6",
        mac: "00249b4a9741",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/32",
        mac: "a45d3663a782",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/28",
        mac: "a8537d83edeb",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/15",
        mac: "58bc277504a9",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/11",
        mac: "00249b4fbf5c",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/15",
        mac: "cc96e582aec2",
      },
      {
        hostname: "KBMWASEASWA01",
        device_mac: "d4996ca9873c",
        port_id: "ge-0/0/27",
        mac: "a8537d83e8be",
      },
    ],
    ports: [
      {
        tx_pkts: 290554,
        rx_pkts: 109248,
        rx_bytes: 55534591,
        port_id: "ge-0/0/23",
        up: true,
        tx_bytes: 153121958,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/46",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/25",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 381629,
        rx_pkts: 6520265,
        rx_bytes: 1247061663,
        port_id: "ge-0/0/27",
        up: true,
        tx_bytes: 201118460,
      },
      {
        tx_pkts: 392702,
        rx_pkts: 3302707,
        rx_bytes: 793895437,
        port_id: "ge-0/0/29",
        up: true,
        tx_bytes: 206953931,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/40",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/42",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 356952,
        rx_pkts: 4947,
        rx_bytes: 617793,
        port_id: "ge-0/0/21",
        up: true,
        tx_bytes: 188111901,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/44",
        up: false,
        tx_bytes: 0,
      },

      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/13",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/34",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 290692,
        rx_pkts: 334171,
        rx_bytes: 74404112,
        port_id: "ge-0/0/15",
        up: true,
        tx_bytes: 153135836,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/36",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 1,
        rx_pkts: 1,
        rx_bytes: 60,
        port_id: "ge-0/0/17",
        up: false,
        tx_bytes: 359,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/38",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 290647,
        rx_pkts: 63326,
        rx_bytes: 4066764,
        port_id: "ge-0/0/19",
        up: true,
        tx_bytes: 153132740,
      },
      {
        tx_pkts: 290531,
        rx_pkts: 448205,
        rx_bytes: 76640573,
        port_id: "ge-0/0/6",
        up: true,
        tx_bytes: 152528775,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/4",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/30",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 290510,
        rx_pkts: 201926,
        rx_bytes: 71740233,
        port_id: "ge-0/0/8",
        up: true,
        tx_bytes: 152517750,
      },
      {
        tx_pkts: 290547,
        rx_pkts: 145833,
        rx_bytes: 44277085,
        port_id: "ge-0/0/11",
        up: true,
        tx_bytes: 153118269,
      },
      {
        tx_pkts: 290580,
        rx_pkts: 335,
        rx_bytes: 22466,
        port_id: "ge-0/0/32",
        up: true,
        tx_bytes: 153135637,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/2",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 290573,
        rx_pkts: 134393,
        rx_bytes: 43005670,
        port_id: "ge-0/0/0",
        up: true,
        tx_bytes: 152550825,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/24",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/45",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 439311,
        rx_pkts: 2453952,
        rx_bytes: 643509677,
        port_id: "ge-0/0/26",
        up: true,
        tx_bytes: 231516874,
      },
      {
        tx_pkts: 58996272,
        rx_pkts: 8341863,
        rx_bytes: 1455548072,
        port_id: "ge-0/0/47",
        up: true,
        tx_bytes: 19240432662,
      },
      {
        tx_pkts: 433730,
        rx_pkts: 728797,
        rx_bytes: 176074420,
        port_id: "ge-0/0/28",
        up: true,
        tx_bytes: 228575687,
      },
      {
        tx_pkts: 108,
        rx_pkts: 99,
        rx_bytes: 7938,
        port_id: "ge-0/0/20",
        up: false,
        tx_bytes: 56916,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/41",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/22",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/43",
        up: false,
        tx_bytes: 0,
      },

      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/12",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/35",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 290526,
        rx_pkts: 158514,
        rx_bytes: 46885490,
        port_id: "ge-0/0/14",
        up: true,
        tx_bytes: 153107202,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/37",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 1,
        rx_bytes: 60,
        port_id: "ge-0/0/16",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/39",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 290578,
        rx_pkts: 193990,
        rx_bytes: 54065748,
        port_id: "ge-0/0/18",
        up: true,
        tx_bytes: 153134606,
      },
      {
        tx_pkts: 290542,
        rx_pkts: 134394,
        rx_bytes: 42199626,
        port_id: "ge-0/0/5",
        up: true,
        tx_bytes: 152534550,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/3",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 290959,
        rx_pkts: 1090081,
        rx_bytes: 150095131,
        port_id: "ge-0/0/9",
        up: true,
        tx_bytes: 152580393,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/31",
        up: false,
        tx_bytes: 0,
      },

      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/7",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/10",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/33",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/1",
        up: false,
        tx_bytes: 0,
      },
    ],
  },
  {
    id: "00000000-0000-0000-1000-58e4346eaa93",
    name: "KBMWASEASWA02",
    site_id: "3d6948e4-5773-428e-8703-cb1642a1b4ca",
    org_id: "7d3024bf-55a4-4964-8db1-d66ae92f85b9",
    created_time: 1674748575,
    modified_time: 1674748598,
    map_id: null,
    mac: "58e4346eaa93",
    serial: "NW3622341254",
    model: "EX3400-24P",
    hw_rev: "E",
    type: "switch",
    tag_uuid: "7d3024bf-55a4-4964-8db1-d66ae92f85b9",
    tag_id: 2800286,
    evpntopo_id: null,
    st_ip_base: "",
    deviceprofile_id: null,
    clients: [
      {
        hostname: "KBMWASEASWA02",
        device_mac: "58e4346eaa93",
        port_id: "ge-0/0/23",
        mac: "b8f01575b403",
      },
      {
        hostname: "KBMWASEASWA02",
        device_mac: "58e4346eaa93",
        port_id: "ge-0/0/12",
        mac: "a8537d83eb2f",
      },
    ],
    ports: [
      {
        tx_pkts: 70131888,
        rx_pkts: 19247597,
        rx_bytes: 3904598541,
        port_id: "ge-0/0/23",
        up: true,
        tx_bytes: 17791817992,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/20",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/21",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/22",
        up: false,
        tx_bytes: 0,
      },

      {
        tx_pkts: 350740,
        rx_pkts: 3502576,
        rx_bytes: 1183926133,
        port_id: "ge-0/0/12",
        up: true,
        tx_bytes: 184827787,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/13",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/14",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/15",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/16",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/17",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/18",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/19",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/5",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/6",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/3",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/4",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/9",
        up: false,
        tx_bytes: 0,
      },

      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/7",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/10",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/8",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/11",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/1",
        up: false,
        tx_bytes: 0,
      },
      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/2",
        up: false,
        tx_bytes: 0,
      },

      {
        tx_pkts: 0,
        rx_pkts: 0,
        rx_bytes: 0,
        port_id: "ge-0/0/0",
        up: false,
        tx_bytes: 0,
      },
    ],
  },
];

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

const clientData = switchData.map((switchData) => switchData.clients);
console.log(clientData);

// const ports2 = switchData.ports.map((port) => port);

const ports = switchData.map((switchData) => switchData.ports);

//sort ports by port_id value with all even ports first then odd ports after

//convert port_id to number
// ports.forEach((port) => {
//   port.port_id = parseInt(port.port_id.replace(/\D/g, ""));
// });

const SwitchCard = ({ setGroupSelected, groupSelected }, index) => {
  //convert port_id to number in switchData

  switchData.forEach((switchData) => {
    switchData.ports.forEach((port) => {
      port.port_id = parseInt(port.port_id.toString().replace(/\D/g, ""));
    });
  }); //sort ports by port_id value with all even ports first then odd ports after

  switchData.forEach((switchData) => {
    switchData.ports.sort((a, b) => a.port_id - b.port_id);
  });

  //now sort all ports by port_id value with all even ports first then odd ports after and merge them

  switchData.forEach((switchData) => {
    //sort all ports even numbers first then odd numbers
    switchData.ports.sort((a, b) => {
      const aIsEven = a.port_id % 2 === 0;
      const bIsEven = b.port_id % 2 === 0;
      if (aIsEven && !bIsEven) {
        return -1;
      } else if (!aIsEven && bIsEven) {
        return 1;
      } else {
        return a.port_id - b.port_id;
      }
    });
  });

  const [isSelected, setIsSelected] = React.useState(false);

  const generateRandomKey =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  const ClientIcon = (
    <svg
      fill="#000000"
      height="200px"
      width="200px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 297 297"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M194.388,69.011c-3.922,3.917-3.924,10.271-0.005,14.192c26.363,26.382,26.347,69.324-0.038,95.724 c-3.918,3.923-3.916,10.275,0.004,14.194c1.961,1.958,4.527,2.938,7.096,2.938c2.569,0,5.139-0.982,7.099-2.942 c34.202-34.224,34.219-89.895,0.037-124.103C204.664,65.095,198.308,65.091,194.388,69.011z"></path>{" "}
          <path d="M156.868,97.801c-3.921,3.916-3.923,10.271-0.005,14.191c10.51,10.519,10.509,27.633-0.002,38.151 c-3.918,3.92-3.916,10.275,0.005,14.193c1.959,1.959,4.527,2.937,7.094,2.937c2.57,0,5.14-0.98,7.099-2.942 c18.329-18.341,18.33-48.186,0.002-66.526C167.144,93.882,160.788,93.88,156.868,97.801z"></path>{" "}
          <path d="M253.01,24.56c-3.918-3.922-10.272-3.924-14.192-0.006c-3.922,3.918-3.924,10.273-0.005,14.193 c50.854,50.887,50.832,133.707-0.052,184.618c-3.919,3.92-3.917,10.275,0.004,14.193c1.96,1.958,4.526,2.938,7.095,2.938 c2.568,0,5.139-0.982,7.099-2.942C311.661,178.82,311.684,83.27,253.01,24.56z"></path>{" "}
          <path d="M73.015,195.793c25.803-1.778,46.258-23.349,46.258-49.627c0-27.437-22.297-49.757-49.704-49.757 c-27.407,0-49.705,22.32-49.705,49.757c0,26.276,20.454,47.847,46.259,49.627c-19.32,0.743-36.335,7.723-48.193,19.86 C5.747,228.122-0.444,245.386,0.025,265.581c0.127,5.449,4.581,9.803,10.033,9.803H129.07c5.452,0,9.907-4.354,10.033-9.805 c0.469-20.196-5.724-37.462-17.907-49.931C109.339,203.514,92.331,196.536,73.015,195.793z M39.936,146.166 c0-16.367,13.293-29.685,29.633-29.685c16.34,0,29.632,13.317,29.632,29.685c0,16.37-13.292,29.688-29.632,29.688 C53.229,175.854,39.936,162.536,39.936,146.166z M20.559,255.311c1.307-10.39,5.233-18.983,11.729-25.63 c8.75-8.956,21.99-13.888,37.279-13.888c15.288,0,28.524,4.93,37.272,13.884c6.495,6.646,10.423,15.242,11.729,25.634H20.559z"></path>{" "}
        </g>
      </g>
    </svg>
  );

  // const DisplayCheckboxBasedonModel = () => {

  //   if (switchData.model === "EX3400-24P") {
  //     return (
  //       <>
  //         <MyCheckBox
  //           color="success"

  //           isDisabled={port.up === false}
  //           isInvalid={port.rx_pkts === 1}
  //           checked={groupSelected.includes(port.port_id)}
  //           onChange={() => {
  //             if (groupSelected.includes(port.port_id)) {
  //               setGroupSelected(
  //                 groupSelected.filter((item) => item !== port.port_id)
  //               );

  //               console.log(groupSelected);
  //             } else {
  //               setGroupSelected([...groupSelected, port.port_id]);
  //               console.log(groupSelected);
  //             }
  //           }}

  //         ></MyCheckBox>
  //       </>
  //     )
  //   }
  //   else if (switchData.model === "EX3400-48P") {
  //     return (
  //       <>
  //         <MyCheckBox
  //           color="success"

  //           isDisabled={port.up === false}
  //           isInvalid={port.rx_pkts === 1}
  //           checked={groupSelected.includes(port.port_id)}
  //           onChange={() => {
  //             if (groupSelected.includes(port.port_id)) {
  //               setGroupSelected(
  //                 groupSelected.filter((item) => item !== port.port_id)
  //               );

  //               console.log(groupSelected);
  //             } else {
  //               setGroupSelected([...groupSelected, port.port_id]);
  //               console.log(groupSelected);
  //             }
  //           }

  //           }

  //         ></MyCheckBox>
  //       </>
  //     )
  //   }
  //   else {
  //     return (
  //       <>
  //         <MyCheckBox
  //           color="success"

  //           isDisabled={port.up === false}
  //           isInvalid={port.rx_pkts === 1}
  //           checked={groupSelected.includes(port.port_id)}
  //           onChange={() => {
  //             if (groupSelected.includes(port.port_id)) {
  //               setGroupSelected(
  //                 groupSelected.filter((item) => item !== port.port_id)
  //               );

  //               console.log(groupSelected);
  //             } else {
  //               setGroupSelected([...groupSelected, port.port_id]);
  //               console.log(groupSelected);
  //             }
  //           }

  //           }

  //         ></MyCheckBox>
  //       </>
  //     )
  //   }
  // }

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

  //   {
  //     /* <Select
  //   isDisabled={isLoading}
  //   size="small"
  //   placeholder="SiteCode"
  //   variant="bordered"
  //   bordered={false}
  //   radius="sm"
  //   label="Select a Site"
  //   clearable
  //   onSelectionChange={(value) => setSiteId(value)}
  // >
  //   {SortSiteList.map((site) => (
  //     <SelectItem
  //       key={site.id}
  //       value={JSON.stringify(site.id)}
  //       label={site.name}
  //     >
  //       {site.name}
  //     </SelectItem>
  //   ))}
  // </Select> */
  //   }

  const NoClientIcon = (
    <svg fill="#d61f1f" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M11.477 3.11a6 6 0 0 0-8.367 8.367l8.367-8.368zm1.414 1.413l-8.368 8.368a6 6 0 0 0 8.367-8.367zM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0z"
          fill-rule="evenodd"
        ></path>
      </g>
    </svg>
  );

  const CreateClass = () => {
    if (switchData.ports > 24) {
      return "max-w-[930px] ";
    } else if (switchData.ports < 24) {
      return "max-w-[1030px] ";
    } else {
      return " ";
    }
  };

  console.log(CreateClass());

  return (
    <>
      <Switch
        color="success"
        size="lg"
        startContent={ClientIcon}
        endContent={NoClientIcon}
        className="m-5"
        isSelected={isSelected}
        onValueChange={() => {
          setIsSelected(!isSelected);
        }}
        key={switchData.name}
      >
        Show Connected Clients
      </Switch>
      {switchData.map((switchData) => (
        <Card className=" flex m-5 ">
          <p key={switchData.name} className="text-center mt-1">
            {switchData.name}
            <br />
            {switchData.model}
          </p>

          <CardBody className={CreateClass()}>
            <div className="flex flex-row ">
              {switchData.ports
                .filter((port) => port.port_id % 2 === 0)
                .map((port) => (
                  <div className="m-2">
                    <MyCheckBox
                      className="justify-content-center"
                      color="success"
                      isDisabled={port.up === false}
                      isInvalid={port.rx_pkts === 1}
                      checked={groupSelected.includes(port.port_id)}
                      onChange={() => {
                        if (groupSelected.includes(port.port_id)) {
                          setGroupSelected(
                            groupSelected.filter(
                              (item) => item !== port.port_id
                            )
                          );

                          console.log(groupSelected);
                        } else {
                          setGroupSelected([...groupSelected, port.port_id]);
                          console.log(groupSelected);
                        }
                      }}
                    ></MyCheckBox>
                    <p>{port.port_id}</p>
                  </div>
                ))}
            </div>
            <Divider className="my-1" />
            <div className="flex flex-row">
              {switchData.ports
                .filter((port) => port.port_id % 2 !== 0)
                .map((port) => (
                  <div className="m-2">
                    <MyCheckBox
                      color="success"
                      isDisabled={port.up === false}
                      isInvalid={port.rx_pkts === 1}
                      checked={groupSelected.includes(port.port_id)}
                      onChange={() => {
                        if (groupSelected.includes(port.port_id)) {
                          setGroupSelected(
                            groupSelected.filter(
                              (item) => item !== port.port_id
                            )
                          );

                          console.log(groupSelected);
                        } else {
                          setGroupSelected([...groupSelected, port.port_id]);
                          console.log(groupSelected);
                        }
                      }}
                    ></MyCheckBox>
                    <p>{port.port_id}</p>
                  </div>
                ))}
            </div>
            {/* <Switch48p /> */}
          </CardBody>

          <CardFooter>
            {isSelected ? (
              <Table aria-label="Example static collection table">
                <TableHeader>
                  <TableColumn>PORT</TableColumn>
                  <TableColumn>CLIENT MAC</TableColumn>
                  <TableColumn>SWITCH NAME</TableColumn>
                </TableHeader>
                <TableBody>
                  {switchData.clients.map((client) => (
                    <TableRow key={client.mac}>
                      <TableCell>{client.port_id}</TableCell>
                      <TableCell>{client.mac}</TableCell>
                      <TableCell>{client.hostname}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : null}
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

//convert port_id to number
// ports.forEach((port) => {
//   port.port_id = parseInt(port.port_id.replace(/\D/g, ""));
// });
// const evenPorts = ports.filter((port) => port.port_id % 2 === 0);

// const oddPorts = ports.filter((port) => port.port_id % 2 !== 0);

// const sortedEvenPorts = evenPorts.sort((a, b) => a.port_id - b.port_id);

// const sortedOddPorts = oddPorts.sort((a, b) => a.port_id - b.port_id);

// const sortedPorts = sortedEvenPorts.concat(sortedOddPorts);
// console.log(sortedPorts);

export const SwitchPanel = ({}) => {
  const [groupSelected, setGroupSelected] = React.useState([]);

  return (
    <>
      <SwitchCard
        groupSelected={groupSelected}
        setGroupSelected={setGroupSelected}
      >
        <Card className="max-w-[930px] justify-center ">
          <CardBody className="max-w-[930px]"></CardBody>
        </Card>
      </SwitchCard>
    </>
  );
};

//  <Card className="max-w-[930px] justify-center mt-1">
//    <p className="text-center">Selected Ports</p>
//    <div className="flex flex-row">
//      <CardBody className="max-w-[930px] flex flex-row">
//        <Tooltip
//          content={
//            <div className="px-1 py-2">
//              <div className="text-small font-bold"></div>
//              <div className="text-tiny">
//                {clientData.map((client) => {
//                  return (
//                    <div className="text-tiny">
//                      Device Connected MAC: {client.mac}
//                      <br />
//                    </div>
//                  );
//                })}
//              </div>
//            </div>
//          }
//        >
//          <Chip>{groupSelected}</Chip>
//        </Tooltip>
//      </CardBody>
//    </div>
//  </Card>;

// {/* <AccordionItem
//   className=""
//   isDisabled={data.status === "disconnected" ? true : false}
//   key={data.id}
//   onPress={() => {
//     // Check if data already exists in deviceDetails Object

//     async function onGet(e) {
//       const dataExists = deviceDetails.some((detail) => detail.id === data.id);

//       if (!dataExists) {
//         setLoading(true);
//         const detailurl = `https://netman2test.kiewitplaza.com/api/mist/site/${data.site_id}/device/${data.id}/details`;

//         async function GetSwitchDetails({ token }) {
//           const headers = new Headers();
//           const bearer = `Bearer ${token}`;

//           headers.append("Authorization", bearer);
//           headers.append("Content-Type", "application/json");

//           const options = {
//             method: "GET",
//             headers: headers,
//           };

//           return fetch(detailurl, options)
//             .then(async (response) => response.json())
//             .then((deviceDetails) => {
//               // Add device details to an array
//               setLoading(false);
//               setDeviceDetails((prevDeviceDetails) => [
//                 ...prevDeviceDetails,
//                 { ...deviceDetails, id: data.id },
//               ]);
//             })
//             .catch((error) => console.error(error));
//         }

//         GetSwitchDetails({
//           token: await instance.acquireTokenSilent(request).then((response) => {
//             return response.accessToken;
//           }),
//         });
//       }
//     }

//     onGet();
//   }}
//   aria-label={data.name}
//   startContent={
//     <img
//       width="50"
//       height="50"
//       src="https://img.icons8.com/ios/50/AEAEAE/switch.png"
//       alt="switch"
//     />
//   }
//   subtitle={
//     <>
//       <Chip
//         size="md"
//         radius="sm"
//         variant="bordered"
//         className="capitalize m-1 "
//       >
//         Serial: {data.serial}
//       </Chip>
//       <Chip
//         size="md"
//         variant="bordered"
//         radius="sm"
//         className="capitalize m-1 "
//       >
//         Mac: {data.mac}
//       </Chip>
//       {data.version ? (
//         <Chip
//           size="md"
//           variant="bordered"
//           radius="sm"
//           className="capitalize m-1 "
//         >
//           Version: {data.version}
//         </Chip>
//       ) : (
//         ""
//       )}
//     </>
//   }
//   title={
//     <Chip
//       size="md"
//       variant="flat"
//       radius="sm"
//       className="capitalize"
//       color={data.status === "connected" ? "success" : "danger"}
//     >
//       {data.name}
//     </Chip>
//   }
// >
//   {deviceDetails?.map((data1) =>
//     data1.vc_members.map((member) =>
//       data.id === data1.id ? (
//         <Card key={member.id} className="m-3 bg-slate-800">
//           <CardBody className="text-center flex flex-row ">
//             <div className="mt-14 mr-1">
//               <Chip size="md" variant="flat" className="capitalize">
//                 {member.id}
//               </Chip>
//             </div>

//             {member.pics.map((pic) => (
//               <div key={pic.pic_id} className="m-3 ">
//                 <div className="text-center">
//                   {/* <p key={pic.pic_id}>{pic.id}</p> */}

//                   <DisplayPorts
//                     memberid={member.id}
//                     pic_id={pic.id}
//                     ports={pic.ports}
//                   ></DisplayPorts>
//                 </div>
//               </div>
//             ))}

//             <div className="flex flex-col ml-12 mt-6">
//               <Chip
//                 size="md"
//                 radius="sm"
//                 variant="dot"
//                 className="capitalize m-1"
//               >
//                 Serial: {member.serial}
//               </Chip>
//               <Chip
//                 size="md"
//                 variant="dot"
//                 radius="sm"
//                 className="capitalize m-1"
//               >
//                 Mac: {member.mac}
//               </Chip>
//               <Chip
//                 size="md"
//                 variant="dot"
//                 radius="sm"
//                 className="capitalize m-1"
//               >
//                 Model: {member.model}
//               </Chip>
//             </div>
//           </CardBody>
//         </Card>
//       ) : (
//         console.log("No data")
//       )
//     )
//   )}
// </AccordionItem>
// export default SwitchPanel; */}
