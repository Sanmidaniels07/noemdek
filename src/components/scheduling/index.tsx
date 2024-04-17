import React, { ChangeEvent, useState } from "react";
import Calendar from "react-calendar";
import NavBar from "./NavBar";
import profile1 from "../../assets/profilepix-1.jpeg";
import profile2 from "../../assets/profilepix-2.webp";
import car from "../../assets/CAR.jpeg";
import truck from "../../assets/TRUCK.jpeg";
import suv from "../../assets/LEXUS.jpeg";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface scheduleProps {
  id: number;
  vehicle: string;
  driver: string;
  client: string;
  driverImage: string;
  driverType: string;
  pickUpLocation: string;
  size: string;
  condition: string;
  customer: string;
  startDate: Date;
  endDate: Date;
  dropOffLocation: string;
  image: string;
}

const Scheduling = () => {
  const [selectedOption, setSelectedOption] = useState("Drivers"); // Default to Drivers
  const [selectedView, setSelectedView] = useState("month"); // Default to month view
  const [value, onChange] = useState<Value>(new Date());
  const [selectedSchedule, setSelectedSchedule] = useState<scheduleProps>(); // State variable to track the selected schedule
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle schedule selection

  const handleScheduleClick = ({ schedule }: { schedule: scheduleProps }) => {
    setSelectedSchedule(schedule);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  // Function to handle option change
  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  // Function to handle view change
  const handleViewChange = (view: string) => {
    setSelectedView(view);
  };

  const getNumberOfDays = (startDate: Date, endDate: Date) => {
    if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
      console.error("Invalid date objects");
      return NaN;
    }
    const startTime = startDate.getTime();
    const endTime = endDate.getTime();

    if (isNaN(startTime) || isNaN(endTime)) {
      console.error("Start time or end time is not a number");
      return NaN;
    }
    const diffInTime = endTime - startTime;
    if (isNaN(diffInTime)) {
      console.error("Difference in time is not a number");
      return NaN;
    }
    const diffInDays = diffInTime / (1000 * 3600 * 24);

    if (isNaN(diffInDays)) {
      console.error("Difference in days is not a number");
      return NaN;
    }
    return diffInDays + 1;
  };

  const convertDateToDayNumber = (dateString: Date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayNumber = date.getDay(); // 0 for Sunday, 1 for Monday, etc.

    return dayNumber === 0 ? 7 : dayNumber; // Convert 0 (Sunday) to 7
  };


  const userData = [
    {
      userName: "David James",
      userRole: "Senior Driver",
      client: "Dangote Ltd.",
      schedule: [
        {
          id: 1,
          vehicle: "Lexus GLS 500",
          driver: "Clinton",
          client: "British Petroleum",
          driverImage: profile1,
          driverType: "senior driver",
          pickUpLocation: "Lagos",
          size: "Full size SUV",
          condition: "Needs repair",
          customer: "Clinton",
          startDate: new Date("2021-02-15T06:00:00"),
          endDate: new Date("2021-02-15T19:00:00"),
          dropOffLocation: "same as pick up location",
          image: suv,
          startSpan: 1,
          length: 1,
        },
        {
          id: 2,
          vehicle: "Lexus GLS 450",
          driver: "Charles",
          client: "Dangote Ltd.",
          driverImage: profile2,
          driverType: "senior driver",
          pickUpLocation: "Ikoyi, Lekki",
          size: "Full size SUV",
          condition: "Needs repair",
          customer: "Clinton",
          startDate: new Date("2021-02-16T06:00:00"),
          endDate: new Date("2021-02-16T19:00:00"),
          dropOffLocation: "same as pick up location",
          image: suv,
          startSpan: 2,
          length: 1,
        },

        {
          id: 3,
          vehicle: "Lexus GLS 500",
          driver: "Charles",
          client: "Dangote Ltd.",
          driverImage: profile2,
          driverType: "senior driver",
          pickUpLocation: "Ikoyi, Lekki",
          size: "Full size SUV",
          condition: "Needs repair",
          customer: "Clinton",
          startDate: new Date("2021-02-18T06:00:00"),
          endDate: new Date("2021-02-21T19:00:00"),
          dropOffLocation: "same as pick up location",
          image: suv,
          startSpan: 4,
          length: 3,
        },
      ],
    },

    {
      userName: "Charles Erikson",
      userRole: "Senior Driver",
      client: "Dangote Ltd.",
      schedule: [
        {
          id: 1,
          vehicle: "Lexus GLS 450",
          driver: "Dempsey",
          client: "Individual",
          driverImage: profile1,
          driverType: "senior driver",
          pickUpLocation: "Lagos",
          size: "Full size SUV",
          condition: "Needs repair",
          customer: "Clinton",
          startDate: new Date("2021-02-16T06:00:00"),
          endDate: new Date("2021-02-18T19:00:00"),
          dropOffLocation: "same as pick up location",
          image: suv,
          startSpan: 2,
          length: 3,
        },
        {
          id: 2,
          vehicle: "Lexus GLS 450",
          driver: "Dempsey",
          client: "Individual",
          driverImage: profile2,
          driverType: "senior driver",
          pickUpLocation: "Ikoyi, Lekki",
          size: "Full size SUV",
          condition: "Needs repair",
          customer: "Clinton",
          startDate: new Date("2021-02-20T06:00:00"),
          endDate: new Date("2021-02-21T19:00:00"),
          dropOffLocation: "same as pick up location",
          image: suv,
          startSpan: 6,
          length: 2,
        },
      ],
    },

    {
      userName: "Sunday Abu",
      userRole: "Senior Driver",
      client: "Dangote Ltd.",
      schedule: [
        {
          id: 1,
          vehicle: "Toyota Camry",
          driver: "Charles",
          client: "Dangote Ltd.",
          driverImage: profile1,
          driverType: "senior driver",
          pickUpLocation: "Lagos",
          size: "Full size Truck",
          condition: "Needs repair",
          customer: "Sunday",
          startDate: new Date("2021-02-15T06:00:00"),
          endDate: new Date("2021-02-19T19:00:00"),
          dropOffLocation: "same as pick up location",
          image: car,
          startSpan: 1,
          length: 5,
        },
      ],
    },
  ];

  const scheduleData = [
    {
      id: 1,
      vehicle: "Lexus GLS 500",
      driver: "David James",
      client: "British Petroleum",
      driverImage: profile1,
      driverType: "senior driver",
      pickUpLocation: "Lagos",
      size: "Full size SUV",
      condition: "Needs repair",
      customer: "David",
      startDate: new Date("2021-02-15T06:00:00"),
      endDate: new Date("2021-02-15T19:00:00"),
      dropOffLocation: "same as pick up location",
      image: suv,
      startSpan: 1,
      length: 2,
    },
    {
      id: 2,
      vehicle: "Lexus GLS 450",
      driver: "Charles Erikson",
      client: "Individual",
      driverImage: profile2,
      driverType: "senior driver",
      pickUpLocation: "Ikoyi-Lekki",
      size: "Full size SUV",
      condition: "Needs repair",
      customer: "Charles",
      startDate: new Date("2021-02-15T06:00:00"),
      endDate: new Date("2021-02-15T19:00:00"),
      dropOffLocation: "same as pick up location",
      image: suv,
      startSpan: 1,
      length: 3,
    },
    {
      id: 3,
      vehicle: "Toyota Camry",
      driver: "Sunday Abu",
      client: "Dangote Ltd.",
      driverImage: profile2,
      driverType: "senior driver",
      pickUpLocation: "Ikoyi, Lekki",
      size: "Full size SUV",
      condition: "Needs repair",
      customer: "Sunday",
      startDate: new Date("2021-02-15T06:00:00"),
      endDate: new Date("2021-02-15T19:00:00"),
      dropOffLocation: "same as pick up location",
      image: car,
      startSpan: 1,
      length: 4,
    },
  ];

  return (
    <div className="bg-gray-300 sm:h-[55rem] hidden lg:block h-[80rem]  overflow-hidden">
      <div>
        <NavBar />
      </div>
      {/* scheduling content */}
      <div>
        {/* cards */}
        <div className="sm:flex sm:flex-row flex-col gap-3 sm:gap-1 flex-wrap  shadow-white rounded-lg justify-end items-left mt-10 ">
          <div className="bg-orange-600 rounded-lg w-[150px] h-[100px] shadow-md shadow-white">
            <h1 className="text-white text-xl font-bold pl-3">$500</h1>
            <p className="text-white text-sm pl-20 font-bold">Revenue</p>
            <div className="flex justify-between mt-3">
              <div className="bg-white rounded-full text-orange text-xs ml-2">
                +13.6%
              </div>
              <h6 className="text-white text-sm mr-2 font-semibold">
                (Last 30 days)
              </h6>
            </div>
          </div>

          <div className="bg-green-600 rounded-lg w-[150px] h-[100px] shadow-md shadow-white">
            <h1 className="text-white text-xl font-bold pl-3">$300</h1>
            {/* <p className='text-white text-sm pl-20 font-bold'>Revenue</p> */}
            <div className="flex justify-between mt-9">
              <div className="bg-white rounded-full text-orange text-xs ml-2">
                +13.6%
              </div>
              <h6 className="text-white text-sm mr-2 font-semibold">
                Cross margin
              </h6>
            </div>
          </div>

          <div className="bg-green-600 rounded-lg w-[150px] h-[100px] shadow-md shadow-white">
            <h1 className="text-white text-xl font-bold pl-3">$200</h1>
            <p className="text-white text-sm pl-20 font-bold">ROI</p>
            <div className="flex justify-between mt-5">
              <div className="bg-white rounded-full text-orange text-xs ml-2">
                +13.6%
              </div>
              <h6 className="text-white text-sm pr-3">For Vehicle</h6>
            </div>
          </div>

          <div className="bg-green-600 rounded-lg w-[150px] h-[100px] shadow-md shadow-white">
            <h1 className="text-white text-xl font-bold pl-3">$500m</h1>
            <p className="text-white text-xs pl-5 font-bold mt-2">
              Average Rental Rate
            </p>
            <div className="flex justify-between mt-4">
              <div className="bg-white rounded-full text-orange text-xs ml-2">
                +13.6%
              </div>
              <h6 className="text-white text-sm mr-2">across fleets</h6>
            </div>
          </div>

          <div className="bg-orange-600 rounded-lg w-[150px] h-[100px] shadow-md shadow-white">
            <h1 className="text-white text-xl font-bold pl-3">$300m</h1>
            {/* <p className='text-white text-sm pl-20 font-bold'>Revenue</p> */}
            <div className="flex justify-between mt-9">
              <div className="bg-white rounded-full text-orange text-xs ml-2">
                +13.6%
              </div>
              <h6 className="text-white text-sm mr-2">annual gain</h6>
            </div>
          </div>

          <div className="bg-orange-600 rounded-lg w-[300px] h-[100px] shadow-md shadow-white">
            <div className="flex gap-12">
              {" "}
              <h1 className="text-white text-xl font-bold pl-3">$70m</h1>
              <p className="text-white text-xs pl-20 font-semibold bg-green-600 text-center">
                $70m-$100m (high)
              </p>
            </div>
            <div className="text-sm text-white mt-2 text-right pr-2 ">
              $40m - $70m (mid)
            </div>
            <div className="flex justify-between mt-3">
              <div className="bg-white rounded-full text-orange text-xs ml-2 mb-2">
                +13.6%
              </div>
              <div className="text-white text-sm font-semibold">
                Total pipeline
              </div>
              <h6 className="text-white text-xs text-center mr-2 bg-red-600 w-[100px] mt-3 border-b-white">
                $0 - $40m (low){" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[24px] font-extrabold ml-7">Scheduling</div>

      <div className="hidden sm:block sm:rounded-lg sm:shadow-md sm:ml-7 sm:border-2 sm:outline-none sm:border-gray-400 sm:mt-4 sm:h-screen">
        {/* schedule for */}
        <div className="flex gap-6 mt-4">
          <div>
            <h4 className="text-gray-900 font-semibold text-sm pl-3 mt-1">
              schedule for
            </h4>
          </div>
          {/* Dropdown for selecting Drivers or Vehicles */}
          <div className="mb-2">
            <select
              value={selectedOption}
              onChange={handleOptionChange}
              className="p-2 border border-gray-400 text-sm font-semibold rounded w-[150px] h-[35px]"
            >
              <option className="text-sm font-semibold" value="Drivers">
                Drivers
              </option>
              <option className="text-sm font-semibold" value="Vehicles">
                Vehicles
              </option>
            </select>
          </div>

          {/* Buttons for selecting view */}
          <div className="flex gap-4 ">
            <div>
              <h1 className="font-semibold">View:</h1>
            </div>
            <div className="flex gap-4">
              <div>
                <button onClick={() => handleViewChange("day")} className="btn">
                  Day
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleViewChange("week")}
                  className="btn bg-blue-800 w-[80px]"
                >
                  Week
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleViewChange("month")}
                  className="btn"
                >
                  Month
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* calendar & driver details */}

        <div className="flex gap-2">
          <div className="mt-5">
            <Calendar
              onChange={onChange}
              value={value}
              className="w-[220px] ml-3 text-center"
              calendarClassName="custom-calendar"
              prev2Label={null}
              next2Label={null}
              style={{ fontFamily: "Arial", fontSize: "16px" }} // Customize calendar font style
              tileClassName={({ date }) => {
                const isToday = date.getDate() === new Date().getDate();
                const weekNumber = Math.ceil(date.getDate() / 7);
                if (weekNumber === 3) {
                  return isToday
                    ? "bg-blue-600 text-gray-900"
                    : "bg-orange-500"; // Customize colors as needed
                } else {
                  return isToday
                    ? "bg-gray-200 text-gray-900 rounded-full"
                    : "";
                }
              }}
              navigationLabel={({ date, label }) => (
                <div className="flex justify-between items-center">
                  <button className="text-sm font-bold text-black mx-14">
                    {label}
                  </button>
                </div>
              )}
            />
            <style>
              {`
              .react-calendar__month-view__weekdays__weekday abbr {
                color: gray !important;
                text-decoration: none !important;
                font-size: 12px;
              }
            `}
            </style>
          </div>
          {/* driver details */}
          <div className="mb-12">
            <div className="text-center font-bold">February 15-21, 2021</div>
            <div className="rounded-lg shadow-md ml-7 border-2 outline-none border-gray-400 mt-4 w-[65.5rem] bg-white h-[500px]">
              {/* table title */}
              <div className="table container">
                {/* title */}
                <div className="flex  p-6 font-semibold text-sm">
                  <div className="w-[25%]">
                    <h4>Vehicles</h4>
                  </div>
                  <div  style={{
                            display: "grid",
                            gridTemplateColumns:
                              "auto auto auto auto auto auto auto",
                            gap: "15px",
                            width: '82%'
                          }}>
                    <h4>Sun 15</h4>
                    <h4>Mon 16</h4>
                    <h4>Tue 17</h4>
                    <h4>Wed 18</h4>
                    <h4>Thu 19</h4>
                    <h4>Fri 20</h4>
                    <h4>Sat 21</h4>
                  </div>
                </div>
                <div className="border border-gray-400 m-auto w-full"></div>

                {/* Table content */}
                <div className="flex justify-between p-3 font-semibold text-sm">
                  {/* First item under Vehicles title */}
                  <div className="flex flex-col w-full gap-5 items-center">
                    {userData.map((item) => (
                      <div className="flex w-full" key={item.userName}>
                        <div className="flex gap-2 mr-[5rem] ">
                          <div>
                            <img className="w-20 h-12" src={profile2} alt="" />
                          </div>
                          <div>
                            <h4>{item.userName}</h4>
                            <p className="text-[10px] text-gray-500">
                              {item.userRole}
                            </p>
                          </div>
                        </div>

                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns:
                              "auto auto auto auto auto auto auto",
                            width: "100%",
                            gap: "15px",
                          }}
                        >
                          {item.schedule.map((scheduleData) => {
                            const startDate = convertDateToDayNumber(scheduleData.startDate);
                            const endDate = convertDateToDayNumber(scheduleData.endDate)
                            const dateDifference = endDate - startDate
                           
                            console.log(dateDifference);
                            console.log(endDate);

                            return (
                              <div
                                key={scheduleData.id}
                                className="flex justify-between"
                                // style={{ gridColumn: gridColumnSpan }}
                                style={{
                                  gridColumn: `${startDate} / span ${dateDifference}`,
                                }}
                              >
                                <div
                                  className="flex flex-col text-left h-[60px] rounded-lg w-full  bg-blue-300  pl-2"
                                  onClick={() => {
                                    console.log(selectedSchedule),
                                      setSelectedSchedule(scheduleData),
                                      setIsModalOpen(true);
                                  }}
                                >
                                  <h4 className="text-sm ">
                                    {scheduleData.vehicle}
                                  </h4>
                                  <p className="text-xs text-gray-700">
                                    {scheduleData.driver}
                                  </p>
                                  <p className="text-xs text-gray-700">
                                    {scheduleData.client}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Vertical line */}
                  <div className="border border-gray-400 h-[31.2rem] ml-[200px] absolute top-[362px]"></div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Modal */}
      {isModalOpen && (
        <div className="fixed top-20 left-0 z-1000 w-full  bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-3/4 md:w-1/2 lg:w-1/3 h-200%">
            <h2 className="text-xl font-bold mb-4">Schedule Overview</h2>
            <div className="border border-blue-900 m-auto w-full"></div>

            {selectedSchedule && (
              <div className="flex gap-4 mt-4">
                <div>
                  <img src={selectedSchedule.image} />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">{selectedSchedule.vehicle}</p>
                  <p className="text-sm text-gray-800">
                    {selectedSchedule.size}
                  </p>
                  <p className="text-sm text-red-600">
                    {selectedSchedule.condition}
                  </p>
                </div>
              </div>
            )}

            <div className="mt-5 my-10">
              {/* Render schedule details */}
              <div className="space-y-4">
                <div className="">
                  <p className="font-bold text-lg">
                    Driver:{" "}
                    <span className="p-4 text-sm text-gray-700">
                      {selectedSchedule?.driver}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="font-bold text-sm">
                    {" "}
                    Customer:{" "}
                    <span className="p-4 text-xs text-gray-700">
                      {selectedSchedule?.customer}
                    </span>
                  </p>
                </div>

                <div>
                  <p className="font-bold text-sm">
                    Start Date:{" "}
                    <span className="p-4 text-xs text-gray-700">
                      {selectedSchedule?.startDate
                        ? new Date(
                            selectedSchedule.startDate
                          ).toLocaleDateString()
                        : ""}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="font-bold text-sm">
                    End Date:{" "}
                    <span className="p-4 text-xs text-gray-700">
                      {" "}
                      {selectedSchedule?.endDate
                        ? new Date(
                            selectedSchedule.endDate
                          ).toLocaleDateString()
                        : ""}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="font-bold text-sm">
                    {" "}
                    PickUp Location:{" "}
                    <span className="p-4 text-xs text-gray-700">
                      {selectedSchedule?.pickUpLocation}
                    </span>
                  </p>
                </div>

                <div>
                  <p className="font-bold text-sm">
                    {" "}
                    DropOff Location:{" "}
                    <span className="p-4 text-xs text-gray-700">
                      {selectedSchedule?.dropOffLocation}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* ))} */}

            <button
              onClick={handleCloseModal}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scheduling;
