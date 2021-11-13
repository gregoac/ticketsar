import EventListContainer from './EventListContainer';
import { DarkContext } from '../context/DarkContext';
import { useContext } from 'react';

const EventPage = () => {

    const {isDark} = useContext(DarkContext);

    return (
        <div className={`event-page width-90 ${!isDark ? 'event-page-white' : ''}`}>
        <h1>EVENTOS</h1>
        <h4>NOV</h4>
        <EventListContainer />
        </div>
    );
}

export default EventPage;