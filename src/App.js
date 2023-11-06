import React, { useState, useEffect } from "react";
import { PageLayout } from "./components/PageLayout";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";

import { GizmoRequest } from "./authConfig";

import { Card } from "@nextui-org/react";

import { loginRequest } from "./authConfig";

import { callMsGraph, callDHCP } from "./graph";

import { NextUIProvider } from "@nextui-org/react";

import { Tabs, Tab } from "@nextui-org/react";
import { AccessPoints } from "./components/AccessPoints";
import { Routers } from "./components/Routers";
import { Select, SelectItem } from "@nextui-org/react";

import { Switch48p } from "./components/Switch48p";

import RouterLoadingModal from "./components/RouterLoadingModal";
import SwitchLoadingModal from "./components/SwitchLoadingModal";
import APLoadingModal from "./components/APLoadingModal";
import { SignInButton } from "./components/SignInButton";
import { DeviceSummary } from "./components/DeviceSummary";
import SumLoadingModal from "./components/SumLoadingModal";

function App() {
  const RouterIcon = () => (
    <svg
      aria-hidden="true"
      focusable="false"
      height="24"
      role="presentation"
      width="24"
      fill="#243a94"
      viewBox="0 -127 1278 1278"
    >
      <path
        d="M186.97049 390.020858c249.283591-143.926213 654.058848-143.926213 903.342438 0 249.283591 143.921015 249.283591 377.621133 0 521.542148-249.283591 143.926213-654.058848 143.926213-903.342438 0-249.288789-143.921015-249.288789-377.621133 0-521.542148z"
        fill="#4467AE"
      ></path>
      <path
        d="M0.005198 368.719633h1277.273022v282.072299H0.005198z"
        fill="#4467AE"
      ></path>
      <path
        d="M186.97049 107.948559c249.283591-143.926213 654.058848-143.926213 903.342438 0 249.283591 143.921015 249.283591 377.621133 0 521.542148-249.283591 143.926213-654.058848 143.926213-903.342438 0-249.288789-143.921015-249.288789-377.621133 0-521.542148z"
        fill="#6D8ACA"
      ></path>
      <path
        d="M436.243685 524.263279l57.323062 33.095388-164.5621-6.819719-11.814955-95.008246 57.323063 33.095388 148.037797-85.475194 61.73093 35.642386-148.037797 85.469997zM846.320857 216.221989l-57.323063-33.09019 164.562101 6.819719 11.814954 95.008246-57.323062-33.095388-148.037797 85.469996-61.73093-35.637188 148.037797-85.475195zM445.418078 199.744468l57.323062-33.09019-164.5621 6.819718-11.814955 95.008246 57.323063-33.095388 148.042995 85.469997 61.730929-35.637189L445.418078 199.744468zM865.501316 513.560686l-57.323063 33.095388 164.5621-6.819718 11.814955-95.008246-57.323062 33.095388-148.037797-85.469997-61.73093 35.637189 148.037797 85.469996z"
        fill="#FFFFFF"
      ></path>
    </svg>
  );

  const SwitchIcon = () => (
    <svg
      aria-hidden="true"
      focusable="false"
      height="24"
      role="presentation"
      width="24"
      fill="#243a94"
      viewBox="0 -166 1356 1356"
    >
      <path d="M0 389.700161h1353.843886v242.365139H0z" fill="#4467AE"></path>
      <path
        d="M711.710196 249.301199c-19.198737-11.087447-48.289414-12.293043-64.920585-2.693674L11.223644 613.552592c-16.626126 9.599369-14.537772 26.397002 4.660965 37.48445l626.244037 361.557718c19.203781 11.087447 48.294458 12.293043 64.920585 2.693674l635.565967-366.945067c16.631171-9.599369 14.542816-26.397002-4.660965-37.484449L711.710196 249.301199z"
        fill="#4467AE"
      ></path>
      <path
        d="M711.710196 9.170701c-19.198737-11.082403-48.289414-12.293043-64.920585-2.68863L11.223644 373.427138c-16.626126 9.599369-14.537772 26.391958 4.660965 37.479405l626.244037 361.562763c19.203781 11.087447 48.294458 12.293043 64.920585 2.693674l635.565967-366.945067c16.631171-9.604413 14.542816-26.397002-4.660965-37.48445L711.710196 9.170701z"
        fill="#6D8ACA"
      ></path>
      <path
        d="M296.203321 413.751548l-60.274753 34.800863 12.424196-99.908088 173.04085-7.173044-60.274753 34.800864 187.139765 108.0446-64.915541 37.479405L296.203321 413.751548zM533.21642 276.913886l-60.274752 34.800864 12.424196-99.908089 173.040849-7.173043-60.274752 34.800863 187.139765 108.0446-64.915541 37.474361-187.139765-108.039556z"
        fill="#FFFFFF"
      ></path>
      <path
        d="M1057.640566 367.888459l60.274752-34.800864-12.424195 99.908089-173.045895 7.173043 60.279797-34.800863-187.139764-108.0446 64.91554-37.479405 187.139765 108.0446zM820.622422 504.731164l60.279797-34.800863-12.424196 99.908089-173.045894 7.173043 60.279797-34.805908-187.139765-108.039556 64.91554-37.479405 187.134721 108.0446z"
        fill="#FFFFFF"
      ></path>
    </svg>
  );

  const APIcon = () => (
    <svg
      aria-hidden="true"
      focusable="false"
      height="24"
      role="presentation"
      width="24"
      fill="#243a94"
      viewBox="0 0 346.311 346.311"
    >
      <path d="M182.852,289.008c-2.083-31.938-15.606-62.201-38.077-85.219c-22.433-22.977-52.293-37.223-84.081-40.113 c-0.854-0.076-1.704-0.117-2.523-0.117c-7.166,0-11.276,3.063-11.276,8.398v16.504c0,8.73,6.758,9.09,10.006,9.264 c0.419,0.023,0.811,0.043,1.16,0.076c48.38,4.635,86.442,43.156,90.504,91.592l0.036,0.463c0.217,2.846,0.724,9.51,8.743,9.51 h17.334c2.985,0,5.21-0.771,6.61-2.293c2.047-2.225,1.788-5.338,1.616-7.399C182.884,289.437,182.866,289.215,182.852,289.008z"></path>
      <path d="M203.337,146.185c-37.652-38.457-87.815-61.477-141.246-64.822c-0.352-0.021-0.732-0.049-1.135-0.08 c-1.227-0.09-2.619-0.193-4.068-0.193c-6.631,0-9.994,2.465-9.994,7.328v18.293c0,7.938,9.289,8.559,14.279,8.893l0.958,0.066 c91.745,6.85,164.294,81.326,168.754,173.236c0.139,2.859,0.509,10.459,7.958,10.459h19.333c1.973,0,3.577-0.629,4.768-1.867 c2.188-2.277,2.306-5.898,2.204-8.424C262.999,235.443,241.048,184.699,203.337,146.185z"></path>
      <path d="M346.283,286.422c-2.803-73.885-32.938-143.805-84.852-196.883C209.599,36.547,140.521,4.863,66.923,0.33l-0.77-0.049 c-1.588-0.102-3.564-0.229-5.589-0.229c-9.071,0-13.671,2.828-13.671,8.408v17.25c0,8.715,9.939,8.785,16.518,8.832 c1.332,0.008,2.591,0.018,3.623,0.09c134.23,9.412,239.567,117.92,245.024,252.397c0.013,0.311,0.019,0.65,0.025,1.008 c0.067,3.678,0.206,11.328,9.425,11.328h16c2.501,0,4.523-0.783,6.012-2.33C346.25,294.201,346.404,289.619,346.283,286.422z"></path>
    </svg>
  );

  const url = "https://netman2test.kiewitplaza.com/api/mist/site/summary";

  const [siteList, setSiteList] = useState([]);
  const [siteDeviceSummary, setSiteDeviceSummary] = useState([]);
  const [siteId, setSiteId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const url1 = `https://netman2test.kiewitplaza.com/api/mist/site/${siteId?.currentKey}/devicesummary`;

  const { instance, accounts } = useMsal();
  const request = {
    ...GizmoRequest,
    account: accounts[0],
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        GetAllMistSites({
          token: await instance.acquireTokenSilent(request).then((response) => {
            return response.accessToken;
          }),
        });
      } catch (err) {
        console.log({ err });
      }
    })();
  }, [accounts.length === 0]);

  async function GetAllMistSites({ token }) {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;

    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");

    const options = {
      method: "GET",
      headers: headers,
    };

    return fetch(url, options)
      .then(async (response) => {
        let text = await response.json();

        setSiteList(text);
        setIsLoading(false);
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  }

  async function GetDeviceSummary({ token }) {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;

    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");

    const options = {
      method: "GET",
      headers: headers,
    };

    return fetch(url1, options)
      .then(async (response) => {
        let text = await response.json();

        JSON.stringify(text);
        setSiteDeviceSummary(text);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    if (siteId) {
      (async () => {
        try {
          setLoading(true);
          // await async "fetchBooks()" function
          GetDeviceSummary({
            token: await instance
              .acquireTokenSilent(request)
              .then((response) => {
                return response.accessToken;
              }),
          });
        } catch (err) {
          console.log("Error occured ");
        }
      })();
    }
  }, [siteId]);

  const SortSiteList = siteList.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
  });

  return (
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <PageLayout>
          <AuthenticatedTemplate>
            {/* <div className="px-4 py-3 text-black bg-yellow-500">
            <p className="text-sm font-medium text-center">
              This tool is currently under development. Modifications will be
              made frequently and you may encounter bugs.
            </p>
          </div> */}

            <div className=" flex justify-end m-4">
              <div className="flex justify-center w-3/12 ">
                <Select
                  isDisabled={isLoading}
                  size="small"
                  placeholder="SiteCode"
                  variant="bordered"
                  bordered={false}
                  radius="sm"
                  label="Select a Site"
                  clearable
                  onSelectionChange={(value) => setSiteId(value)}
                >
                  {SortSiteList.map((site) => (
                    <SelectItem
                      key={site.id}
                      value={JSON.stringify(site.id)}
                      label={site.name}
                    >
                      {site.name}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>

            <Tabs
              className="flex justify-center"
              aria-label="Options"
              color="success"
              variant="bordered"
            >
              <Tab
                key="summary"
                className="flex justify-center"
                title={
                  <div className="flex items-center space-x-2">
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/ios/50/949494/summary-list.png"
                      alt="summary-list"
                    />
                    <span> Summary</span>
                  </div>
                }
              >
                <SumLoadingModal loading={loading} />
                <DeviceSummary DeviceSummaryData={siteDeviceSummary} />
              </Tab>
              <Tab
                key="routers"
                title={
                  <div className="flex items-center space-x-2">
                    {/* <RouterIcon /> */}
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/color/48/network-gateway.png"
                      alt="network-gateway"
                    />
                    <span>Router's</span>
                  </div>
                }
              >
                <RouterLoadingModal loading={loading} />
                <Routers DeviceSummary={siteDeviceSummary} />
              </Tab>
              <Tab
                key="music"
                title={
                  <div className="flex items-center space-x-2">
                    {/* <SwitchIcon /> */}
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/color/48/internet-hub.png"
                      alt="internet-hub"
                    />
                    <span>Switches</span>
                  </div>
                }
              >
                <SwitchLoadingModal loading={loading} />
                <Switch48p DeviceSummary={siteDeviceSummary}></Switch48p>
                {/* <SwitchPanel
                  DeviceSummary={siteDeviceSummary}
                  className="flex-row"
                ></SwitchPanel> */}
              </Tab>
              <Tab
                key="videos"
                title={
                  <div className="flex items-center space-x-2">
                    <APIcon />
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/ios/50/237EE6/wi-fi-connected.png"
                      alt="wi-fi-connected"
                    />
                    <span>Access Points</span>
                  </div>
                }
              >
                <APLoadingModal loading={loading} />
                <AccessPoints DeviceSummary={siteDeviceSummary} />
              </Tab>
            </Tabs>

            <ProfileContent />
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <div className="grid mt-40 px-4 place-content-center">
              <div className="text-center  ">
                <div className="flex justify-center">
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-caution-map-and-navigation-flaticons-flat-flat-icons.png"
                    alt="external-caution-map-and-navigation-flaticons-flat-flat-icons"
                  />
                </div>

                <p className="text-2xl font-bold tracking-tight text-gray-400 sm:text-4xl">
                  You are not signed in
                </p>

                <p className="mt-4 text-gray-500">
                  Please sign in to view devices.{" "}
                </p>

                <SignInButton></SignInButton>
              </div>
            </div>
          </UnauthenticatedTemplate>
        </PageLayout>
      </main>
    </NextUIProvider>
  );
}

function ProfileContent() {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);
  const [dhcpData, setDhcpData] = useState(null);

  const name = accounts[0] && accounts[0].name;

  function RequestProfileData() {
    const request = {
      ...loginRequest,
      account: accounts[0],
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance
      .acquireTokenSilent(request)
      .then((response) => {
        callMsGraph(response.accessToken).then((response) =>
          setGraphData(response)
        );
      })
      .catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
          callMsGraph(response.accessToken).then((response) =>
            setGraphData(response)
          );
        });
      });
  }

  function RequestDhcpData() {
    const request = {
      ...loginRequest,
      account: accounts[0],
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance
      .acquireTokenSilent(request)
      .then((response) => {
        callDHCP(response.accessToken).then((response) =>
          setDhcpData(response)
        );
      })
      .catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
          callDHCP(response.accessToken).then((response) =>
            setDhcpData(response)
          );
        });
      });
  }

  return (
    <>
      <Card textAlign="left" px={6}>
        <h1 as="h2" size="lg" mt={0} mb={125}></h1>
      </Card>
      {/* {graphData ? (
        <ProfileData graphData={graphData} dhcpData={dhcpData} />
      ) : (
        <Button
          variant="secondary"
          onClick={() => {
            RequestProfileData();
            RequestDhcpData();
          }}
        >
          Request Profile Information
        </Button>
      )} */}
    </>
  );
}

export default App;
