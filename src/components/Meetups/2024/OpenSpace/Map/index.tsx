/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import classNames from "classnames";

type OpenSpaceMapProps = {
  event: any;
  events?: any[];
  scene?: number;
};

export default function OpenSpaceMap({ event, events = [], scene = 1 }: OpenSpaceMapProps) {
  const lobbySelectedClassName = classNames(
    "group-hover:fill-[#03A9F4] group-hover:stroke-[#03A9F4] transition-all duration-300 ease-in-out",
    {
      "fill-[#03A9F4] stroke-[#03A9F4]": event?.location === "LOBBY",
    }
  );

  const centroSelectedClassName = classNames(
    "group-hover:fill-[#FFEB3B] group-hover:stroke-[#FFEB3B] transition-all duration-300 ease-in-out",
    {
      "fill-[#FFEB3B] stroke-[#FFEB3B]": event?.location === "CENTRO",
    }
  );

  const ventanaSelectedClassName = classNames(
    "group-hover:fill-[#FF9800] group-hover:stroke-[#FF9800] transition-all duration-300 ease-in-out",
    {
      "fill-[#FF9800] stroke-[#FF9800]": event?.location === "VENTANA",
    }
  );

  const cuevaSelectedClassName = classNames(
    "group-hover:fill-[#74B276] group-hover:stroke-[#74B276] transition-all duration-300 ease-in-out",
    {
      "fill-[#74B276] stroke-[#74B276]": event?.location === "CUEVA",
    }
  );

  const rinconSelectedClassName = classNames(
    "group-hover:fill-[#CD363C] group-hover:stroke-[#CD363C] transition-all duration-300 ease-in-out",
    {
      "fill-[#CD363C] stroke-[#CD363C]": event?.location === "RINCÓN",
    }
  );
  const eventsPerPage = 5;
  const maxPages = Math.ceil(events.length / eventsPerPage); // Determine the total number of pages

  // Ensure 'scene' is within a valid range
  const safeScene = Math.max(1, Math.min(scene, maxPages)); // Clamp scene to be between 1 and maxPages

  const eventsCut = events.slice((safeScene - 1) * eventsPerPage, safeScene * eventsPerPage);

  const ventanaEvent = eventsCut.filter((e) => e?.location === "VENTANA");
  const cuevaEvent = eventsCut.filter((e) => e?.location === "CUEVA");
  const rinconEvent = eventsCut.filter((e) => e?.location === "RINCÓN");
  const lobbyEvent = eventsCut.filter((e) => e?.location === "LOBBY");
  const centroEvent = eventsCut.filter((e) => e?.location === "CENTRO");

  return (
    <div className="w-full">
      <svg fill="none" viewBox="0 0 1315 654" xmlns="http://www.w3.org/2000/svg">
        <g className="group cursor-pointer" id="lobby" pointerEvents="all">
          <path
            className={lobbySelectedClassName}
            d="M7.69995 484.5L330 484.5V258.7H7.69995V484.5Z"
            id="Vector"
            stroke="white"
          />
          <text
            className="font-inter fill-white text-[28px]"
            id="RINC&#195;&#131;&#194;&#147;N_8"
            letterSpacing="0em"
            stroke="white"
            xmlSpace="preserve"
          >
            <tspan x="119" y="382.182">
              LOBBY
            </tspan>
          </text>
          <text
            className="font-inter fill-white text-[12.5px] font-thin"
            id="RINC&#195;&#131;&#194;&#147;N_10"
            letterSpacing="0em"
            stroke="white"
            xmlSpace="preserve"
          >
            <tspan x="16.7109" y="474.591">
              {lobbyEvent[0]?.title}
            </tspan>
          </text>
        </g>

        <g className="group cursor-pointer" id="rincon" pointerEvents="all">
          <path className={rinconSelectedClassName} d="M1110 648H1312V141H1110V648Z" id="Vector_2" stroke="white" />
          <text
            className="font-inter fill-white text-[28px]"
            id="RINC&#195;&#131;&#194;&#147;N"
            letterSpacing="0em"
            stroke="white"
            xmlSpace="preserve"
          >
            <tspan x="1155" y="405.182">
              RINC&#xd3;N{" "}
            </tspan>
          </text>
          <text
            className="font-inter fill-white text-[12.5px] font-thin"
            id="RINC&#195;&#131;&#194;&#147;N_2"
            letterSpacing="0em"
            stroke="white"
            xmlSpace="preserve"
          >
            <tspan x="1115.86" y="638.591">
              {rinconEvent[0]?.title}
            </tspan>
          </text>
        </g>

        <g className="group cursor-pointer" id="centro" pointerEvents="all">
          <path
            className={centroSelectedClassName}
            d="M375.898 197.8L746.898 197.8C753.498 197.8 758.898 203.2 758.898 209.8V383.6C758.898 390.2 753.498 395.6 746.898 395.6L375.998 395.6C369.398 395.6 363.998 390.2 363.998 383.6V209.8C363.898 203.2 369.298 197.8 375.898 197.8Z"
            id="centro"
            stroke="white"
          />
          <text
            className={classNames("font-inter text-[28px] group-hover:fill-black group-hover:stroke-black", {
              "fill-black stroke-black": event?.location === "CENTRO",
              "fill-white stroke-white": event?.location !== "CENTRO",
            })}
            id="RINC&#195;&#131;&#194;&#147;N_3"
            letterSpacing="0em"
            xmlSpace="preserve"
          >
            <tspan x="502" y="307.182">
              CENTRO
            </tspan>
          </text>
          <text
            className={classNames(
              "font-inter fill-white stroke-white text-[12.5px] font-thin group-hover:fill-black group-hover:stroke-black",
              {
                "fill-black stroke-black": event?.location === "CENTRO",
                "fill-white stroke-white": event?.location !== "CENTRO",
              }
            )}
            id="RINC&#195;&#131;&#194;&#147;N_4"
            letterSpacing="0em"
            xmlSpace="preserve"
          >
            <tspan x="375.376" y="385.591">
              {centroEvent[0]?.title}
            </tspan>
          </text>
        </g>

        <g className="group cursor-pointer" id="ventana" pointerEvents="all">
          <path
            className={ventanaSelectedClassName}
            d="M209.901 63.9993C225.301 63.3993 248.401 61.0993 263.401 57.9993C320.301 45.8993 377.101 33.1993 434.201 21.9993C478.101 13.3993 522.401 7.5993 567.301 7.7993C601.601 7.8993 635.601 12.1993 669.501 17.5993C729.801 27.1993 789.201 41.1993 848.701 54.9993C868.301 59.4993 881.701 62.0993 881.701 62.0993C881.701 62.0993 882.001 178.099 880.001 178.199C753.301 174.299 278.201 180.999 209.801 180.799C209.901 148.599 209.801 79.3993 209.901 63.9993Z"
            id="ventana"
            stroke="white"
          />
          <text
            className="font-inter fill-white text-[28px]"
            id="RINC&#195;&#131;&#194;&#147;N_5"
            letterSpacing="0em"
            stroke="white"
            xmlSpace="preserve"
          >
            <tspan x="478" y="104.182">
              VENTANA
            </tspan>
          </text>
          <text
            className="font-inter fill-white text-[12.5px] font-thin"
            id="RINC&#195;&#131;&#194;&#147;N_6"
            letterSpacing="0em"
            stroke="white"
            xmlSpace="preserve"
          >
            <tspan className="text-center" x="218.876" y="168.591">
              {ventanaEvent[0]?.title}
            </tspan>
          </text>
        </g>

        <g className="group cursor-pointer" id="cueva" pointerEvents="all">
          <path
            className={cuevaSelectedClassName}
            d="M228.3 649.499C230.2 649.599 231.6 649.699 233.1 649.699C295 649.699 356.899 649.699 418.899 649.799C423.099 649.799 424.199 648.499 424.199 644.399C424.099 595.799 424.099 547.199 424.099 498.699C424.099 497.199 423.899 495.799 423.799 493.999C358.499 493.999 293.6 493.999 228.3 493.999C228.3 545.799 228.3 597.299 228.3 649.499Z"
            id="Vector_3"
            stroke="white"
          />
          <text
            className="font-inter fill-white text-[28px]"
            id="RINC&#195;&#131;&#194;&#147;N_7"
            letterSpacing="0em"
            stroke="white"
            xmlSpace="preserve"
          >
            <tspan x="275" y="582.182">
              CUEVA
            </tspan>
          </text>
          <text
            className="font-inter fill-white text-[12.5px] font-thin"
            id="RINC&#195;&#131;&#194;&#147;N_8"
            letterSpacing="0em"
            stroke="white"
            xmlSpace="preserve"
          >
            <tspan x="235.067" y="640.591">
              {cuevaEvent[0]?.title}
            </tspan>
          </text>
        </g>

        <g id="principal">
          <path
            d="M1254.4 53.3997C1246.7 53.3997 1240.2 53.2997 1233.7 53.4997C1232.2 53.4997 1230.5 54.3997 1229.5 55.4997C1226.6 58.4997 1224 61.6997 1221.3 64.8997C1204.2 84.5997 1187.1 104.3 1170 124C1167.3 127.2 1164.6 130.4 1161.3 134.4C1167.3 134.4 1172.1 134 1176.9 134.5C1182.6 135.2 1186 132.6 1189.4 128.5C1199.7 116.3 1210.3 104.4 1220.7 92.2997C1231.7 79.6997 1242.6 66.9997 1254.4 53.3997ZM1228.2 53.3997C1221.7 53.3997 1216.3 53.6997 1211.1 53.2997C1206.6 52.8997 1203.7 54.6997 1200.9 57.8997C1183.5 78.1997 1165.8 98.2997 1148.3 118.5C1144 123.4 1139.9 128.5 1135 134.3C1141.4 134.3 1146.5 133.9 1151.6 134.4C1156.6 134.9 1159.5 132.7 1162.5 129.2C1174.7 114.9 1187.1 100.8 1199.4 86.6997C1208.8 75.8997 1218.1 65.0997 1228.2 53.3997ZM1187.2 134.3C1194.6 134.3 1200.5 134.6 1206.5 134.2C1208.6 134.1 1211.3 132.9 1212.7 131.3C1231.6 109.9 1250.3 88.3997 1269.1 66.8997C1272.7 62.6997 1276.2 58.3997 1280.5 53.3997C1273.4 53.3997 1267.4 53.0997 1261.5 53.4997C1259.2 53.6997 1256.5 54.9997 1255 56.6997C1238 75.8997 1221.1 95.3997 1204.2 114.8C1198.8 120.9 1193.5 127 1187.2 134.3ZM1213.6 134.3C1221.5 134.3 1227.8 134.5 1234.1 134.2C1235.6 134.1 1237.5 133 1238.6 131.8C1256.1 111.8 1273.5 91.7997 1291 71.6997C1296 65.8997 1301.1 60.0997 1306.8 53.3997C1299 53.3997 1292.6 53.1997 1286.1 53.4997C1284.6 53.5997 1282.7 54.6997 1281.6 55.8997C1264.7 75.0997 1247.9 94.2996 1231.1 113.6C1225.6 120.1 1220.1 126.7 1213.6 134.3ZM1201.9 53.3997C1194 53.3997 1187.2 53.2997 1180.5 53.4997C1179.4 53.4997 1178.2 54.4997 1177.4 55.3997C1158.1 77.3997 1138.9 99.3997 1119.6 121.4C1116.2 125.3 1112.9 129.4 1108.9 134.2C1116.8 134.2 1123.2 134.4 1129.7 134.1C1131.2 134 1133 132.8 1134.1 131.5C1151.3 111.9 1168.4 92.1997 1185.5 72.4997C1190.7 66.5997 1195.9 60.3997 1201.9 53.3997ZM1312.4 53.8997C1311.8 53.4997 1311.2 53.1997 1310.6 52.7997C1287.3 79.5997 1263.9 106.4 1239.7 134.3C1247.8 134.3 1254.4 134.5 1261 134.2C1262.5 134.1 1264.3 132.7 1265.4 131.5C1278.5 116.5 1291.6 101.5 1304.6 86.3997C1307.5 83.0997 1311.4 79.5997 1312.1 75.6997C1313.2 68.5997 1312.4 61.1997 1312.4 53.8997ZM1175.8 53.3997C1167.7 53.3997 1161.1 53.2997 1154.5 53.4997C1153.3 53.4997 1151.8 54.4997 1150.9 55.4997C1138.1 70.0997 1125.5 84.7997 1112.6 99.2997C1109 103.4 1106.9 107.4 1107.5 113.1C1108 118.9 1107.6 124.7 1107.6 131.9C1130.7 105.3 1152.8 79.8997 1175.8 53.3997ZM1312.4 82.4997C1312 82.3997 1311.6 82.1996 1311.3 82.0996C1296.4 99.1996 1281.5 116.4 1265.9 134.3C1273.3 134.3 1279.3 134.5 1285.2 134.2C1287.2 134.1 1289.7 133.1 1291.1 131.7C1297.8 124.4 1304.3 116.8 1310.7 109.2C1311.5 108.3 1312.3 106.9 1312.3 105.8C1312.4 97.9997 1312.4 90.1997 1312.4 82.4997ZM1149.6 53.3997C1144.5 53.3997 1140.9 53.6997 1137.3 53.2997C1130 52.4997 1124.2 53.8997 1120 60.6997C1117.6 64.5997 1113.8 67.5997 1110.9 71.1997C1109.6 72.7997 1107.8 74.7996 1107.8 76.5996C1107.4 84.4996 1107.7 92.2997 1107.7 101.7C1122 85.1997 1135.4 69.7997 1149.6 53.3997ZM1312.4 112.8C1312 112.6 1311.6 112.4 1311.2 112.3C1305.1 119.3 1299 126.3 1292.1 134.3C1298.9 134.3 1304.3 134.5 1309.6 134.2C1310.6 134.1 1312.2 132.3 1312.2 131.2C1312.5 125 1312.4 118.9 1312.4 112.8ZM1107.7 71.4997C1113.2 65.0997 1117.9 59.5997 1123 53.7997C1117.5 53.7997 1112.7 53.7997 1107.7 53.7997C1107.7 59.4997 1107.7 64.8997 1107.7 71.4997Z"
            id="Vector_4"
            stroke="white"
          />
          <g id="Group_3">
            <path
              d="M2.19949 250.199C4.19949 250.199 6.29954 249.999 8.49954 250.199C12.7995 250.699 15.6995 249.099 18.5995 245.599C32.1995 229.499 46.0995 213.699 59.9995 197.799C76.4995 178.899 92.9995 159.999 109.5 141.099C129 118.699 148.5 96.2993 168 73.7993C172.8 68.1993 177.6 62.5993 183.1 56.0993C176.9 56.0993 171.699 56.4993 166.699 55.9993C161.599 55.4993 158.4 57.6994 155.3 61.3994C147.8 70.4994 140 79.3993 132.3 88.2993C113.4 109.899 94.3995 131.499 75.5995 153.199C53.8995 178.099 32.1995 202.999 10.5995 228.099C5.29952 234.199 -2.20051 239.599 2.19949 250.199ZM17.6995 250.199C24.2995 250.199 29.4995 249.899 34.5995 250.299C39.2995 250.699 42.1995 248.799 45.1995 245.399C57.1995 231.199 69.4995 217.199 81.6995 203.199C100.299 181.799 118.999 160.399 137.699 138.999C154.499 119.699 170.799 99.9994 188.199 81.1994C195.199 73.6994 196.4 65.9993 194.8 56.7993C189.7 55.6993 185.899 56.3994 182.199 60.8994C168.499 77.3994 154.299 93.3993 140.199 109.599C123.199 129.099 106.199 148.699 89.1995 168.199C72.3995 187.499 55.5996 206.699 38.7996 225.999C31.8996 233.599 25.1995 241.399 17.6995 250.199ZM1.19949 233.699C1.59949 233.799 1.89959 233.999 2.29959 234.099C53.5996 175.199 104.8 116.199 157 56.1994C151.3 56.1994 147 56.7993 142.8 56.0993C135.7 54.8993 131.5 58.4994 127.3 63.3994C108.7 85.0994 89.9996 106.699 71.2996 128.299C48.4996 154.499 25.5996 180.599 2.79959 206.799C1.99959 207.699 1.29959 209.099 1.29959 210.299C1.09959 218.099 1.19949 225.899 1.19949 233.699ZM195.1 78.0993C194.7 77.8993 194.3 77.6993 193.8 77.5993C144 134.799 94.2995 192.099 43.6995 250.199C51.1995 250.199 57.0995 250.399 63.0995 250.099C65.0995 249.999 67.5995 248.999 68.9995 247.499C76.9995 238.699 84.7995 229.599 92.6995 220.599C108.999 201.799 125.3 182.999 141.6 164.199C158.7 144.499 175.8 124.899 192.9 105.199C193.8 104.099 195 102.699 195 101.399C195.2 93.5994 195.1 85.8993 195.1 78.0993ZM130.699 56.2993C122.499 56.2993 115.7 56.1994 108.9 56.3994C107.7 56.3994 106.3 57.6994 105.4 58.6994C91.2996 74.8994 77.2996 91.0993 63.2996 107.299C43.2996 130.399 23.1995 153.399 3.09952 176.499C2.39952 177.399 1.29959 178.399 1.29959 179.399C1.19959 187.499 1.19949 195.499 1.19949 203.599C1.59949 203.699 1.89959 203.899 2.29959 203.999C44.7996 155.099 87.1995 106.299 130.699 56.2993ZM195.199 108.199C194.799 107.999 194.4 107.799 194 107.599C153 154.799 111.9 201.999 69.9995 250.199C78.1995 250.199 84.9995 250.299 91.6995 250.099C92.7995 250.099 94.0996 248.999 94.8996 248.099C100.8 241.499 106.5 234.899 112.3 228.299C138.8 197.899 165.299 167.499 191.699 136.999C193.199 135.199 194.9 132.799 195 130.599C195.4 123.099 195.199 115.599 195.199 108.199ZM1.19949 174.999C36.0995 134.899 69.8995 95.9994 104.5 56.1994C97.5995 56.1994 92.0995 56.4993 86.6995 56.0993C82.5995 55.7993 79.8996 57.3993 77.3996 60.4993C72.4996 66.5993 67.2995 72.3993 62.1995 78.2993C43.2995 99.8993 24.3995 121.499 5.49954 143.099C3.79954 145.099 1.49959 147.399 1.29959 149.599C0.899591 157.599 1.19949 165.599 1.19949 174.999ZM195.199 138.099C194.799 137.899 194.5 137.799 194.1 137.599C161.8 174.799 129.499 211.899 96.1995 250.199C103.699 250.199 109.7 250.499 115.6 250.099C117.8 249.999 120.4 248.799 121.8 247.199C131.9 235.999 141.7 224.499 151.6 213.099C165.4 197.199 179.3 181.299 193.1 165.399C194.1 164.199 195 162.499 195.1 160.999C195.3 153.399 195.199 145.699 195.199 138.099ZM78.2996 56.1994C71.8996 56.1994 66.6996 56.4993 61.3996 56.0993C56.7996 55.7993 53.6996 57.4993 50.7996 60.9993C38.0996 75.8993 25.0996 90.5994 12.2996 105.399C8.49959 109.799 2.99959 113.899 1.79959 118.999C-0.000408888 126.799 1.29959 135.199 1.29959 144.799C27.2996 114.799 52.3996 86.0994 78.2996 56.1994ZM122.4 250.199C130.1 250.199 136.1 250.499 142 250.099C144.2 249.999 146.799 248.699 148.199 247.099C161.299 232.299 174.299 217.399 187.199 202.399C189.999 199.199 194.199 195.899 194.699 192.199C195.899 184.299 195.1 176.199 195.1 166.699C170.5 194.899 146.9 221.999 122.4 250.199ZM52.0995 56.2993C44.2995 56.2993 37.7996 56.1994 31.2996 56.3994C29.9996 56.3994 28.2995 57.1993 27.4995 58.0993C19.2995 67.2993 11.2995 76.4993 3.19949 85.7993C2.39949 86.7993 1.29959 87.9994 1.29959 89.1994C1.09959 97.2994 1.19949 105.299 1.19949 114.699C18.4995 94.7994 34.8995 76.0993 52.0995 56.2993ZM195.199 198.399C194.799 198.299 194.4 198.099 194.1 197.999C179.2 215.099 164.299 232.299 148.699 250.199C156.099 250.199 162.1 250.399 168 250.099C170 249.999 172.5 248.999 173.9 247.599C180.6 240.299 187.1 232.699 193.5 225.099C194.3 224.199 195.1 222.799 195.1 221.699C195.2 213.899 195.199 206.099 195.199 198.399ZM25.8996 56.2993C17.7996 56.2993 11.0996 56.1994 4.39957 56.3994C3.29957 56.3994 1.49954 57.9994 1.49954 58.8994C1.29954 66.9994 1.39957 75.1993 1.39957 84.4993C9.69957 74.7993 17.2996 66.0993 25.8996 56.2993ZM174.9 250.099C181.8 250.099 187.4 250.199 192.9 249.999C193.7 249.999 195 248.699 195 247.999C195.2 241.499 195.1 234.999 195.1 228.499C194.7 228.399 194.4 228.299 194 228.099C187.9 235.099 181.9 242.099 174.9 250.099Z"
              id="Vector_5"
              stroke="white"
            />
            <g id="Group_4">
              <path
                d="M1314.1 139.1C1311.3 139.1 1309.2 139.1 1307 139.1C1241.2 139.1 1175.4 139.1 1109.7 139.1C1102.9 139.1 1102.3 138.8 1102.7 132.1C1103.9 113.2 1100.8 63.8 1101 57.9C1101.1 54.1 1099.7 52.6 1095.7 52.6C1022.6 52.7 953.8 52.2 880.6 52.3C877.8 52.3 830.3 44.5 809.4 39.7C754.4 27.1 699.4 15 643.5 7.20001C599.7 1.00001 555.8 -2.19998 511.8 3.40002C477.4 7.80002 443 12.3 409 18.8C362.1 27.8 315.6 38.6 269 48.9C248 53.5 232.1 57.7 210.4 55.7C207.8 55.5 205.2 55.7 202.4 55.7C202.4 58.7 202.4 60.9 202.4 63C202.7 123.2 200.2 183.8 200.1 244.3C200.2 245.5 200.1 246.6 200.1 247.8C200.1 254.7 199.8 255 192.7 255C131.1 255 69.5 255 7.80005 255C5.70005 255 3.6 255 1.5 255C1.5 333.4 1.5 411.1 1.5 489.2C3.5 489.2 5.09995 489.2 6.69995 489.2C80.2999 489.1 153.9 488.8 227.5 489C295.6 489.1 363.6 489.4 431.7 490C513.8 490.7 595.9 489.3 678 491.5C747.4 493.4 816.8 491.4 886.2 491.3C957.8 491.2 1029.4 491.3 1101 491.3C1108.1 491.3 1108.2 491.4 1108.2 498.6C1108.2 547.2 1108.2 595.8 1108.2 644.4C1108.2 646.3 1108.2 648.3 1108.2 650.5C1177.1 650.5 1245.4 650.5 1314 650.5C1314.1 479.9 1314.1 309.9 1314.1 139.1Z"
                id="Vector_6"
                stroke="white"
              />
              <path
                d="M430.099 495C430.099 547.1 430.099 598.599 430.099 650.399C503.899 650.399 577.299 650.399 651.199 650.399C651.199 598.499 651.199 546.9 651.199 495C577.499 495 503.999 495 430.099 495Z"
                id="Vector_7"
                stroke="white"
              />
              <path
                d="M45.6996 649.7C52.8996 649.7 58.7996 650 64.5996 649.6C66.8996 649.4 69.6997 648.2 71.2997 646.5C77.3997 640 83.0996 633 88.9996 626.2C105.7 607 122.4 587.9 139.1 568.8C154 551.7 169 534.5 183.9 517.4C190.5 509.8 196.9 502.2 204 493.9C196.8 493.9 190.7 493.7 184.5 494C182.5 494.1 180 495.2 178.6 496.7C174.8 500.6 171.5 505 167.9 509.1C151 528.5 134.1 547.9 117.2 567.3C100.3 586.7 83.3996 606.1 66.4996 625.5C59.7996 633.2 53.1996 641 45.6996 649.7ZM19.5996 649.7C27.4996 649.7 33.7996 649.8 40.0996 649.6C41.4996 649.6 43.3997 648.7 44.2997 647.6C59.7997 629.9 75.2996 612 90.6996 594.2C114.7 566.6 138.7 539.1 162.7 511.5C167.6 505.9 172.3 500.3 177.8 493.9C169.9 493.9 163 493.8 156.1 494C155 494 153.8 495.2 153 496.1C148.6 501.1 144.3 506.1 139.9 511.1C120.5 533.4 101.1 555.7 81.6996 578C65.0996 597 48.4996 616 31.8996 635.1C27.9996 639.6 24.2996 644.1 19.5996 649.7ZM151.6 493.9C143.6 493.9 136.8 493.8 130.1 494C129 494 127.7 495 126.9 495.9C109.5 515.8 92.1997 535.7 74.7997 555.6C57.9997 574.9 41.1996 594.2 24.3996 613.5C17.0996 621.9 9.49955 630.1 2.69955 638.8C0.999554 641 1.2996 644.9 0.999603 648.1C0.999603 648.5 2.69958 649.4 3.59958 649.6C11.5996 650.7 18.6996 649.4 23.1996 641.7C24.0996 640.1 25.3996 638.8 26.5996 637.4C45.8996 615.2 65.1996 593 84.4996 570.9C101.2 551.7 117.9 532.6 134.6 513.4C140.2 507.3 145.5 501 151.6 493.9ZM221.5 493.9C218.8 493.9 216.1 494.2 213.5 493.8C208.9 493.2 205.8 494.9 203 498.6C198.6 504.4 193.5 509.7 188.7 515.2C171.9 534.5 155.1 553.8 138.3 573C121.4 592.4 104.5 611.8 87.5996 631.2C82.5996 637 77.5997 642.9 71.7997 649.6C78.1997 649.6 83.3996 649.2 88.3996 649.7C93.3996 650.2 96.3996 648.1 99.2996 644.5C105.2 637.3 111.4 630.4 117.5 623.4C133.9 604.6 150.2 585.8 166.6 567C183.4 547.7 200 528.3 217 509.1C221.1 504.9 223.4 500.5 221.5 493.9ZM125.6 493.9C117.5 493.9 110.9 493.8 104.3 494C103.2 494 101.8 494.8 101 495.7C89.5996 508.7 78.2996 521.7 66.9996 534.7C47.8996 556.6 28.7997 578.5 9.79965 600.4C6.79965 603.9 2.09963 607.3 1.39963 611.2C0.0996277 619.2 0.999603 627.5 0.999603 637.2C42.7996 589 83.6996 542 125.6 493.9ZM97.9996 649.7C106 649.7 112.3 649.9 118.6 649.6C120.1 649.5 122 648.5 123.1 647.3C127.9 642 132.4 636.5 137.1 631.1C162.7 601.7 188.2 572.1 214.2 543C220.2 536.3 223.4 529.7 222.2 520.8C221.7 516.7 222.1 512.5 222.1 508.4C221.7 508.4 221.3 508.3 220.9 508.3C180.3 555.1 139.6 601.8 97.9996 649.7ZM0.799652 605.6C1.19965 605.7 1.49963 605.9 1.89963 606C34.1996 568.9 66.3996 531.8 99.2996 493.9C93.9996 493.9 89.8996 494.3 85.9996 493.8C79.0996 493 74.5996 495.3 69.9996 500.8C47.7996 527.1 24.9996 552.8 2.39963 578.8C1.59963 579.7 0.899628 581.1 0.899628 582.2C0.699628 590 0.799652 597.8 0.799652 605.6ZM124.2 649.7C129.3 649.7 132.8 649.2 136.1 649.8C144.8 651.4 150 647.1 155.3 640.9C174.7 618.1 194.4 595.7 214 573.2C216.8 570 221.1 566.8 221.7 563.1C222.9 555.1 222.1 546.8 222.1 537.2C189.1 575.1 157.1 611.8 124.2 649.7ZM73.0996 493.9C66.0996 493.9 60.2996 493.6 54.5996 494.1C51.8996 494.3 48.6996 495.5 46.9996 497.5C32.0996 514.3 17.5996 531.3 2.89963 548.2C2.19963 549.1 0.899628 550 0.899628 550.9C0.699628 559.1 0.799652 567.2 0.799652 575.4C1.19965 575.5 1.49963 575.6 1.89963 575.6C25.3996 548.7 48.7996 521.8 73.0996 493.9ZM222.1 568.9C221.7 568.8 221.3 568.6 221 568.5C197.8 595.2 174.5 621.9 150.4 649.7C158.5 649.7 165.1 649.9 171.7 649.6C173.2 649.5 175 648.1 176.1 646.9C189.3 631.9 202.4 616.9 215.3 601.8C217.8 598.8 221.4 595.6 221.8 592.2C222.8 584.5 222.1 576.7 222.1 568.9ZM0.799652 545.1C1.19965 545.2 1.5996 545.4 1.9996 545.5C16.6996 528.5 31.4996 511.6 46.8996 493.9C39.1996 493.9 32.6997 493.8 26.2997 494C24.8997 494 23.1996 494.9 22.1996 496C15.8996 503 9.5996 510.1 3.4996 517.3C2.3996 518.5 0.999603 520 0.999603 521.4C0.699603 529.3 0.799652 537.2 0.799652 545.1ZM222.1 599.1C221.7 598.9 221.4 598.8 221 598.6C206.4 615.3 191.9 632.1 176.6 649.7C184.1 649.7 190.2 649.9 196.3 649.6C198.2 649.5 200.5 648.6 201.7 647.2C208.1 640.2 214.2 633 220.3 625.8C221.1 624.8 221.9 623.5 222 622.3C222.2 614.6 222.1 606.9 222.1 599.1ZM0.899628 516.3C7.69963 508.5 13.5996 501.6 20.1996 494C13.0996 494 7.19963 494 0.899628 494C0.899628 501.1 0.899628 507.9 0.899628 516.3ZM220.8 628.7C215.1 635.3 209.4 641.9 203.2 649H221.9V629.1C221.3 628.9 221.3 628.9 220.8 628.7Z"
                id="Vector_8"
                stroke="white"
              />
              <path
                d="M701.1 652.699C708.4 652.699 714.4 652.999 720.3 652.599C722.6 652.399 725.4 651.099 727 649.399C735.4 640.2 743.4 630.6 751.6 621.3C768.1 602.4 784.6 583.5 801.1 564.6C818.2 544.9 835.3 525.3 852.4 505.6C854.7 503 856.8 500.2 859.6 496.8C852.1 496.8 845.6 496.6 839.1 496.9C837.5 497 835.6 498.1 834.6 499.3C820.5 515.4 806.5 531.6 792.4 547.8C775.6 567.1 758.8 586.4 742 605.7C728.6 620.9 715.4 636.3 701.1 652.699ZM833.6 496.7C827.2 496.7 821.9 497.1 816.7 496.6C812 496.2 809 498.2 806.1 501.5C789.5 520.9 772.8 540.3 756 559.5C732.8 586.2 709.5 612.7 686.2 639.4C682.7 643.4 679.3 647.599 675.2 652.699C680.8 652.699 685.2 652.399 689.4 652.799C695.3 653.299 699.3 651.599 703.4 646.799C724.5 621.8 746.2 597.3 767.7 572.7C784.5 553.4 801.3 534.2 818.1 514.9C823 509.1 827.8 503.4 833.6 496.7ZM878.1 496.7C875.1 496.7 872.3 497 869.5 496.6C864.7 496 861.5 497.7 858.6 501.6C854.2 507.4 849.1 512.7 844.3 518.2C827.5 537.5 810.7 556.8 793.9 576.1C777 595.5 760.1 614.9 743.2 634.3C738.2 640.1 733.2 645.999 727.5 652.599C734.8 652.599 740.7 652.799 746.7 652.499C748.7 652.399 751.3 651.399 752.6 649.999C760.8 641 768.6 631.8 776.6 622.7C792.8 604 809 585.3 825.3 566.6C841.9 547.6 858.4 528.5 875.2 509.6C878.3 505.9 879.5 502.1 878.1 496.7ZM807.4 496.7C804.3 496.7 802.7 496.9 801.1 496.7C789.8 495.1 781.7 498.6 774 508.1C753.5 533.4 731.6 557.4 710.2 582C693.5 601.2 677 620.4 660.1 639.4C656.3 643.6 656.5 647.799 657.3 652.099C667.7 655.099 675.1 651.799 680.3 643C680.9 642 681.8 641.2 682.6 640.3C699.1 621.4 715.6 602.5 732.1 583.6C749.2 563.9 766.3 544.3 783.4 524.6C791 515.7 798.7 506.8 807.4 496.7ZM878.7 510.7C878.3 510.5 877.9 510.3 877.5 510.1C836.5 557.3 795.4 604.5 753.5 652.699C760.2 652.699 765.5 652.499 770.8 652.799C774.7 652.999 777.7 652.299 780.2 648.799C782.9 644.999 786.4 641.9 789.4 638.4C818 605.5 846.7 572.5 875.3 539.5C876.8 537.7 878.5 535.3 878.6 533.1C878.9 525.6 878.7 518.1 878.7 510.7ZM656.8 638.2C657.1 638.3 657.5 638.5 657.8 638.6C698.6 591.6 739.5 544.7 781.1 496.7C773 496.7 766.5 496.5 760.1 496.8C758.6 496.9 756.8 498.1 755.8 499.4C741.7 515.5 727.7 531.7 713.7 547.9C695.3 569.1 676.8 590.2 658.3 611.3C657.5 612.2 656.9 613.6 656.8 614.8C656.8 622.6 656.8 630.4 656.8 638.2ZM878.7 540.6C878.3 540.4 878 540.3 877.6 540.1C845.3 577.3 813 614.5 779.8 652.699C787.5 652.699 793.3 652.999 799.1 652.599C801.4 652.399 804.1 651.099 805.6 649.399C815.6 638.3 825.3 626.9 835.1 615.7C849 599.8 862.8 583.9 876.6 568C877.6 566.8 878.5 565.1 878.6 563.6C878.8 555.9 878.7 548.3 878.7 540.6ZM755 496.7C749.8 496.7 745.9 497 742 496.6C735 495.9 730.3 498 725.5 503.7C703.6 529.8 681 555.2 658.6 580.9C658 581.6 657 582.5 656.9 583.3C656.8 591.6 656.8 599.9 656.8 609.4C690 571.5 722 534.6 755 496.7ZM878.7 570.8C878.3 570.6 878 570.5 877.6 570.3C854 597.5 830.4 624.6 806 652.699C813.8 652.699 820 652.899 826.1 652.599C828 652.499 830.3 651.299 831.5 649.899C844.8 634.8 858 619.7 871.1 604.4C873.9 601.1 877.7 597.5 878.3 593.6C879.5 586.2 878.7 578.4 878.7 570.8ZM728.8 496.7C721.5 496.7 715.6 496.4 709.9 496.8C707.5 497 704.6 498.1 703.1 499.8C688.2 516.6 673.6 533.6 659 550.5C658.2 551.5 657 552.7 657 553.8C656.8 561.8 656.9 569.9 656.9 579.4C681.2 551.4 704.6 524.6 728.8 496.7ZM878.7 600.9C878.3 600.7 878 600.6 877.6 600.4C862.7 617.5 847.8 634.7 832.2 652.699C835.6 652.699 837.6 652.399 839.5 652.799C851.3 655.099 859.7 650.399 866.1 640.6C869.1 636 873.2 632.3 876.7 628.1C877.6 627 878.6 625.6 878.6 624.3C878.8 616.4 878.7 608.7 878.7 600.9ZM702.6 496.7C694.6 496.7 688 496.6 681.4 496.8C680.2 496.8 678.7 497.8 677.8 498.8C671.6 505.7 665.4 512.7 659.4 519.7C658.3 520.9 657.1 522.5 657 523.9C656.8 531.8 656.9 539.7 656.9 549.2C672.5 531.3 687.1 514.5 702.6 496.7ZM878.7 631.2C878.3 631 877.9 630.9 877.5 630.7C871.4 637.7 865.3 644.699 858.4 652.699C865.2 652.699 870.6 652.899 876 652.599C877 652.499 878.6 650.599 878.6 649.499C878.8 643.4 878.7 637.3 878.7 631.2ZM657.3 496.9C657.3 504.3 657.3 511.1 657.3 518.8C663.8 511.3 669.6 504.5 676.1 496.9C669 496.9 663.2 496.9 657.3 496.9Z"
                id="Vector_9"
                stroke="white"
              />
              <path
                d="M925.999 650.7C933.399 650.7 939.299 651 945.299 650.6C947.499 650.5 950.099 649.3 951.599 647.7C957.699 641.1 963.399 634.2 969.299 627.4C985.999 608.2 1002.7 589.1 1019.4 569.9C1034.4 552.7 1049.3 535.6 1064.3 518.4C1070.5 511.3 1076.5 504.1 1083.5 496C1075.4 496 1068.7 495.9 1061.9 496.1C1060.8 496.1 1059.5 497.2 1058.7 498.1C1040.2 519.3 1021.9 540.5 1003.4 561.7C986.699 580.9 969.999 600 953.299 619.2C944.399 629.3 935.699 639.5 925.999 650.7ZM899.799 650.7C907.799 650.7 914.099 650.9 920.399 650.6C921.999 650.5 923.899 649.5 924.899 648.3C939.099 632 953.199 615.6 967.299 599.3C992.799 570 1018.4 540.7 1043.9 511.4C1048.1 506.6 1052.2 501.7 1057.1 496C1050.1 496 1044.3 495.6 1038.5 496.2C1035.9 496.4 1032.8 497.8 1030.9 499.7C1026.9 503.6 1023.5 508.2 1019.8 512.5C1003.3 531.4 986.799 550.3 970.299 569.2C953.199 588.9 936.099 608.6 918.999 628.3C912.999 635.3 906.899 642.5 899.799 650.7ZM952.299 650.7C959.999 650.7 966.399 650.8 972.699 650.6C974.199 650.5 976.099 649.5 977.199 648.3C985.299 639.3 993.199 630.1 1001.2 621C1017.5 602.2 1033.8 583.4 1050.2 564.5C1067.2 544.9 1084.2 525.4 1101.3 505.9C1104 502.8 1104.1 499.9 1102.9 496C1098.1 496 1093.5 495.8 1088.8 496.1C1087.4 496.2 1085.7 497.2 1084.7 498.3C1064.5 521.4 1044.4 544.7 1024.2 567.9C1005.3 589.6 986.399 611.2 967.499 632.9C962.599 638.5 957.899 644.1 952.299 650.7ZM1031 496C1024.9 496 1020 496.4 1015.1 495.9C1009.9 495.3 1006.3 497.2 1003.2 501.2C1000.4 504.9 997.299 508.4 994.199 511.9C975.899 533 957.599 554.1 939.299 575.1C922.099 594.9 904.999 614.8 887.499 634.4C883.299 639.1 885.199 644 884.899 649C884.899 649.5 885.499 650.1 885.999 650.4C888.599 651.9 896.799 650.3 898.799 647.9C916.099 628.1 933.299 608.3 950.499 588.5C972.099 563.7 993.699 538.9 1015.3 514.1C1020.5 508.4 1025.3 502.7 1031 496ZM1103.5 508.6C1103.1 508.4 1102.7 508.3 1102.3 508.1C1061.3 555.3 1020.2 602.5 978.299 650.7C986.399 650.7 993.099 650.8 999.699 650.6C1000.9 650.6 1002.4 649.5 1003.3 648.5C1013.8 636.7 1024.1 624.8 1034.5 612.9C1056.3 587.9 1078.1 562.8 1099.8 537.7C1101.4 535.9 1103.2 533.6 1103.4 531.4C1103.8 523.8 1103.5 516.2 1103.5 508.6ZM884.799 632.1C885.199 632.3 885.699 632.4 886.099 632.6C925.399 587.4 964.799 542.1 1004.9 496C997.399 496 991.399 495.8 985.399 496.1C983.399 496.2 980.899 497.3 979.599 498.8C965.699 514.5 951.999 530.3 938.299 546.1C921.199 565.8 903.999 585.4 886.999 605.1C886.099 606.2 884.899 607.6 884.899 608.9C884.699 616.6 884.799 624.4 884.799 632.1ZM1005.6 649.5C1005.9 649.9 1006.2 650.3 1006.4 650.7C1012.7 650.7 1019 650.8 1025.4 650.6C1026.7 650.6 1028.2 649.8 1029.2 648.9C1031.5 646.7 1033.5 644.3 1035.5 641.9C1055.2 619.2 1075 596.6 1094.7 573.9C1097.7 570.4 1102.3 566.9 1102.9 563C1104.2 555 1103.3 546.7 1103.3 537.3C1070.1 575.3 1037.9 612.4 1005.6 649.5ZM977.599 497.2C977.399 496.8 977.199 496.4 976.999 496C970.399 496 963.799 495.9 957.199 496.1C955.999 496.1 954.499 497.2 953.599 498.2C931.699 523.3 909.799 548.5 887.899 573.7C886.699 575.1 885.099 576.7 885.099 578.2C884.799 586.2 884.999 594.2 884.999 603.8C916.499 567.5 947.099 532.4 977.599 497.2ZM1030.8 650.7C1038.9 650.7 1045.5 650.8 1052.1 650.6C1053.5 650.5 1055.2 649.4 1056.2 648.2C1070.5 631.8 1084.5 615.1 1099 598.9C1102.6 594.9 1103.8 591 1103.6 586C1103.3 580.2 1103.5 574.4 1103.5 568.6C1103.1 568.5 1102.7 568.5 1102.3 568.4C1078.8 595.4 1055.3 622.5 1030.8 650.7ZM884.799 572.1C885.199 572.3 885.499 572.4 885.899 572.6C907.799 547.4 929.699 522.2 952.499 496C944.399 496 937.699 495.9 930.999 496.1C929.799 496.1 928.299 497.3 927.399 498.3C913.799 513.8 900.399 529.3 886.899 544.9C885.899 546.1 884.999 547.8 884.999 549.3C884.699 556.9 884.799 564.5 884.799 572.1ZM1057 650.7C1065.1 650.7 1071.9 650.8 1078.6 650.6C1079.8 650.6 1081.2 649.4 1082.1 648.3C1088.7 640.8 1095.2 633.3 1101.7 625.8C1102.5 624.9 1103.4 623.6 1103.4 622.4C1103.6 614.5 1103.5 606.6 1103.5 597.2C1087.6 615.5 1072.7 632.6 1057 650.7ZM884.799 542C885.199 542.2 885.499 542.3 885.899 542.5C899.099 527.3 912.299 512.1 926.299 496.1C918.399 496.1 911.599 496 904.899 496.2C903.799 496.2 902.499 497.2 901.699 498.1C896.499 503.9 891.299 509.7 886.199 515.7C885.399 516.6 884.899 518.1 884.899 519.3C884.799 526.7 884.799 534.4 884.799 542ZM1103.5 629.2C1103.1 629 1102.7 628.9 1102.3 628.7C1096.2 635.7 1090.1 642.8 1083.3 650.7C1089.9 650.7 1095.1 650.9 1100.2 650.6C1101.4 650.5 1103.4 648.7 1103.4 647.6C1103.7 641.4 1103.5 635.3 1103.5 629.2ZM899.299 496C894.999 496 891.499 495.8 888.099 496.1C886.999 496.2 884.999 497.4 884.999 498.1C884.699 502.7 884.899 507.4 884.899 513.3C889.899 507.6 893.999 503 897.999 498.4C898.399 498.1 898.599 497.4 899.299 496Z"
                id="Vector_10"
                stroke="white"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
