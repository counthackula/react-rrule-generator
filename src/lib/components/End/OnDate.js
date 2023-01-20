import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateTime from 'react-datetime';
import 'moment/min/locales';

import { DATE_TIME_FORMAT } from '../../constants/index';
import translateLabel from '../../utils/translateLabel';

const EndOnDate = ({
  id,
  onDate: {
    date,
    options,
  },
  handleChange,
  translations,
}) => {
  const locale = options.weekStartsOnSunday ? 'en-ca' : 'en-gb';
  const calendarAttributes = {
    'aria-label': translateLabel(translations, 'end.tooltip'),
    value: date,
    // dateFormat: DATE_TIME_FORMAT,
    locale,
    readOnly: false,
  };


  return (
    <div className="col-6 col-sm-3">
      <input
        {...calendarAttributes}
        type="date"
        key={`${id}-calendar`}
        onChange={(event) => {
         console.log(event.target.value);
                      const editedEvent = {
                        target: {
                          value: event.target.value,
                          name: 'end.onDate.date',
                        },
                      };

                      handleChange(editedEvent);
                    }}
        id="end.onDate.date"
        name="end.onDate.date"
        required="required"
        className="form-control"
      />

      {/* <input
        {...calendarAttributes}
        key={`${id}-calendar`}
        type="datetime-local"
        id="end.onDate.date"
        name="end.onDate.date"
        required="required"
        {...calendarAttributes}
        onChange={(event) => {
          const editedEvent = {
            target: {
              value: event.target.value,
              name: 'end.onDate.date',
            },
          };

          handleChange(editedEvent);
        }}
      /> */}
    </div>
  );
};

EndOnDate.propTypes = {
  id: PropTypes.string.isRequired,
  onDate: PropTypes.shape({
    date: PropTypes.string.isRequired,
    options: PropTypes.shape({
      weekStartsOnSunday: PropTypes.bool,
      calendarComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default EndOnDate;
