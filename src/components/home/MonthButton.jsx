import { Button } from "../style/CalendarStyle";

const MonthButton = ({ monthNum }) => {
  return <Button>{monthNum}월</Button>;
};

export default MonthButton;
