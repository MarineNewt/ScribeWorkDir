import { useEffect } from "react";
import styles from '../styles/Home.module.css';

export default function GetWeather() {
  useEffect(() => {
    !(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = "https://weatherwidget.io/js/widget.min.js";
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, "script", "weatherwidget-io-js");
  }, []);
  return (
    <div className="weather" style={{}} >
      <a class="weatherwidget-io" href="https://forecast7.com/en/47d61n122d33/seattle/?unit=us" data-label_1="SEATTLE" data-font="Tinos" data-days="3" data-theme="pure" >SEATTLE</a> 
    </div>
  );
}