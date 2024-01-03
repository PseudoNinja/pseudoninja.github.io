class WorkItem {
    where = "";
    what = "";
    start = null;
    stop = null;

    constructor(where, what, start, stop) {
        this.where = where;
        this.what = what;
        this.start = new Date(start);
        this.stop = new Date(stop);
    }
}

const history = [
    new WorkItem(
        "Orion Advisor Technology",
        "Application Development Leader",
        "2021-12",
        "2023-10"
    ),
    new WorkItem(
        "Moody's Analytics",
        "Principle Software Engineer",
        "2014-09",
        "2021-12"
    ),
];

export default function WorkHistory() {
    return (
        <div className="workHistory">
            {history.forEach((wi) => {
                <div className="workItem">
                    <h3>
                        {wi.what} : {wi.where}
                    </h3>
                    <span>
                        {wi.start} - {wi.stop}
                    </span>
                </div>;
            })}
        </div>
    );
}
