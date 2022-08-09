export interface dataInterface {
    weekDay: string,
    Hour: string,
    Period: string,
    date:string,
    hourNumber:number
}

class _date{
    week: string[]
    constructor() {
        this.week = [
            "domingo",
            "segunda",
            "terça",
            "quarta",
            "quinta",
            "sexta",
            "sábado",
        ]
    }


    public getData (timesTemp: number, timezone: number = 0): dataInterface {
        const data = new Date((timesTemp + timezone) * 1000);
        const hour = Math.ceil(data.getUTCHours()).toString().padStart(2,"0");
        const min = data.getUTCMinutes().toString().padStart(2,"0");
        const period = ""
        return {
            weekDay: this.week[data.getDay()],
            Hour: `${hour}:${min}`,
            hourNumber:data.getHours(),
            Period: period,
            date: `${data.getUTCDate().toString().padStart(2,"0")}/${data.getUTCMonth().toString().padStart(2,"0")}/${data.getUTCFullYear()}`
        }
    }
}

export default _date;