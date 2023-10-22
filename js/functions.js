const checkingMeetingTime = (startWork, endWork, startMeeting, durationMeeting) => {
  const createNumber = (time) => Number(time.replace(/:/g, '.'));
  const getRemainderNumber = (number) => Math.floor((number % 1) * Math.pow(10, 2));

  startWork = createNumber(startWork);
  endWork = createNumber(endWork);
  startMeeting = createNumber(startMeeting);

  const startWorkInMinutes = Math.trunc(startWork) * 60 + getRemainderNumber(startWork);
  const endWorkInMinutes = Math.trunc(endWork) * 60 + getRemainderNumber(endWork);
  const startMeetingInMinutes = Math.trunc(startMeeting) * 60 + getRemainderNumber(startMeeting);

  const endMeetingInMinutes = startMeetingInMinutes + durationMeeting;

  /*console.log(startWork);
  console.log(endWork);
  console.log(startMeeting);
  console.log(startWorkInMinutes);
  console.log(endWorkInMinutes);
  console.log(startMeetingInMinutes);
  console.log(endMeetingInMinutes);*/

  if (endMeetingInMinutes >= startWorkInMinutes && endMeetingInMinutes <= endWorkInMinutes) {
    return true;
  }

  return false;
};

checkingMeetingTime('8:00', '17:30', '08:00', 900);

