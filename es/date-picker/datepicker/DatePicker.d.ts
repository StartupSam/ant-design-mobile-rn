import React from 'react';
import DatePickerProps from './DatePickerProps';
declare class DatePicker extends React.Component<DatePickerProps, any> {
    static defaultProps: {
        prefixCls: string;
        pickerPrefixCls: string;
        locale: {
            year: string;
            month: string;
            day: string;
            hour: string;
            minute: string;
            am: string;
            pm: string;
        };
        mode: string;
        disabled: boolean;
        minuteStep: number;
        onDateChange(): void;
        use12Hours: boolean;
    };
    state: {
        date: any;
    };
    defaultMinDate: any;
    defaultMaxDate: any;
    UNSAFE_componentWillReceiveProps(nextProps: {
        date: any;
        defaultDate: any;
    }): void;
    getNewDate: (values: any, index: any) => any;
    onValueChange: (values: any, index: any) => void;
    onScrollChange: (values: any, index: any) => void;
    setHours(date: Date, hour: number): void;
    setAmPm(date: any, index: any): void;
    getDefaultMinDate(): any;
    getDefaultMaxDate(): any;
    getDate(): any;
    getValue(): any;
    getMinYear(): any;
    getMaxYear(): any;
    getMinMonth(): any;
    getMaxMonth(): any;
    getMinDay(): any;
    getMaxDay(): any;
    getMinHour(): any;
    getMaxHour(): any;
    getMinMinute(): any;
    getMaxMinute(): any;
    getMinDate(): any;
    getMaxDate(): any;
    getDateData(): {
        key: string;
        props: {
            children: any[];
        };
    }[];
    getDisplayHour(rawHour: number): number;
    getTimeData(date: any): {
        cols: {
            key: string;
            props: {
                children: any[];
            };
        }[];
        selMinute: any;
    };
    clipDate(date: any): any;
    getValueCols(): {
        value: any[];
        cols: any[];
    };
    render(): JSX.Element;
}
export default DatePicker;
