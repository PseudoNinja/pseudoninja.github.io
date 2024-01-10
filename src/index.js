class Index extends React.Component {
    componentDidMount = () => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/service-worker.js").then(
                function (registration) {
                    console.log(
                        "Service Worker registration successful with scope: ",
                        registration.scope
                    );
                },
                function (err) {
                    console.log("Service Worker registration failed: ", err);
                }
            );
        }
        render();
    };
}
