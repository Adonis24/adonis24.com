import React from "react";
import { useState, useEffect } from "react";

import ReactDOM from "react-dom";
import { useFormikContext,useField, Field } from "formik";
import CssBaseline from '@material-ui/core/CssBaseline';
// --- Formik  imports --- //
import { Form } from "formik";

// --- Material Ui Picker Imports --- //
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import ru from "date-fns/locale/ru";
//registerLocale("ru", ru);

import DateFnsUtils from "@date-io/date-fns";
import parseISO from "date-fns/parseISO";
function jsDateToLocalISO8601DateString(date) {
  return [
      String(date.getFullYear()),
      String(101 + date.getMonth()).substring(1),
      String(100 + date.getDate()).substring(1),
  ].join('-');
}

function dateStringToLocalDate(s) {
  if (!s) return null;
  return new DateFnsUtils().parse(s, 'yyyy-MM-dd');
}

export default function DataPickerMui({dateStart,dateEnd,setFieldValue}) {

  // const [field] = useField({ name: name, value: startDate });
  // const [field2] = useField({ name: name2, value: endDate });
  const [startDate, setStartDate] = useState(dateStart);
  const [endDate, setEndDate] = useState(dateEnd);
  
  // const [field] = useField({ name: name, value: dateStart });
  // const [field2] = useField({ name: name2, value: dateEnd });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ru}>
        <CssBaseline/>
    <div style={{ display: "inline-flex", marginBottom: "10px" }}>
      <div className="form-group">
        <KeyboardDatePicker 
          id="date-picker-dialog-start"
          label=" "
          inputVariant="outlined"
          format="dd-MM-yyyy"
          //mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          value={(typeof(dateStart)=== "string" ? dateStart:dateStringToLocalDate(dateStart))}
          onChange={(value) => {
            setFieldValue("dateStart", jsDateToLocalISO8601DateString(value));
            //setStartDate(value);
          }}
          KeyboardButtonProps={{
            "aria-label": "Задать дату",
          }}
        />
      </div>
      <div className="form-group">
       
        <KeyboardDatePicker
          id="date-picker-dialog-end"
          label=" "
          inputVariant="outlined"
          format="dd-MM-yyyy"
         // mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
         value={(typeof(dateEnd)=== "string" ? dateEnd:dateStringToLocalDate(dateEnd))}
          onChange={(value) => {
            
            setFieldValue("dateEnd", jsDateToLocalISO8601DateString(value));
           // setEndDate(value);
          }}
          KeyboardButtonProps={{
            "aria-label": "Задать дату",
          }}
        />
      </div>
    </div>
    </MuiPickersUtilsProvider>
  );
}
