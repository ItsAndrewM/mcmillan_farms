const SchoolBookingTemplate = ({
  firstDate,
  firstTime,
  secondDate,
  secondTime,
  thirdDate,
  thirdTime,
  classSize,
  phone,
  email,
}) => {
  return (
    <div>
      <p>Class Size: {classSize}</p>
      <p>Phone number: {phone}</p>
      <p>Email: {email}</p>
      <ol>
        <li>
          {"1st Choice"}
          <ul>
            <li>
              {firstDate} at {firstTime}
            </li>
          </ul>
        </li>
        <li>
          {"2nd Choice"}
          <ul>
            <li>
              {secondDate} at {secondTime}
            </li>
          </ul>
        </li>
        <li>
          {"3rd Choice"}
          <ul>
            <li>
              {thirdDate} at {thirdTime}
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default SchoolBookingTemplate;
