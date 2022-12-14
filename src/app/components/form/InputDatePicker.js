import { es } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import styled from "styled-components";
import { ContainerInputLabel } from "./styles";

const Container = styled(ContainerInputLabel)`
  position: relative;

  .input-form {
    border: none;
    outline: none;
    line-height: 20px;
    font-size: var(--font-size-m);
    resize: vertical;

    &:disabled {
      background: transparent;
    }

    &::placeholder {
      font-size: 0.94em;
    }
  }
`;

const ContainerDateRange = styled(DateRange)`
  position: absolute;
  top: 60px;
  left: -30px;
  z-index: 200;
  outline: var(--border-gray);
  .rdrWeekDay {
    line-height: 2.5em;
  }
  .rdrMonth {
    width: auto;
  }
  .rdrDay {
    height: 2.7em;
  }

  @media (max-width: 887px) {
    left: 0;
  }
`;

const initDateRange = [
  {
    startDate: new Date(),
    endDate: null,
    key: "selection",
  },
];

function InputDatePicker({
  label,
  placeholder,
  setState,
  nameState,
  valueState,
}) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState(initDateRange);
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    window.addEventListener("click", (e) => {
      const path = e.path || (e.composedPath && e.composedPath());
      if (path) {
        const pos = path.findIndex((item) => item.id === "inputDatePicker");
        if (pos === -1) setShowDatePicker(false);
      }
    });
  }, []);

  useEffect(() => {
    const { startDate, endDate } = dateRange.at(0);
    if (startDate !== endDate) {
      setShowDatePicker(false);
      handleValue();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateRange]);

  useEffect(() => {
    if (typeof valueState === "string" && valueState === "") {
      setDateRange(initDateRange);
      setStateParent(initDateRange);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueState]);

  useEffect(() => {
    setStateParent(dateRange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInput]);

  const setStateParent = (value) => {
    setState({
      target: {
        name: nameState,
        value,
      },
    });
  };

  const generateDatePickerText = (date) => {
    return date.toLocaleDateString("es-PE", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const generateRangeDatePickerText = () => {
    const { startDate, endDate } = dateRange.at(0);
    if (startDate && endDate) {
      const textStartDate = generateDatePickerText(startDate);
      const textEndDate = generateDatePickerText(endDate);

      return textStartDate === textEndDate
        ? textStartDate
        : `${textStartDate} - ${textEndDate}`;
    }
    return "";
  };

  const handleValue = () => {
    setValueInput(generateRangeDatePickerText());
  };

  return (
    <Container id="inputDatePicker">
      {label && (
        <span className="label-form" onClick={() => setShowDatePicker(true)}>
          {label}
        </span>
      )}
      <input
        type="text"
        className="input-form"
        placeholder={placeholder}
        value={valueInput}
        onChange={handleValue}
        onClick={() => setShowDatePicker(true)}
      />
      {showDatePicker && (
        <ContainerDateRange
          locale={es}
          editableDateInputs={false}
          onChange={(item) => setDateRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
          showDateDisplay={false}
        />
      )}
    </Container>
  );
}

export default InputDatePicker;
