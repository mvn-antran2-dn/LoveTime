import DateTimeDisplay from "../component/modules/coundown";
import { useCountdown } from "../hook/useCoundown";

const ExpiredNotice = () => {
  return (
    <section className="section-banner-countdown">
      <div className="container">
        <div className="banner-countdown">
          <h4>Happy New Year.</h4>
        </div>
      </div>
    </section>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <section className="section-banner-countdown">
      <div className="container">
        <div className="banner-countdown-total">
          <div className="banner-countdown flex">
            <div className="countdown-banner flex" >
              <div className="count-total ">
                <div className="count-item">
                  <DateTimeDisplay value={days} isDanger={false} />
                </div>
                <span>Ngày</span>
              </div>
              <div className="count-total ">
                <div className="count-item">
                  <DateTimeDisplay value={hours} isDanger={false} />
                </div>
                <span>Giờ</span>
              </div>
              <div className="count-total ">
                <div className="count-item">
                  <DateTimeDisplay value={minutes} isDanger={false} />
                </div>
                <span>Phút</span>
              </div>
              <div className="count-total ">
                <div className="count-item">
                  <DateTimeDisplay value={seconds} isDanger={false} />
                </div>
                <span>Giây</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Countdown = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
export default Countdown;