'use strict';

export class Util {
    static addZero = (x:number) => {
        if (x < 10) {
            return "0" + x;
        }
        return '' + x;
    }

    static toDate = (timestamp:number) => {
        let date = new Date(timestamp);
        let year = date.getFullYear();
        let month = date.getMonth() + 1; // (0-11)
        let day = date.getDate();
        return year + '-' + this.addZero(month) + '-' + this.addZero(day);
    }

    static convertTime = (timeString:string) => {
        const timestamp = Date.parse(timeString);
        const now = new Date().getTime();
        const pass = Math.abs(now - timestamp) / (1000 *60 * 60);
        if( pass >= 24) {
            return this.toDate(timestamp);
        } else if(pass < 24 && pass >= 1) {
            return pass + '시간 전';
        } else if (pass < 1 ) {
            if(pass/60 < 1) {
                return "방금 전";
            } else {
                return Math.round(Math.abs(now - timestamp) / (1000 *60)) + '분전';
            }
        }
    }
    static imageLoader = (url) => {
        console.log(url);
        return `${url}`;
    }
}