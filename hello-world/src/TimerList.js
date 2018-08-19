class TimerList extends React.Component {
    render() {
        const timers = this.props.timers.map((timer) => (
            <ToggleableTimer
                key={timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince}
            />
        ));
        return (
            <div id='timers'>
                {timers}
            </div>
        );
    }
}

export default TimerList;