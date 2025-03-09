//TODO: rework to fit genereal use case

import React, { useState, useEffect } from 'react';

import styles from '../css/App.module.css';

export const ICalenderButton = () => {
    const handleDownload = () => {
        const eventContent = `BEGIN:VCALENDAR
          VERSION:2.0
          PRODID:-//Your Organization//Your Product//DE
          METHOD:PUBLISH
          BEGIN:VTIMEZONE
          TZID:Europe/Berlin
          BEGIN:DAYLIGHT
          DTSTART:20240330T020000
          RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU
          TZNAME:CEST
          TZOFFSETFROM:+0100
          TZOFFSETTO:+0200
          END:DAYLIGHT
          BEGIN:STANDARD
          DTSTART:20241029T030000
          RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU
          TZNAME:CET
          TZOFFSETFROM:+0200
          TZOFFSETTO:+0100
          END:STANDARD
          END:VTIMEZONE
          BEGIN:VEVENT
          UID:123456789@example.com
          DTSTAMP:20240930T100000Z
          DTSTART;TZID=Europe/Berlin:20250906T133000
          DTEND;TZID=Europe/Berlin:20250907T000000
          SUMMARY:Hochzeit Iris & Calvin
          DESCRIPTION:Iris & Calvin heiraten endlich!
          LOCATION:Wien
          END:VEVENT
          END:VCALENDAR`.replace(/\n\s+/g, "\n");

        const blob = new Blob([eventContent], { type: 'text/calendar' });
        const url = URL.createObjectURL(blob);
    
        // Create a temporary anchor element and trigger download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'termin.ics';
        
        setTimeout(() => {
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 0);
    };

    return (
        <button
          onClick={handleDownload}
          style={{
            padding: "10px 20px",
            color: "white",
            border: "none",
            borderRadius: "0px",
            cursor: "pointer"
          }}
          className={styles.btn_bg}
        >
          Termin hinzufügen
        </button>
    );
};

export default ICalenderButton;